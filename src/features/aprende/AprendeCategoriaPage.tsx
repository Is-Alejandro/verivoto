import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  description?: string;
}

export default function AprendeCategoriaPage({ title, description }: Props) {

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">

      {/* HEADER */}
      <header className="px-4 pt-4 flex items-center gap-3">
        <button onClick={() => window.history.back()}>
          <ArrowLeft size={26} className="text-neutral-700" />
        </button>

        <h1 className="text-[20px] font-semibold text-neutral-900">
          {title}
        </h1>
      </header>

      {/* DESCRIPCIÓN */}
      {description && (
        <p className="px-4 mt-3 text-neutral-600 text-[14px]">
          {description}
        </p>
      )}

      {/* CONTENIDO */}
      <div className="mt-5 px-4">
        <p className="text-neutral-700 text-[15px]">
          (Aquí irán las lecciones, contenido y quizzes.)
        </p>
      </div>

    </div>
  );
}
