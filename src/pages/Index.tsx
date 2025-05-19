
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Call to Action Section */}
      <section className="relative py-20 bg-clinic-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Transforme sua beleza hoje mesmo</h2>
            <p className="body-lg mb-8">
              Agende uma avaliação gratuita e descubra como nossos tratamentos personalizados 
              podem realçar sua beleza natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar">
                <Button variant="secondary" size="lg" className="bg-white text-clinic-primary hover:bg-gray-100">
                  Agendar avaliação gratuita
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-clinic-primary"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Área do Cliente
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
      
      {/* Pre-footer CTA */}
      <section className="section-padding bg-clinic-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Pronto para começar sua jornada?</h2>
            <p className="body-lg mb-8 text-gray-700">
              Agende seu procedimento agora mesmo e dê o primeiro passo para realçar sua 
              beleza natural com nossa equipe especializada.
            </p>
            <Link to="/agendar">
              <Button size="lg" className="bg-clinic-primary hover:bg-clinic-primary/90 text-white px-8">
                Agendar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
