import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO Title */}
        <title>
          Kumudha Cabs - Chennai Cab Service | Taxi Booking | Airport & Outstation Cabs
        </title>

        {/* Primary Meta Description */}
        <meta
          name="description"
          content="Kumudha Cabs offers reliable and affordable cab service in Chennai. Whether you need a quick local taxi service, a comfortable Chennai airport cab, or an outstation taxi from Chennai to Bangalore, Tirupati, or Pondicherry, we’ve got you covered. Our 24x7 taxi booking in Chennai ensures safe, on-time rides at the best prices."
        />

        {/* Extra SEO Keywords */}
        <meta
          name="keywords"
          content="Chennai cab service, Taxi service in Chennai, Chennai airport taxi, Outstation cabs Chennai, Chennai to Bangalore cab, Chennai to Tirupati taxi, Chennai to Pondicherry cab, Affordable cab service Chennai, One way cab Chennai, Local taxi service Chennai"
        />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Kumudha Cabs - Chennai Cab Service & Taxi Booking" />
        <meta
          property="og:description"
          content="Book reliable taxi service in Chennai with Kumudha Cabs. 24x7 airport pickup, outstation rides to Bangalore, Tirupati, Pondicherry & more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kumudhacabs.in/" />
        <meta property="og:image" content="https://kumudhacabs.in/og-image.jpg" />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
