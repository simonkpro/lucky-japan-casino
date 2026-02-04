import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/casinos";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">❓</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">よくある</span>
              <span className="text-gradient-gold">質問</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            オンラインカジノに関する疑問にお答えします
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-foreground">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            他にご質問がございましたらお気軽にお問い合わせください
          </p>
          <a
            href="mailto:support@casinoguide.jp"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            <span>📧</span>
            support@casinoguide.jp
          </a>
        </div>
      </div>
    </section>
  );
}
