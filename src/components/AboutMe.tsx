
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutMe = () => {
  return (
    <section id="about" className="section-padding bg-clinic-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1557053819-aa6046add523?q=80&w=1974&auto=format&fit=crop" 
              alt="Profissional de estética" 
              className="rounded-lg shadow-lg w-full object-cover h-[500px]"
            />
          </div>
          
          <div>
            <span className="inline-block bg-clinic-primary text-white px-4 py-1 rounded-full text-sm mb-4 font-medium">
              Sobre Mim
            </span>
            <h2 className="heading-lg mb-6">Dra. Ana Oliveira</h2>
            <p className="mb-6 text-gray-700">
              Com mais de 15 anos de experiência na área de estética, me dedico a transformar a autoestima 
              e bem-estar dos meus pacientes através de tratamentos personalizados e técnicas inovadoras.
            </p>
            <p className="mb-6 text-gray-700">
              Sou formada em Dermatologia Estética pela Universidade de São Paulo, com especializações em 
              procedimentos faciais e corporais. Atualizo constantemente meus conhecimentos para trazer as mais 
              recentes novidades em tratamentos estéticos para meus pacientes.
            </p>
            <p className="mb-8 text-gray-700">
              Meu objetivo é proporcionar resultados naturais e duradouros, sempre com segurança e profissionalismo, 
              ajudando cada pessoa a encontrar sua melhor versão.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-clinic-rose font-bold text-3xl">15+</span>
                <p className="text-gray-600 mt-2">Anos de experiência</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-clinic-rose font-bold text-3xl">5000+</span>
                <p className="text-gray-600 mt-2">Clientes satisfeitos</p>
              </div>
            </div>
            
            <Button className="bg-clinic-rose hover:bg-clinic-rose/90 text-white">Agendar consulta</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
