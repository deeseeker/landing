"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { ArrowRight, Copy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const PaymentSection = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const paymentDetails = {
    bankName: "UBA",
    accountNumber: "2339810321",
    accountName: "ABDULWARIZ ADEYEMI SHINAAYO",
    paymentMessage:
      "Hello Coach Dex, I have made the payment to the account and am ready to begin my financial journey.",
    whatsappLink: "https://wa.me/message/H4WF5YEAEH7WH1",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied" state after 2 seconds
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-800 dark:text-gray-100">
          Complete your registration to start your journey toward financial
          freedom.
        </h2>
      </div>

      {/* Steps Section */}
      <ol className="space-y-8 w-full max-w-xl text-gray-700 dark:text-gray-300">
        {/* Step 1 */}
        <li className="bg-gray-100 dark:bg-card p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold text-primary ">Step 1</h3>
          <p>
            Make a payment to the account below to start your registration
            process.
          </p>
          <div className="bg-white dark:bg-secondary p-4 rounded-md border dark:border-accent border-gray-300 space-y-2">
            <p>
              <strong>Bank Name:</strong> {paymentDetails.bankName}
            </p>
            <p className="flex items-center justify-center gap-2">
              <strong>Account Number:</strong> {paymentDetails.accountNumber}
              <Button
                onClick={handleCopy}
                variant="ghost"
                size="sm"
                className="p-1"
              >
                <Copy
                  className={`w-5 h-5 ${
                    copied ? "text-green-500 dark:text-green-400" : ""
                  }`}
                />
              </Button>
            </p>
            <p>
              <strong>Account Name:</strong> {paymentDetails.accountName}
            </p>
          </div>
        </li>
        {/* Step 2 */}
        <li className="bg-gray-100 dark:bg-card p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold text-primary">Step 2</h3>
          <p>
            After making the payment, take a screenshot and send it using the
            link provided in Step 3. Use the following message template:
          </p>
          <div className="bg-white dark:bg-secondary  p-4 rounded-md border border-gray-300 dark:border-accent">
            <p>
              <strong>Payment Message:</strong> {paymentDetails.paymentMessage}
            </p>
          </div>
        </li>
        {/* Step 3 */}
        <li className="bg-gray-100 dark:bg-card p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold text-primary">Step 3</h3>
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
        <li className="bg-green-100 dark:bg-green-800 p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold text-primary text-green-800 dark:text-green-300">
            Step 4
          </h3>
          <p className="font-medium text-green-700 dark:text-green-100">
            🎉 Congratulations! Your payment has been confirmed, and you now
            have access to the service. Welcome to your journey toward financial
            freedom!
          </p>
        </li>
        {/* Step 5 */}
        <li className="bg-gray-100 dark:bg-card p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-lg font-semibold text-primary text-gray-900 dark:text-gray-100">
            Are you a citizen of another country?
          </h3>
          <Button
            onClick={() => router.push(paymentDetails.whatsappLink)}
            className="w-full sm:w-auto font-bold group"
          >
            Click here
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </li>
      </ol>

      {/* Copy Modal */}
      <Dialog open={copied} onOpenChange={setCopied}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-card p-6 rounded-md shadow-lg text-center">
          <DialogTitle className="text-green-700 dark:text-green-300">
            Copied to Clipboard!
          </DialogTitle>
          <p className="text-gray-800 dark:text-gray-300 mt-2">
            The account number has been successfully copied.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
};
