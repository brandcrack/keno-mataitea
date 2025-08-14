import ExportButtons from "@/components/ExportButtons";

export default function EuroDreamsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Pronostics EuroDreams</h1>
      <p className="text-gray-600 mt-2">Grilles optimisées pour le prochain tirage.</p>
      <ExportButtons />
    </div>
  );
}
