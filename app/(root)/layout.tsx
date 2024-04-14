import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
