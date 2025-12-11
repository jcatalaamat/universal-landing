import { UseCasesConfig } from "@/config/types";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";

interface UseCasesProps {
  config: UseCasesConfig;
}

export function UseCases({ config }: UseCasesProps) {
  if (!config.enabled) return null;

  return (
    <SectionWrapper
      id="use-cases"
      title={config.sectionTitle}
      subtitle={config.sectionSubtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {config.useCases.map((useCase, index) => (
          <Card key={index} className="overflow-hidden">
            {useCase.image && (
              <div className="aspect-video bg-muted">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {useCase.description}
              </p>

              {/* Testimonial */}
              {useCase.testimonial && (
                <div className="border-t pt-4 mt-4">
                  <blockquote className="text-sm italic mb-2">
                    "{useCase.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2">
                    {useCase.testimonial.avatar && (
                      <img
                        src={useCase.testimonial.avatar}
                        alt={useCase.testimonial.author}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div>
                      <p className="text-sm font-medium">
                        {useCase.testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {useCase.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
