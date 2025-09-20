export default function DestinationsSection() {
  const destinations = [
    {
      name: "Marina Beach",
      price: "From ₹500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Marina Beach Chennai with golden sand and blue waters",
    },
    {
      name: "Kapaleeshwarar Temple",
      price: "From ₹300",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Kapaleeshwarar Temple Chennai traditional architecture",
    },
    {
      name: "ECR Beach Drive",
      price: "From ₹800",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "East Coast Road Chennai scenic coastal drive",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Destinations</h2>
          <p className="text-xl text-muted-foreground">Discover amazing places around the world</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              data-testid={`card-destination-${index}`}
            >
              <img
                src={destination.image}
                alt={destination.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                <p className="text-sm opacity-90">{destination.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
