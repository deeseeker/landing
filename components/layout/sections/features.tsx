import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "School",
    title: "Skill Hub",
    description: "Learn new skills through classes taught by industry experts.",
  },

  {
    icon: "Clock",
    title: "24/7",
    description: "Get help anytime with our round-the-clock support team.",
  },
  {
    icon: "Swords",
    title: "Social Media Challenges",
    description: "Earn prizes by participating in fun challenges.",
  },
  {
    icon: "Goal",
    title: "Game Zone",
    description: "Play games and earn rewards while having fun.",
  },
  {
    icon: "Rabbit",
    title: "Swift Payment",
    description: "Receive your earnings quickly and securely.",
  },
  {
    icon: "BadgeCheck",
    title: "NFTNook",
    description: "Create, buy, and sell NFTs effortlessly.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We let you withdraw anytime—daily, weekly, or monthly—instantly and with
        no limits. No waiting for monthly payouts or referral goals.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
