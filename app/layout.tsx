import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Keno Mataitea",
  description: "Pronostics optimisés pour Keno, EuroMillions et EuroDreams",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
