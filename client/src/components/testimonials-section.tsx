import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh & Priya",
      role: "Honeymooners",
      initials: "RP",
      review: "Exceptional cab service! They arranged our honeymoon travel perfectly and the WhatsApp updates kept us informed throughout.",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      name: "Ankit Kumar",
      role: "Business Traveler",
      initials: "AK",
      review: "Professional team with great attention to detail. The booking process was seamless and hassle-free.",
      bgColor: "bg-accent/10",
      textColor: "text-accent",
    },
    {
      name: "Meera Singh",
      role: "Family Traveler",
      initials: "MS",
      review: "Amazing family vacation thanks to Kumudhacabs. They handled everything from transportation to travel planning.",
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">Real experiences from real travelers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg border-0" data-testid={`card-testimonial-${index}`}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-3`}>
                    <span className={`${testimonial.textColor} font-semibold`}>{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
