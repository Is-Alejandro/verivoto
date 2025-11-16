import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Navigation } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Icono personalizado para el marcador
const customIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MesaMapSectionProps {
  votingLocation: {
    nombre: string;
    direccion: string;
    coordenadas: {
      lat: number;
      lng: number;
    };
  };
}

export default function MesaMapSection({ votingLocation }: MesaMapSectionProps) {
  const handleNavigate = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${votingLocation.coordenadas.lat},${votingLocation.coordenadas.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
      <div className="p-6 pb-4">
        <h2 className="text-xl font-bold text-neutral-900 mb-2">
          Ubicación del Local
        </h2>
        <p className="text-sm text-neutral-600">
          Localiza tu centro de votación en el mapa
        </p>
      </div>

      {/* Mapa */}
      <div className="h-64 w-full relative z-0">
        <MapContainer
          center={[votingLocation.coordenadas.lat, votingLocation.coordenadas.lng]}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[votingLocation.coordenadas.lat, votingLocation.coordenadas.lng]}
            icon={customIcon}
          >
            <Popup>
              <strong>{votingLocation.nombre}</strong>
              <br />
              {votingLocation.direccion}
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Botón de navegación */}
      <div className="p-6 pt-4">
        <button
          onClick={handleNavigate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <Navigation size={20} />
          Cómo llegar
        </button>
      </div>
    </div>
  );
}
