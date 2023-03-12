import Footer from "components/Footer";
import Header from "components/Header";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Mohamed Achaq",
    template: "%s | Mohamed Achaq",
  },
  description:
    "Mohamed Achaq is a software engineer, designer, and artist based in Morocco. He specializes in designing and building full-stack web applications .",
  openGraph: {
    title: "Mohamed Achaq",
    description: "Software developer, UI/UX designer and artist",
    url: "https://achaq.dev",
    siteName: "Mohamed Achaq",
    images: [
      {
        url: "https://achaq.dev/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Mohamed Achaq",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="relative scroll-smooth bg-bg-primary-light antialiased dark:bg-bg-primary-dark px-8 md:px-24 max-w-[1920px] mx-auto">
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </Providers>
    </html>
  );
}
