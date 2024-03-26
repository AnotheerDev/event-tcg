import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

// Ce layout sera utilisé pour les pages qui n'ont pas de layout spécifique (navbar et footer comme sur la page de login par exemple)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
