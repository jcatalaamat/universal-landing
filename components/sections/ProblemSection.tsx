import { ProblemConfig } from "@/config/types";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProblemSectionProps {
  config: ProblemConfig;
}

export function ProblemSection({ config }: ProblemSectionProps) {
  if (!config.enabled) return null;

  return (
    <SectionWrapper
      id="problems"
      title={config.sectionTitle}
      subtitle={config.sectionSubtitle}
      background="muted"
    >
      <div
        className={cn(
          config.layout === "grid" &&
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
          config.layout === "list" && "space-y-4 max-w-2xl mx-auto",
          config.layout === "alternating" && "space-y-8 max-w-4xl mx-auto"
        )}
      >
        {config.problems.map((problem, index) => (
          <Card
            key={index}
            className={cn(
              "border-none shadow-none bg-transparent",
              config.layout === "alternating" &&
                index % 2 === 1 &&
                "md:ml-auto md:text-right"
            )}
          >
            <CardContent className="p-6">
              <div
                className={cn(
                  "flex items-start gap-4",
                  config.layout === "alternating" &&
                    index % 2 === 1 &&
                    "md:flex-row-reverse"
                )}
              >
                <div className="text-3xl flex-shrink-0">{problem.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
