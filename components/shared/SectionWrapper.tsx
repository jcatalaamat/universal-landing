import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: "default" | "muted" | "primary";
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  background = "default",
  className,
  children,
}: SectionWrapperProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", bgClasses[background], className)}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-lg max-w-2xl mx-auto",
                  background === "primary"
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
