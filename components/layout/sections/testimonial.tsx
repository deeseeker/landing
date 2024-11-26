"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/RoseMary.jpg",
    name: "Rose Mary",
    userName: "Student",
    comment:
      "Uphoria completely changed how I use social media. I can now monetize my Instagram and TikTok without needing a huge following. The daily withdrawal option is a game-changer!",
    rating: 5.0,
  },
  {
    image: "/Olaleye Samuel.webp",
    name: "Olaleye Samuel",
    userName: "Student",
    comment:
      "I was skeptical at first, but Alexa the AI is like having a personal assistant. Even when I'm offline, it ensures I keep earning. Uphoria has made monetizing my time so simple!",
    rating: 4.8,
  },

  {
    image: "/Kwame.jpg",
    name: "Kwame Andre",
    userName: "Teacher",
    comment:
      "The TikTok Daily Challenge is my favorite! Not only am I creating content and growing my page, but I’m also getting paid for it. This has opened up so many new opportunities for me.",
    rating: 4.9,
  },
  {
    image: "/Lara.jpg",
    name: "Lara Da Silva",
    userName: "Nurse",
    comment:
      "Uphoria's ProfitSphere is genius. Watching my earnings grow effortlessly while I explore other features is so rewarding. I’ve never seen anything like this before.",
    rating: 5.0,
  },
  {
    image: "/Angeline.jpg",
    name: "Angelina Johnson",
    userName: "Dancer & Fitness Coach",
    comment:
      "Uphoria is inclusive and easy to use. Whether you’re into e-books, NFTs, or just sharing links, there’s something for everyone. It’s a one-stop solution for earning online.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 100+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt="avatar"
                        className="object-cover"
                      />
                      <AvatarFallback>RM</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
