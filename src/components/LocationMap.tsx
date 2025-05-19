
import React from 'react';

const LocationMap = () => {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-clinic-primary text-white px-4 py-1 rounded-full text-sm mb-2 font-medium">
            Localização
          </span>
          <h2 className="heading-lg mb-4">Onde Estamos</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Visite nossa clínica em um ambiente aconchegante e moderno. 
            Estamos localizados em uma área de fácil acesso com estacionamento disponível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098173137262!2d-46.6522538!3d-23.5647888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1653497594188!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
              ></iframe>
            </div>
          </div>

          <div className="bg-clinic-light p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-clinic-dark">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-clinic-rose/20 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-clinic-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-gray-600">Av. Paulista, 1000</p>
                  <p className="text-gray-600">Bela Vista, São Paulo - SP</p>
                  <p className="text-gray-600">CEP: 01310-100</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-clinic-rose/20 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-clinic-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                  <p className="text-gray-600">(11) 3333-3333</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-clinic-rose/20 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-clinic-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 20h</p>
                  <p className="text-gray-600">Sábados: 9h às 16h</p>
                  <p className="text-gray-600">Domingos: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
