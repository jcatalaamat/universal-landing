import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAConfig } from "@/config/types";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  config: CTAConfig;
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function CTAButton({ config, size = "default", className }: CTAButtonProps) {
  const isExternal = config.href.startsWith("http");

  return (
    <Button
      variant={config.variant}
      size={size}
      className={cn(className)}
      asChild
    >
      <Link
        href={config.href}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {config.icon && <span className="mr-2">{config.icon}</span>}
        {config.text}
      </Link>
    </Button>
  );
}
