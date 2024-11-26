"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Marketing</Badge>
            </span>
            <span> Welcome to Uphoria! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Boost your
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                online presence
              </span>
              & make a bigger impact with Uphoria!
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`A smart platform designed to help you grow with advanced tools, expert support, and easy-to-use insights.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              onClick={() => router.push("/payment")}
              className="w-5/6 md:w-1/4 font-bold group/arrow"
            >
              Register Now
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            {/* <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/DarkInventor/easy-ui"
                target="_blank"
              >
                Github respository
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <div className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30">
            <iframe
              className="w-full h-[315px] md:h-[560px] rounded-lg"
              src="https://www.youtube.com/embed/LDGY3DxxMAQ?si=QlxEA_OMYSE16Q5B"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
