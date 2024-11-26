import { FooterSection } from "@/components/layout/sections/footer";
import { GallerySection } from "@/components/layout/sections/gallery";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export default function Home() {
  return (
    <>
      <GallerySection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}
