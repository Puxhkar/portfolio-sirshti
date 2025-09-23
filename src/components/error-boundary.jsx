"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen relative bg-black flex items-center justify-center">
          <BackgroundBeams />
          <div className="max-w-2xl mx-auto px-8 text-center relative z-10">
            <div className="text-6xl mb-6">🧬</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-neutral-300 mb-8">
              We encountered an unexpected error. Our team has been notified and is working on a fix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="px-6 py-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
              >
                Go Home
              </a>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="text-neutral-400 cursor-pointer">Error Details</summary>
                <pre className="mt-4 p-4 bg-neutral-900 rounded text-sm text-red-400 overflow-auto">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
