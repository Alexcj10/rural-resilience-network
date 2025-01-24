import { Book, Leaf, Users, Sprout } from "lucide-react";
import WeatherWidget from "@/components/WeatherWidget";
import ResourceCard from "@/components/ResourceCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="container py-20 animate-fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-inter font-bold text-primary mb-6">
            Local Agriculture Support Network
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering rural farmers with knowledge, resources, and community support
          </p>
          <button className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg transition-colors">
            Join Our Community
          </button>
        </div>
      </section>

      {/* Weather Section */}
      <section className="container py-12">
        <div className="max-w-md mx-auto">
          <WeatherWidget />
        </div>
      </section>

      {/* Resources Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-inter font-semibold text-primary text-center mb-12">
          Resources for Farmers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard
            title="Expert Advice"
            description="Get guidance from agricultural experts on crop management and sustainable practices"
            icon={<Book className="w-6 h-6 text-primary" />}
          />
          <ResourceCard
            title="Sustainable Farming"
            description="Learn about eco-friendly farming techniques and environmental conservation"
            icon={<Leaf className="w-6 h-6 text-primary" />}
          />
          <ResourceCard
            title="Community Support"
            description="Connect with other farmers, share experiences, and solve challenges together"
            icon={<Users className="w-6 h-6 text-primary" />}
          />
          <ResourceCard
            title="Crop Management"
            description="Access tools and information for better crop yield and quality"
            icon={<Sprout className="w-6 h-6 text-primary" />}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-20 text-center">
        <div className="bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-inter font-semibold text-primary mb-6">
            Ready to Grow Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our network of farmers and agricultural experts. Get access to resources, 
            support, and the latest farming practices.
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-3 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;