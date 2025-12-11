import { HowItWorksConfig } from "@/config/types";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";

interface HowItWorksProps {
  config: HowItWorksConfig;
}

export function HowItWorks({ config }: HowItWorksProps) {
  if (!config.enabled) return null;

  return (
    <SectionWrapper
      id="how-it-works"
      title={config.sectionTitle}
      subtitle={config.sectionSubtitle}
      background="muted"
    >
      <div
        className={cn(
          config.layout === "horizontal" &&
            "grid grid-cols-1 md:grid-cols-3 gap-8",
          config.layout === "vertical" && "space-y-8 max-w-2xl mx-auto",
          config.layout === "timeline" && "space-y-8 max-w-2xl mx-auto"
        )}
      >
        {config.steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "relative",
              config.layout === "horizontal" && "text-center",
              config.layout === "timeline" && "pl-12"
            )}
          >
            {/* Step Number / Icon */}
            <div
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4",
                config.layout === "horizontal" && "mx-auto",
                config.layout === "timeline" &&
                  "absolute left-0 top-0"
              )}
            >
              {step.icon || step.stepNumber}
            </div>

            {/* Connector Line (for horizontal layout) */}
            {config.layout === "horizontal" &&
              index < config.steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-border" />
              )}

            {/* Connector Line (for timeline layout) */}
            {config.layout === "timeline" &&
              index < config.steps.length - 1 && (
                <div className="absolute left-[23px] top-12 w-0.5 h-[calc(100%+32px)] bg-border" />
              )}

            <div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
