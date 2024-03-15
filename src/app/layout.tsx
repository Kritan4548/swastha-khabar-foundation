import type { Metadata } from "next";

import "./globals.css";

import ExtraNav from "@/components/layout/extra-nav";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

import { Toaster } from "@/components/ui/sonner";

// const inter = Cambria({ subsets: ["latin"] });

export const metadata = {
  title: "Swasthya Khabar Foundation",
  keywords: "Swasthya Khabar Foundation",
  openGraph: {
    title: "Swasthya Khabar Foundation",
    description: "Non Profit Organisation",
    url: "https://www.swasthyafoundation.org",
    siteName: "Swasthya Khabar Foundation",
    images: [
      {
        url: "https://www.swasthyafoundation.org/opengraph.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={" text-[#3a3a3a] text-xl"}>
        <div className="flex flex-col">
          <div className="flex flex-col min-h-screen">
            <ExtraNav />
            <Nav />
            <div className="flex-1 flex flex-col">{children}</div>
          </div>
          <Footer />
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
