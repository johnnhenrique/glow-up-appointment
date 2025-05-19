
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ricardo Abreu',
    photo: './images/ricardo.jpg',
    testimonial: 'Os tratamentos faciais superaram minhas expectativas. Minha pele está radiante e rejuvenescida, muito obrigada à equipe da clínica!',
    stars: 5,
    treatment: 'Radiofrequência Facial'
  },
  {
  id: 2,
  name: 'Thaisa Gorniak',
  photo: './images/thaisa.jpg',
  testimonial: 'Excelente atendimento e profissionais extremamente capacitados. Os resultados do tratamento a laser foram visíveis desde a primeira sessão.',
  stars: 5,
  treatment: 'Depilação a Laser'
}
,
  {
    id: 3,
    name: 'Paula Sampaio',
    photo: './images/paula.jpg',
    testimonial: 'Adoro o ambiente da clínica, sempre limpo e aconchegante. Os tratamentos corporais me ajudaram a recuperar minha autoestima.',
    stars: 4,
    treatment: 'Massagem Modeladora'
  },
  {
    id: 4,
    name: 'Juliana Costa',
    photo: 'https://randomuser.me/api/portraits/women/27.jpg',
    testimonial: 'O pacote de noiva foi um investimento incrível. Cheguei ao meu casamento radiante e confiante. Recomendo a todas as noivas!',
    stars: 5,
    treatment: 'Pacote Noiva'
  },
  {
    id: 5,
    name: 'Marcos Paulo',
    photo: 'https://randomuser.me/api/portraits/men/36.jpg',
    testimonial: 'Nunca imaginei que cuidaria tanto da minha pele. O atendimento masculino é excelente e sem julgamentos. Resultados fantásticos!',
    stars: 5,
    treatment: 'Limpeza de Pele'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Calculate visible testimonials with 1 on mobile, 3 on desktop
  const visibleTestimonials = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return [testimonials[activeIndex]];
    } else {
      const items = [];
      for (let i = 0; i < 3; i++) {
        const index = (activeIndex + i) % testimonials.length;
        items.push(testimonials[index]);
      }
      return items;
    }
  };

  return (
    <section className="section-padding bg-clinic-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-clinic-accent text-clinic-dark px-4 py-1 rounded-full text-sm mb-2 font-medium">
            Depoimentos
          </span>
          <h2 className="heading-lg mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Conheça as experiências transformadoras de nossos clientes com nossos 
            tratamentos estéticos e equipe especializada.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center">
            {visibleTestimonials().map((testimonial) => (
              <Card key={testimonial.id} className="w-full md:w-1/3 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-clinic-primary">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <h4 className="font-bold text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">{testimonial.treatment}</p>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16}
                          className={i < testimonial.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {testimonials.map((_, index) => (
              <Button 
                key={index}
                variant="outline"
                size="sm"
                className={`w-2 h-2 p-0 rounded-full ${index === activeIndex ? 'bg-clinic-primary border-clinic-primary' : 'bg-gray-200'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
