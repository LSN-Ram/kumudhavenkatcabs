import JobBanner from "@/components/job-banner";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DestinationsSection from "@/components/destinations-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";
import { Plane } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Job Vacancy Banner */}
      <JobBanner />

      {/* Navigation */}
      <nav className="bg-card shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="text-primary h-8 w-8" />
              <h1 className="text-2xl font-bold gradient-text">
                Kumudha Cabs
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Booking Form */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Popular Destinations */}
      <DestinationsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
