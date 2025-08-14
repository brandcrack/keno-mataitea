import ExportButtons from "@/components/ExportButtons";

export default function KenoPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Pronostics Keno</h1>
      <p className="text-gray-600 mt-2">Vos grilles optimisées pour le prochain tirage Keno.</p>
      <ExportButtons />
    </div>
  );
}
