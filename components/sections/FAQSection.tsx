import { FAQConfig } from "@/config/types";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  config: FAQConfig;
}

export function FAQSection({ config }: FAQSectionProps) {
  if (!config.enabled) return null;

  return (
    <SectionWrapper
      id="faq"
      title={config.sectionTitle}
      subtitle={config.sectionSubtitle}
    >
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {config.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
