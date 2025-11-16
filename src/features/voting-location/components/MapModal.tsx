import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import { X, Plus, Minus, Crosshair, Navigation } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix para los iconos de Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Icono personalizado para el destino (local de votación)
const DestinationIcon = L.divIcon({
  className: 'custom-destination-icon',
  html: `
    <div style="
      background-color: #facc15;
      width: 40px;
      height: 40px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="#1e293b" 
        style="transform: rotate(45deg);"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-10h2v2h-2zm0 4h2v4h-2z"/>
      </svg>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Icono personalizado para ubicación actual (azul)
const CurrentLocationIcon = L.divIcon({
  className: 'custom-current-icon',
  html: `
    <div style="
      background-color: #3b82f6;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Componente para controlar el mapa desde dentro
function MapController({ center, zoomDelta }: { center: [number, number] | null; zoomDelta: number | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.flyTo(center, 15, { duration: 1 });
    }
  }, [center, map]);
  
  useEffect(() => {
    if (zoomDelta !== null) {
      const currentZoom = map.getZoom();
      map.setZoom(currentZoom + zoomDelta);
    }
  }, [zoomDelta, map]);
  
  return null;
}

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  // Coordenadas de ejemplo (Lima, Perú - Santiago de Surco)
  const destination = { lat: -12.1391, lng: -76.9956 }; // Local de votación
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);
  const [routePath, setRoutePath] = useState<[number, number][]>([]);
  const [routeInfo, setRouteInfo] = useState<{ distance: number; duration: number } | null>(null);
  const [zoomDelta, setZoomDelta] = useState<number | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  // Función para obtener ruta real usando OSRM (permite CORS)
  const fetchRoute = async (start: { lat: number; lng: number }, end: { lat: number; lng: number }) => {
    try {
      // OSRM API pública - permite CORS
      const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
      
      console.log('Fetching route from:', start, 'to:', end);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Route data:', data);
      
      if (data.routes && data.routes[0] && data.routes[0].geometry) {
        const coordinates = data.routes[0].geometry.coordinates;
        console.log('Number of route points:', coordinates.length);
        
        // Convertir de [lng, lat] a [lat, lng] para Leaflet
        const path = coordinates.map((coord: number[]) => [coord[1], coord[0]] as [number, number]);
        setRoutePath(path);
        
        // Obtener información de distancia y duración
        const route = data.routes[0];
        setRouteInfo({
          distance: route.distance / 1000, // convertir a km
          duration: route.duration / 60, // convertir a minutos
        });
        
        console.log('Route set successfully:', path.length, 'points');
      } else {
        console.error('Invalid data structure:', data);
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      console.error("Error obteniendo ruta:", error);
      // Si falla, usar ruta simple
      const fallbackPath = [
        [start.lat, start.lng] as [number, number],
        [end.lat, end.lng] as [number, number],
      ];
      setRoutePath(fallbackPath);
      console.log('Using fallback route');
    }
  };

  // Obtener ubicación actual del usuario
  useEffect(() => {
    if (isOpen && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          // Obtener ruta real
          fetchRoute(location, destination);
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
          // Si falla, usar ubicación de ejemplo
          const fallbackLocation = { lat: -12.1200, lng: -77.0300 };
          setUserLocation(fallbackLocation);
          fetchRoute(fallbackLocation, destination);
        }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Función para centrar en la ubicación actual
  const handleCenterLocation = () => {
    if (userLocation) {
      setMapCenter([userLocation.lat, userLocation.lng]);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          setMapCenter([location.lat, location.lng]);
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
          alert("No se pudo obtener tu ubicación. Verifica los permisos de GPS.");
        }
      );
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }
  };

  if (!isOpen) return null;

  // Función para abrir Google Maps con navegación
  const handleStartNavigation = () => {
    const origin = userLocation 
      ? `${userLocation.lat},${userLocation.lng}` 
      : `${-12.1200},${-77.0300}`;
    const dest = `${destination.lat},${destination.lng}`;
    
    // URL de Google Maps con origen y destino
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;
    
    // Abrir en nueva pestaña
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      {/* Mapa */}
      <div className="h-full w-full">
        <MapContainer
          center={[destination.lat, destination.lng]}
          zoom={14}
          className="h-full w-full"
          zoomControl={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MapController center={mapCenter} zoomDelta={zoomDelta} />
          
          {/* Ruta punteada */}
          <Polyline
            positions={routePath}
            pathOptions={{
              color: "#ef4444",
              weight: 3,
              dashArray: "10, 10",
            }}
          />

          {/* Marcador del destino */}
          <Marker position={[destination.lat, destination.lng]} icon={DestinationIcon}>
            <Popup>I.E. 2025 "Manuel Scorza"</Popup>
          </Marker>

          {/* Marcador del origen */}
          {userLocation && (
            <Marker position={[userLocation.lat, userLocation.lng]} icon={CurrentLocationIcon}>
              <Popup>Tu ubicación</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      {/* Botón cerrar (X) */}
      <button
        onClick={onClose}
        className="absolute top-6 left-4 bg-white rounded-full p-3 shadow-lg hover:bg-neutral-50 active:bg-neutral-100 transition z-[1000]"
      >
        <X size={24} className="text-neutral-900" />
      </button>

      {/* Botones de control (derecha) */}
      <div className="absolute top-6 right-4 flex flex-col gap-3 z-[1000]">
        {/* Zoom in */}
        <button 
          onClick={() => {
            setZoomDelta(1);
            setTimeout(() => setZoomDelta(null), 100);
          }}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-neutral-50 active:bg-neutral-100 transition"
        >
          <Plus size={24} className="text-neutral-900" />
        </button>
        
        {/* Zoom out */}
        <button 
          onClick={() => {
            setZoomDelta(-1);
            setTimeout(() => setZoomDelta(null), 100);
          }}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-neutral-50 active:bg-neutral-100 transition"
        >
          <Minus size={24} className="text-neutral-900" />
        </button>
      </div>

      {/* Botón centrar ubicación */}
      <button 
        onClick={handleCenterLocation}
        className="absolute bottom-56 right-4 bg-white rounded-full p-4 shadow-lg hover:bg-neutral-50 active:bg-neutral-100 transition z-[1000] mb-5"
      >
        <Crosshair size={24} className="text-neutral-900" />
      </button>

      {/* Card de información inferior */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-6 z-[1000]">
        <h2 className="text-xl font-bold text-neutral-900 mb-2">
          I.E. 2025 "Manuel Scorza"
        </h2>
        <p className="text-sm text-neutral-600 mb-4">
          Av. Los Próceres 1234, Surco
        </p>

        {/* Tiempo y distancia */}
        <div className="flex items-center gap-6 mb-5">
          <div className="text-blue-600 font-semibold text-lg">
            {routeInfo ? `${Math.round(routeInfo.duration)} min` : '15 min'}
          </div>
          <div className="text-neutral-600 text-sm">
            {routeInfo ? `${routeInfo.distance.toFixed(1)} km` : '4.2 km'}
          </div>
        </div>

        {/* Botón iniciar navegación */}
        <button 
          onClick={handleStartNavigation}
          className="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-neutral-900 font-semibold py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <Navigation size={20} />
          Iniciar navegación
        </button>
      </div>
    </div>
  );
}
