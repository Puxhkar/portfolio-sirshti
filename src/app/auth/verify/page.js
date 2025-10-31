"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mail, CheckCircle } from "lucide-react";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Check your email
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent a verification link to your email address
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center space-y-4">
            {email && (
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Email sent to:</strong> {email}
                </p>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-left">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Check your inbox
                  </p>
                  <p className="text-xs text-gray-600">
                    Click the verification link in the email we sent you
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Check your spam folder
                  </p>
                  <p className="text-xs text-gray-600">
                    Sometimes emails end up in spam or junk folders
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Wait a few minutes
                  </p>
                  <p className="text-xs text-gray-600">
                    Email delivery can sometimes take a few minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <p className="text-xs text-gray-500">
                Didn't receive the email?
              </p>
              
              <div className="space-y-2">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Resend Email
                </button>
                
                <Link
                  href="/auth/signin"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Need help?{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-500">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
