import "./globals.css";
import { ThemeInitScript } from "./theme-init";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export const metadata = {
  title: "Connected Minds",
  description:
    "Connected Minds is a research project under Sunway University focused on healthy ageing and social interaction during cognitive tasks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <ThemeInitScript />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="min-h-screen px-4 sm:px-6 pt-24">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
