"use client";
import { Download } from "lucide-react";

export default function ExportButtons() {
  return (
    <div className="flex gap-4 mt-4">
      <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600">
        <Download size={18} /> Exporter en PDF
      </button>
      <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-600">
        <Download size={18} /> Exporter en CSV
      </button>
    </div>
  );
}
