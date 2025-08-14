"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between">
        <span className="font-bold">Keno Mataitea</span>
        <div className="flex gap-4">
          <Link href="/">Accueil</Link>
          <Link href="/keno">Keno</Link>
          <Link href="/euromillions">EuroMillions</Link>
          <Link href="/eurodreams">EuroDreams</Link>
        </div>
      </div>
    </nav>
  );
}
