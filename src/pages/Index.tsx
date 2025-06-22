
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AboutMe from '@/components/AboutMe';
import LocationMap from '@/components/LocationMap';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* About Me Section */}
      <AboutMe />
      
      {/* Call to Action Section */}
      <section className="relative py-20 bg-clinic-rose text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Transforme sua beleza hoje mesmo</h2>
            <p className="body-lg mb-8">
              Agende uma avaliação e descubra como nossos tratamentos personalizados 
              podem realçar sua beleza natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-clinic-primary text-white hover:bg-clinic-primary/90"
                onClick={() => {
                  const element = document.getElementById('agendar');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Agendar avaliação!
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />

      {/* Location/Map Section */}
      <LocationMap />
      
      {/* Pre-footer CTA */}
      <section className="section-padding bg-clinic-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Pronto para começar a realçar sua beleza?</h2>
            <p className="body-lg mb-8 text-gray-700">
              Agende seu procedimento agora mesmo e dê o primeiro passo para realçar sua 
              beleza natural com nossa equipe especializada.
            </p>
            <Button 
              size="lg" 
              className="bg-clinic-rose hover:bg-clinic-rose/90 text-white px-8"
              onClick={() => {
                const element = document.getElementById('agendar');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Agendar Agora
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
