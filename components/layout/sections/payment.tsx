"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const PaymentSection = () => {
  const router = useRouter();

  const paymentDetails = {
    bankName: "UBA",
    accountNumber: "2339810321",
    accountName: "ABDULWARIZ ADEYEMI",
    paymentMessage:
      "Hello Coach Dex, I have made the payment to the account and am ready to begin my financial journey.",
    whatsappLink: "https://wa.me/message/H4WF5YEAEH7WH1",
  };

  return (
    <section
      id="features"
      className="container flex flex-col items-center justify-center min-h-screen py-16 px-4 text-center space-y-12"
    >
      {/* Header Section */}
      <div className="max-w-2xl">
        <h2 className="text-lg text-primary tracking-wider mb-2">
          REGISTRATION STEPS
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Complete your registration to start your journey toward financial
          freedom.
        </h2>
      </div>

      {/* Steps Section */}
      <ol className="space-y-8 w-full max-w-xl">
        {/* Step 1 */}
        <li className="bg-gray-100 p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold">Step 1</h3>
          <p>
            Make a payment to the account below to start your registration
            process.
          </p>
          <div className="bg-white p-4 rounded-md border space-y-2">
            <p>
              <strong>Bank Name:</strong> {paymentDetails.bankName}
            </p>
            <p>
              <strong>Account Number:</strong> {paymentDetails.accountNumber}
            </p>
            <p>
              <strong>Account Name:</strong> {paymentDetails.accountName}
            </p>
          </div>
        </li>

        {/* Step 2 */}
        <li className="bg-gray-100 p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold">Step 2</h3>
          <p>
            After making the payment, take a screenshot and send it using the
            link provided in Step 3. Use the following message template:
          </p>
          <div className="bg-white p-4 rounded-md border">
            <p>
              <strong>Payment Message:</strong> {paymentDetails.paymentMessage}
            </p>
          </div>
        </li>

        {/* Step 3 */}
        <li className="bg-gray-100 p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold">Step 3</h3>
          <p>
            Click the button below to send your payment details via WhatsApp.
          </p>
          <Button
            onClick={() => router.push(paymentDetails.whatsappLink)}
            className="w-full sm:w-auto font-bold group"
          >
            Confirm Payment
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </li>

        {/* Step 4 - Congratulations */}
        <li className="bg-green-100 p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold text-green-800">Step 4</h3>
          <p className="font-medium text-green-700">
            🎉 Congratulations! Your payment has been confirmed, and you now
            have access to the service. Welcome to your journey toward financial
            freedom!
          </p>
        </li>
      </ol>
    </section>
  );
};
