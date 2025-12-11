import Link from "next/link";
import { FooterConfig } from "@/config/types";

interface FooterProps {
  config: FooterConfig;
}

const socialIcons: Record<string, string> = {
  twitter: "𝕏",
  facebook: "f",
  instagram: "📷",
  linkedin: "in",
  youtube: "▶",
};

export function Footer({ config }: FooterProps) {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-2">
            {config.logo && (
              <Link href="/" className="flex items-center space-x-2 mb-4">
                {config.logo.image ? (
                  <img
                    src={config.logo.image}
                    alt={config.logo.text}
                    className="h-8 w-auto"
                  />
                ) : (
                  <span className="text-xl font-bold">{config.logo.text}</span>
                )}
              </Link>
            )}
            {config.tagline && (
              <p className="text-sm text-muted-foreground mb-4">
                {config.tagline}
              </p>
            )}
            {/* Social Links */}
            {config.socialLinks && config.socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {config.socialLinks.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-xs font-bold">
                      {socialIcons[social.platform] || social.platform[0].toUpperCase()}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer Columns */}
          {config.columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(link.isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{config.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
