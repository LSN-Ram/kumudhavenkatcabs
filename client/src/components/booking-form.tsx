import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Plane, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  fromLocation: z.string().min(2, "Please enter departure city"),
  toLocation: z.string().min(2, "Please enter destination city"),
  departureDate: z.string().min(1, "Please select departure date"),
  returnDate: z.string().optional(),
  tripType: z.string(),
  adults: z.string(),
  children: z.string(),
  budget: z.string().optional(),
  requirements: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingForm() {
  const [tripType, setTripType] = useState("round-trip");
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    mode: "onChange",
    defaultValues: {
      tripType: "round-trip",
      adults: "2",
      children: "0",
      name: "",
      email: "",
      phone: "",
      fromLocation: "",
      toLocation: "",
      departureDate: "",
      returnDate: "",
      budget: "",
      requirements: "",
    },
  });

  const onSubmit = (data: BookingFormData) => {
    const message = `*Booking Details*\n\n` +
      `Trip Type: ${data.tripType === "round-trip" ? "Round Trip" : "One Way"}\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `From: ${data.fromLocation}\n` +
      `To: ${data.toLocation}\n` +
      `Departure Date: ${data.departureDate}\n` +
      `Return Date: ${data.returnDate || "N/A"}\n` +
      `Adults: ${data.adults}\n` +
      `Children: ${data.children}\n` +
      `Budget: ${data.budget || "Not specified"}\n` +
      `Special Requirements: ${data.requirements || "None"}`;

    const phoneNumber = "917388886627"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp...",
      description: "We'll contact you shortly!",
    });

    form.reset();
    setTripType("round-trip");
  };

  return (
    <div className="form-floating">
      <Card className="glass-effect border-white/20 shadow-2xl animate-slide-up">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">Book Your Trip</CardTitle>
          <CardDescription>Fill in the details and we'll get back to you shortly</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Trip Type */}
            <div>
              <Label className="text-sm font-medium text-foreground mb-2 block">Trip Type</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "one-way", icon: "→", label: "One Way" },
                  { value: "round-trip", icon: "⇄", label: "Round Trip" },
                ].map((type) => (
                  <label
                    key={type.value}
                    className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer hover:bg-secondary transition-colors ${
                      tripType === type.value ? "bg-primary/10 border-primary" : "border-input"
                    }`}
                  >
                    <input
                      type="radio"
                      {...form.register("tripType")}
                      value={type.value}
                      className="sr-only"
                      onChange={() => setTripType(type.value)}
                    />
                    <div className="text-center">
                      <div className="text-primary mb-1 text-sm">{type.icon}</div>
                      <div className="text-xs">{type.label}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* From and To Locations */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fromLocation">From</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="fromLocation"
                    {...form.register("fromLocation")}
                    placeholder="Departure city"
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="toLocation">To</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="toLocation"
                    {...form.register("toLocation")}
                    placeholder="Destination city"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departureDate">Departure Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="date"
                    id="departureDate"
                    {...form.register("departureDate")}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="returnDate">Return Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="date"
                    id="returnDate"
                    {...form.register("returnDate")}
                    disabled={tripType === "one-way"}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Passengers */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Adults</Label>
                <Select value={form.watch("adults")} onValueChange={(value) => form.setValue("adults", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                    <SelectItem value="5+">5+ Adults</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Children</Label>
                <Select value={form.watch("children")} onValueChange={(value) => form.setValue("children", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 Children</SelectItem>
                    <SelectItem value="1">1 Child</SelectItem>
                    <SelectItem value="2">2 Children</SelectItem>
                    <SelectItem value="3">3 Children</SelectItem>
                    <SelectItem value="4+">4+ Children</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...form.register("name")} placeholder="Full Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" {...form.register("email")} className="pl-10" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" type="tel" {...form.register("phone")} className="pl-10" />
                </div>
              </div>
              <div>
                <Label>Budget</Label>
                <Select value={form.watch("budget")} onValueChange={(value) => form.setValue("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                    <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="100k-200k">₹1,00,000 - ₹2,00,000</SelectItem>
                    <SelectItem value="above-200k">Above ₹2,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Requirements */}
            <div>
              <Label htmlFor="requirements">Special Requirements</Label>
              <Textarea
                id="requirements"
                {...form.register("requirements")}
                placeholder="Any requests, needs, etc."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-4 font-semibold transition-all transform hover:scale-[1.02]"
              disabled={!form.formState.isValid}
            >
              <Plane className="mr-2 h-4 w-4" />
              Book My Trip
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to receive trip details via WhatsApp
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
