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

// UPHORIA PLUS
// Access Fee: ₦10,000
// Benefits:

// Welcome Bonus: $7.5 / ₦7,500
// AI Assistance (Alexa): $1.5 / ₦1,500
// Task Vault Earnings: $0.5 / ₦500
// Daily Simple Tasks: $2 x 30 days = $60 / ₦60,000
// Exclusive Features:

// ProfitSphere: $0.5 / ₦500
// ClickEarn: $10 / ₦1,000
// NFT Earnings: Up to $50 / ₦50,000
// TikTok Earnings: Up to $80 / ₦80,000
// Sales Bonuses:

// 1st Spillover: $0.4 / ₦400
// 2nd Spillover: $0.1 / ₦100
// Referral Commissions:

// Earn ₦6,500 for LITE referrals
// Earn ₦8,500 for PLUS referrals

// UPHORIA LITE
// Access Fee: ₦7,500
// Benefits:

// Welcome Bonus: $7.5 / ₦6,000
// Task Vault Earnings: $1.5 / ₦1,500
// Daily Simple Tasks: $1.5 x 30 days = $45 / ₦45,000
// Exclusive Features:

// ProfitSphere: $0.5 / ₦500
// NFT Earnings: Up to $50 / ₦50,000
// TikTok Earnings: Up to $80 / ₦80,000
// Sales Bonuses:

// 1st Spillover: $0.2 / ₦200
// 2nd Spillover: $0.1 / ₦100
// Referral Commissions:

// Earn ₦6,500 per referral (for both LITE and PLUS users)
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
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Start Free Trial",
    benefitList: ["Not available"],
    exclusiveList: [],
    salesList: [],
  },
  {
    title: "Plus",
    popular: 1,
    price: "10,000",
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Get started",
    benefitList: [
      "Welcome Bonus: $7.5 / ₦7,500",
      "AI Assistance (Alexa): $1.5 / ₦1,500",
      "Task Vault Earnings: $0.5 / ₦500",
      "Daily Simple Tasks: $60 / ₦60,000",
    ],

    exclusiveList: [
      "ProfitSphere: $0.5 / ₦500",
      "ClickEarn: $10 / ₦1,000",
      "NFT Earnings: $50 / ₦50,000",
      "TikTok Earnings: $80 / ₦80,000",
    ],
    salesList: ["1st Spillover: $0.4 / ₦400", "2nd Spillover: $0.1 / ₦100"],

    // Welcome Bonus: $7.5 / ₦7,500
    // AI Assistance (Alexa): $1.5 / ₦1,500
    // Task Vault Earnings: $0.5 / ₦500
    // Daily Simple Tasks: $2 x 30 days = $60 / ₦60,000
    // Exclusive Features:

    // ProfitSphere: $0.5 / ₦500
    // ClickEarn: $10 / ₦1,000
    // NFT Earnings: Up to $50 / ₦50,000
    // TikTok Earnings: Up to $80 / ₦80,000
    // Sales Bonuses:

    // 1st Spillover: $0.4 / ₦400
    // 2nd Spillover: $0.1 / ₦100
    // Referral Commissions:

    // Earn ₦6,500 for LITE referrals
    // Earn ₦8,500 for PLUS referrals
  },
  {
    title: "Lite",
    popular: 0,
    price: "7,500",
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Contact US",
    benefitList: [
      "Welcome Bonus: $6 / ₦6,000",

      "Task Vault Earnings: $1.5 / ₦1500",
      "Daily Simple Tasks: $45 / ₦45,000",
    ],
    exclusiveList: [
      "ProfitSphere: $7.5 / ₦7,500",
      "ClickEarn: $1.5 / ₦1,500",
      "NFT Earnings: $0.5 / ₦500",
      "TikTok Earnings: $60 / ₦60,000",
    ],
    salesList: ["1st Spillover: $0.2 / ₦200", "2nd Spillover: $0.1 / ₦100"],
  },
];

export const PricingSection = () => {
  const router = useRouter();
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimitted access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3>

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
                <Button
                  onClick={() =>
                    router.push(
                      "https://chat.whatsapp.com/BVRHuKPsySIAj4PbeBz4w9"
                    )
                  }
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
