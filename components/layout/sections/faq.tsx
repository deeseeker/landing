import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is referral compulsory?",
    answer:
      "No, referral is optional on Uphoria. You don't need to refer others to get paid.",
    value: "item-1",
  },
  {
    question: "Do I need to pay for registration?",
    answer:
      "Yes, registration requires a fee, which can be used to place an ad on the platform or withdrawn if unused",
    value: "item-2",
  },
  {
    question: "Are video ads available to watch and earn from anytime?",
    answer:
      "Yes, monetized ad videos are always available for members to watch and earn from at any time.",
    value: "item-3",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "Withdrawals follow a stipulated schedule, similar to other video monetization platforms.",
    value: "item-4",
  },
  {
    question: "Do I need experience to join Uphoria?",
    answer: "No, prior experience is not required to join Uphoria.",
    value: "item-5",
  },
  {
    question:
      "Can I choose to only watch videos without engaging in other features?",
    answer:
      "Yes, you can choose to do just one thing on the platform and still earn money.",
    value: "item-6",
  },
  {
    question: "How much can I make in a day?",
    answer:
      "Your daily earnings will depend on your input, but with dedication, you can earn at least $15 cumulatively.",
    value: "item-7",
  },
  {
    question: "Who is Alexa the ai?",
    answer:
      "Alexa The Ai is in charge, pushing and making sure users product get to larger audience, all TikTok marketers, Instagram marketers and offline marketers have full access to this immediately you signup on Uphoria.",
    value: "item-8",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
