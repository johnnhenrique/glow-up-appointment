
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 rose-gradient z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1770&auto=format&fit=crop')",
          opacity: 0.8
        }}
      ></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-block bg-clinic-rose text-white px-4 py-1 rounded-full text-sm mb-4 font-medium">
            Transforme sua beleza
          </span>
          <h1 className="heading-xl text-clinic-dark mb-6 leading-tight">
            Desperte Sua Beleza Natural com Nossos Tratamentos Exclusivos
          </h1>
          <p className="body-lg text-gray-700 mb-8 max-w-xl">
            Oferecemos tratamentos estéticos inovadores e personalizados que realçam sua beleza natural. 
            Nossos especialistas estão prontos para cuidar de você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/agendar">
              <Button className="btn-primary bg-clinic-rose hover:bg-clinic-rose/90 text-white w-full sm:w-auto">Agende sua consulta</Button>
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('servicos');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto border-clinic-rose text-clinic-rose hover:bg-clinic-rose hover:text-white py-3 px-6 rounded-md border transition-all font-medium"
            >
              Conheça nossos serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
