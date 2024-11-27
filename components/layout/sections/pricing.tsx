"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
  exclusiveList: string[];
  salesList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: "0",
    description: "There's currently no free plan",
    buttonText: "",
    benefitList: ["Not available"],
    exclusiveList: ["Not available"],
    salesList: ["Not available"],
  },
  {
    title: "Plus",
    popular: 1,
    price: "10,000",
    description:
      "Unlock higher earnings with ₦6,500 for LITE referrals and ₦8,500 for PLUS referrals.",
    buttonText: "Get started",
    benefitList: [
      "Welcome Bonus: $7.5",
      "AI Assistance (Alexa): $1.5",
      "Task Vault Earnings: $0.5",
      "Daily Simple Tasks: $60",
    ],

    exclusiveList: [
      "ProfitSphere: $0.5",
      "ClickEarn: $10",
      "NFT Earnings: $50",
      "TikTok Earnings: $80",
    ],
    salesList: ["1st Spillover: $0.4", "2nd Spillover: $0.1"],
  },
  {
    title: "Lite",
    popular: 0,
    price: "7,500",
    description: "Earn ₦6,500 per referral.",
    buttonText: "Start Plan",
    benefitList: [
      "Welcome Bonus: $6",

      "Task Vault Earnings: $1.5",
      "Daily Simple Tasks: $45",
    ],
    exclusiveList: [
      "ProfitSphere: $7.5",
      "ClickEarn: $1.5",
      "NFT Earnings: $0.5",
      "TikTok Earnings: $60",
    ],
    salesList: ["1st Spillover: $0.2", "2nd Spillover: $0.1"],
  },
];

export const PricingSection = () => {
  const router = useRouter();
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-11">
        Get unlimitted access
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({
            title,
            popular,
            price,
            description,
            buttonText,
            benefitList,
            exclusiveList,
            salesList,
          }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">#{price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="my-4">Exclusive features:</h3>
                </div>

                <div className="space-y-4">
                  {exclusiveList.map((exclusive) => (
                    <span key={exclusive} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{exclusive}</h3>
                    </span>
                  ))}
                </div>
                <div>
                  <h3 className="my-4">Sales Bonuses:</h3>
                </div>

                <div className="space-y-4">
                  {salesList.map((sale) => (
                    <span key={sale} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{sale}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                {buttonText === "" ? (
                  ""
                ) : (
                  <Button
                    onClick={() => router.push("/payment")}
                    variant={
                      popular === PopularPlan?.YES ? "default" : "secondary"
                    }
                    className="w-full"
                  >
                    {buttonText}
                  </Button>
                )}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
