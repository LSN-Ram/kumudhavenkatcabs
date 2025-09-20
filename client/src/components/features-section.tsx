import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Shield, Route, Tag } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Safe and secure payment processing with insurance",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Route,
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your preferences",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Tag,
      title: "Best Prices",
      description: "Competitive pricing with exclusive deals and offers",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Kumudhacabs?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cab services and travel planning with personalized service and 24/7 support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-0"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="pt-6">
                <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`${feature.color} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
