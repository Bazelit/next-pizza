import { ReactNode, Suspense } from "react";
import { Metadata } from "next";
import { Spinner } from "@heroui/spinner";

import { Providers } from "../providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/shared/navbar";
import BackToTop from "@/components/ui/back-to-top";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <BackToTop />
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          <Suspense
            fallback={
              <div className="flex justify-center items-start h-screen">
                <Spinner
                  size="lg"
                  color="primary"
                  label="Загрузка..."
                  variant="dots"
                />
              </div>
            }
          >
            {children}
          </Suspense>
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
