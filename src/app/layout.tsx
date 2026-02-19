import type { Metadata } from "next";
import "./globals.css";
import "yet-another-react-lightbox/styles.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "House Painters Vancouver BC | Shape of Paint",
    template: "%s | Shape of Paint",
  },
  description: "Professional house painters in Vancouver & the Lower Mainland. Interior, exterior & cabinet painting with master craftsmanship. Get your free estimate today.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        {/* <!-- ANALYTICS --> */}
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
        {/* <!-- CHAT_WIDGET --> */}
      </body>
    </html>
  );
}
