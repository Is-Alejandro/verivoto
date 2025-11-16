import { ArrowLeft, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../i18n/useTranslation";

export default function AprendeHomePage() {
  const navigate = useNavigate();
  const t = useTranslation();

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">

      {/* HEADER */}
      <header className="px-4 pt-4 flex items-center gap-3">
        <button onClick={() => window.history.back()}>
          <ArrowLeft size={26} className="text-neutral-700" />
        </button>

        <GraduationCap size={28} className="text-blue-600" />

        <h1 className="text-[20px] font-semibold text-neutral-900">
          {t("aprender_title")}
        </h1>
      </header>

      {/* SUBTÍTULO */}
      <div className="px-4 mt-3">
        <h2 className="text-[17px] font-semibold text-neutral-900">
          {t("aprende_subtitle")}
        </h2>
        <p className="text-[14px] text-neutral-600 mt-1">
          {t("aprende_subtext")}
        </p>
      </div>

      {/* GRID DE CATEGORÍAS */}
      <div className="grid grid-cols-2 gap-4 px-4 mt-5">

        {/* CATEGORÍA 1 */}
        <button
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => navigate("/aprende/votacion")}
        >
          <img
            src="/images/aprende-votacion.png"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <p className="font-medium text-neutral-800 text-[15px] leading-tight">
              {t("categoria_votacion")}
            </p>

            {/* Barra progreso */}
            <div className="h-2 bg-neutral-200 rounded-full mt-2">
              <div className="h-full bg-blue-600 rounded-full w-1/4"></div>
            </div>
          </div>
        </button>

        {/* CATEGORÍA 2 */}
        <button
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => navigate("/aprende/historia")}
        >
          <img
            src="/images/aprende-historia.png"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <p className="font-medium text-neutral-800 text-[15px] leading-tight">
              {t("categoria_historia")}
            </p>
            <div className="h-2 bg-neutral-200 rounded-full mt-2">
              <div className="h-full bg-blue-600 rounded-full w-1/5"></div>
            </div>
          </div>
        </button>

        {/* CATEGORÍA 3 */}
        <button
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => navigate("/aprende/partidos")}
        >
          <img
            src="/images/aprende-partidos.png"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <p className="font-medium text-neutral-800 text-[15px] leading-tight">
              {t("categoria_partidos")}
            </p>
            <div className="h-2 bg-neutral-200 rounded-full mt-2">
              <div className="h-full bg-blue-600 rounded-full w-1/6"></div>
            </div>
          </div>
        </button>

        {/* CATEGORÍA 4 */}
        <button
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => navigate("/aprende/reglas")}
        >
          <img
            src="/images/aprende-reglas.png"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <p className="font-medium text-neutral-800 text-[15px] leading-tight">
              {t("categoria_reglas")}
            </p>
            <div className="h-2 bg-neutral-200 rounded-full mt-2">
              <div className="h-full bg-blue-600 rounded-full w-1/4"></div>
            </div>
          </div>
        </button>

      </div>

      {/* SECCIÓN LOGROS */}
      <div className="mt-7 px-4">
        <h3 className="font-semibold text-neutral-800 text-[17px]">
          {t("mis_logros")}
        </h3>

        <div className="bg-white rounded-xl p-4 shadow-sm mt-3">
          <p className="font-medium text-neutral-800">{t("logro_1")}</p>
          <p className="text-sm text-neutral-600 mt-1">
            {t("logro_1_desc")}
          </p>
        </div>
      </div>
    </div>
  );
}
