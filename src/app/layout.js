import Header from "@/components/shared/Header";
import "./globals.css";
import Footer from "@/components/shared/Footer";
export async function generateMetadata() {
  // SEO DATA FETCH
  return {
    title: "Home",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <NextTopLoader color="#269669" height={3} speed={200} /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
