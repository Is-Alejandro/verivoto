import Layout from "../../components/layout/Layout";
import MatchTitle from "./components/MatchTitle";
import MatchSearchBar from "./components/MatchSeachBar";

export default function MatchPage() {
    return (
        <Layout>
            <div className="p-5 pb-20">

                <MatchTitle />

                {/* Barra de búsqueda */}
                <MatchSearchBar />


                {/* Selectores principales */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                    <select className="bg-white border border-neutral-300 px-3 py-2 rounded-xl">
                        <option>Áncash</option>
                    </select>

                    <select className="bg-white border border-neutral-300 px-3 py-2 rounded-xl">
                        <option>Presidenciales</option>
                    </select>
                </div>

                {/* Chips principales */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">salud</span>
                    <span className="px-3 py-1 bg-neutral-200 rounded-full text-sm">minería</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">animales</span>
                </div>

                {/* Chips secundarios */}
                <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-neutral-200 rounded-full text-sm">menor de 30</span>
                    <span className="px-3 py-1 bg-neutral-200 rounded-full text-sm">estudios completos</span>
                    <span className="px-3 py-1 bg-neutral-200 rounded-full text-sm">+</span>
                </div>

                {/* Contador */}
                <p className="mt-5 font-medium text-neutral-800">30 candidatos encontrados</p>

                {/* Lista de candidatos */}
                <div className="mt-4 flex flex-col gap-3">

                    {/* Card 1 */}
                    <div className="bg-white p-4 rounded-xl shadow">
                        <div className="flex gap-4">
                            <div className="w-14 h-14 bg-neutral-300 rounded-full"></div>

                            <div>
                                <h3 className="font-semibold text-neutral-900">Luis Quispe</h3>
                                <p className="text-sm text-neutral-600">Partido Popular | Edad: 45</p>
                                <p className="text-sm mt-1">
                                    <span className="font-semibold">Propuesta principal:</span> Mejorar el sistema de salud en zonas rurales.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    );
}
