import { Phone } from "lucide-react";

export default function JobBanner() {
  return (
    <div className="bg-accent text-accent-foreground py-3 px-4 text-center relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium flex-wrap">
          <span className="text-lg">🚗</span>
          <span className="animate-pulse">🚨 JOB VACANCY: Cab Driver Positions Available in Chennai - Contact Now!</span>
          <a 
            href="tel:7388886627" 
            className="ml-2 bg-white text-accent px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-1"
            data-testid="link-job-contact"
          >
            <Phone className="h-3 w-3" />
            Call: 7388886627
          </a>
        </div>
      </div>
    </div>
  );
}
