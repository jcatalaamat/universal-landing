import { FinalCTAConfig } from "@/config/types";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

interface FinalCTAProps {
  config: FinalCTAConfig;
}

export function FinalCTA({ config }: FinalCTAProps) {
  if (!config.enabled) return null;

  const backgroundStyles = {
    gradient: "bg-gradient-to-r from-primary to-primary/80",
    solid: "bg-primary",
    image: "bg-primary",
  };

  return (
    <section
      className={cn(
        "py-20 text-primary-foreground",
        backgroundStyles[config.backgroundStyle]
      )}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {config.headline}
        </h2>
        {config.subheadline && (
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {config.subheadline}
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <CTAButton
            config={{
              ...config.cta,
              variant: "secondary",
            }}
            size="lg"
          />
          {config.secondaryCta && (
            <CTAButton
              config={{
                ...config.secondaryCta,
                variant: "outline",
              }}
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            />
          )}
        </div>
      </div>
    </section>
  );
}
