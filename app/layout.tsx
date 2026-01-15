import { ReactNode } from "react";
import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function MainRootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ru">
      <head title={siteConfig.name} />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
