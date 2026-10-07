import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — roofers in Folkestone & East Kent`,
    template: `%s | ${site.name}, Folkestone`,
  },
  description: site.description,
  applicationName: site.name,
  robots: site.demoMode ? { index: false, follow: false } : undefined,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} — roofers in Folkestone & East Kent`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {site.demoMode ? (
          <div className="border-b border-white/10 bg-ink-soft px-4 py-2 text-center text-[0.78rem] leading-snug text-paper/85">
            Demonstration website — Crown &amp; Coast Roofing is a fictional company and all content
            on this site is demo material.
          </div>
        ) : null}
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
