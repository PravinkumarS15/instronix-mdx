import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-dotted-pattern bg-contain">{children}</main>
      <Footer />
    </div>
  );
}
