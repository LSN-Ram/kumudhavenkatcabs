import BookingForm from "./booking-form";
import { Button } from "@/components/ui/button";
import { Plane, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Beautiful travel destination with mountains and scenic landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Journey <br />
              <span className="gradient-text text-white">Starts Here</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Professional cab services and travel booking with personalized service. Plan your perfect trip with Kumudhacabs and enjoy seamless travel experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-blue-600 text-primary-foreground px-8 py-4 font-semibold transition-all transform hover:scale-105"
                data-testid="button-explore-destinations"
              >
                <Plane className="mr-2 h-5 w-5" />
                Explore Destinations
              </Button>
              
            </div>
          </div>

          {/* Booking Form */}
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
