import { HeroConfig } from "@/config/types";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

interface HeroProps {
  config: HeroConfig;
}

export function Hero({ config }: HeroProps) {
  const layoutClasses = {
    centered: "text-center items-center",
    "left-aligned": "text-left items-start",
    split: "text-left items-start md:grid md:grid-cols-2 md:gap-12",
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      {config.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${config.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
      )}

      <div
        className={cn(
          "container mx-auto px-4 py-20 relative z-10",
          "flex flex-col",
          layoutClasses[config.layout]
        )}
      >
        <div
          className={cn("max-w-3xl", config.layout === "centered" && "mx-auto")}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {config.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {config.subheadline}
          </p>
          <div
            className={cn(
              "flex flex-wrap gap-4",
              config.layout === "centered" && "justify-center"
            )}
          >
            <CTAButton config={config.cta} size="lg" />
            {config.secondaryCta && (
              <CTAButton config={config.secondaryCta} size="lg" />
            )}
          </div>

          {/* Trust Badges */}
          {config.showTrustBadges && config.trustBadges && (
            <div
              className={cn(
                "mt-12 flex flex-wrap gap-6 items-center",
                config.layout === "centered" && "justify-center"
              )}
            >
              {config.trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
