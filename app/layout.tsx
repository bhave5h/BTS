import "./globals.css";
import Navbar from "../components/sidenavbar";
import Footer from "../components/Footer";


export const metadata = {
  title: "Bigtop Social",
  description: "A simple starting layout for the app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="site-header">
            
            <Navbar />
          </header>

          <main className="site-main">
            <div className="container">{children}</div>
          </main>

          {/* FOOTER COMPONENT */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
