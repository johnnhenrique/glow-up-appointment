
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    id: 1,
    title: 'Tratamentos Faciais',
    description: 'Revitalize sua pele com nossos tratamentos faciais de última geração',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1770&auto=format&fit=crop',
    link: '/servicos/faciais'
  },
  {
    id: 2,
    title: 'Tratamentos Corporais',
    description: 'Cuide do seu corpo com nossos procedimentos exclusivos',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1770&auto=format&fit=crop',
    link: '/servicos/corporais'
  },
  {
    id: 3,
    title: 'Tratamentos a Laser',
    description: 'Tecnologia avançada para resultados precisos e duradouros',
    image: 'https://www.corpobueno.com.br/wp-content/uploads/2022/12/Laser-Venus-2.jpg',
    link: '/servicos/laser'
  },
  {
    id: 4,
    title: 'Rejuvenescimento',
    description: 'Recupere a juventude da sua pele com procedimentos não invasivos',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1770&auto=format&fit=crop',
    link: '/servicos/rejuvenescimento'
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-clinic-light" id="servicos">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-clinic-secondary text-clinic-dark px-4 py-1 rounded-full text-sm mb-2 font-medium">
            Nossos serviços
          </span>
          <h2 className="heading-lg mb-4">Serviços Estéticos Exclusivos</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Conheça nosso portfólio completo de serviços estéticos profissionais,
            criados para realçar sua beleza natural e proporcionar bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <Link to={category.link} key={category.id} className="group">
              <Card className="border-none shadow-lg overflow-hidden h-full transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.image})` }}
                  ></div>
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="group-hover:text-clinic-primary transition-colors">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-clinic-primary font-medium">
                    <span>Saiba mais</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
