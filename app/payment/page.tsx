import { FooterSection } from "@/components/layout/sections/footer";
import { PaymentSection } from "@/components/layout/sections/payment";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export default function Home() {
  return (
    <>
      <PaymentSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}
