"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User, Mail, Calendar, Shield, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",
      });
    }
  }, [status, session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      // Here you would call your API to update user profile
      // For now, we'll just show a success message
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Update the session
      await update({
        ...session,
        user: {
          ...session.user,
          name: formData.name,
        },
      });

      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Failed to update profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-6">
            {session.user.image ? (
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-blue-500">
                {(session.user.name || session.user.email || "U").charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
              <p className="text-gray-600 mt-1">Manage your personal information</p>
              <div className="flex items-center space-x-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {session.user.role || "USER"}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {session.user.plan || "FREE"} Plan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <User className="w-6 h-6 mr-2 text-blue-600" />
            Personal Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email (Read-only) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  disabled
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Email cannot be changed</p>
            </div>

            {/* Account Details */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Account Role</span>
                  </div>
                  <span className="font-medium text-gray-900">{session.user.role || "USER"}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Member Since</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {new Date(session.user.createdAt || Date.now()).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Email Verified</span>
                  </div>
                  <span className={`font-medium ${session.user.emailVerified ? "text-green-600" : "text-orange-600"}`}>
                    {session.user.emailVerified ? "Verified" : "Pending"}
                  </span>
                </div>
              </div>
            </div>

            {/* Success/Error Message */}
            {message && (
              <div className={`p-4 rounded-lg ${message.includes("success") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                {message}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-5 h-5" />
                <span>{saving ? "Saving..." : "Save Changes"}</span>
              </button>
              <Link
                href="/dashboard"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
