import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

export const GallerySection = () => {
  const images = Array.from(
    { length: 13 },
    (_, index) => `/gallery${index + 1}.jpeg`
  );
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Gallery
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Explore and get inspired by our unique vision.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover our highlights—capturing moments that define who we are and
        what we stand for.
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[380px_380px_380px] gap-4">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            width={380}
            height={437}
            alt={`gallery ${idx + 1}`}
            className="block w-full h-full object-cover transform transition-transform duration-400 ease-out hover:scale-102 rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};
