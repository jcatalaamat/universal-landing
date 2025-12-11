import { PricingConfig } from "@/config/types";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CTAButton } from "@/components/shared/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  config: PricingConfig;
}

export function PricingSection({ config }: PricingSectionProps) {
  if (!config.enabled) return null;

  return (
    <SectionWrapper
      id="pricing"
      title={config.sectionTitle}
      subtitle={config.sectionSubtitle}
      background="muted"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {config.plans.map((plan, index) => (
          <Card
            key={index}
            className={cn(
              "relative flex flex-col",
              plan.highlighted && "border-primary shadow-lg scale-105 z-10"
            )}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="default">{plan.badge}</Badge>
              </div>
            )}
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <CTAButton config={plan.cta} className="w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
