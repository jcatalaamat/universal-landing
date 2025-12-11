import { SolutionConfig } from "@/config/types";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SolutionGridProps {
  config: SolutionConfig;
}

export function SolutionGrid({ config }: SolutionGridProps) {
  if (!config.enabled) return null;

  const gridCols = {
    "grid-3": "md:grid-cols-3",
    "grid-4": "md:grid-cols-2 lg:grid-cols-4",
    carousel: "md:grid-cols-3",
  };

  return (
    <SectionWrapper
      id="features"
      title={config.sectionTitle}
      subtitle={config.sectionSubtitle}
    >
      <div className={cn("grid grid-cols-1 gap-6", gridCols[config.layout])}>
        {config.solutions.map((solution, index) => (
          <Card
            key={index}
            className={cn(
              "transition-all hover:shadow-lg",
              solution.highlight && "border-primary ring-2 ring-primary/20"
            )}
          >
            <CardContent className="p-6">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
              <p className="text-muted-foreground text-sm">
                {solution.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
