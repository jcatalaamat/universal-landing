import { Header } from "./Header";
import { Footer } from "./Footer";
import { NavConfig, FooterConfig } from "@/config/types";

interface LayoutProps {
  nav: NavConfig;
  footer: FooterConfig;
  children: React.ReactNode;
}

export function Layout({ nav, footer, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header config={nav} />
      <main className="flex-1">{children}</main>
      <Footer config={footer} />
    </div>
  );
}
