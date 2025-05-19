
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen pt-24">
        <div className="container-custom py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="heading-xl mb-4">Tabela de Preços</h1>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossa tabela de preços transparente e competitiva para todos os tratamentos estéticos.
            </p>
          </div>
        </div>
        
        <Pricing />
        
        <section className="py-16 bg-clinic-primary/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="heading-lg mb-6">Pacotes Promocionais</h2>
              <p className="text-gray-600 mb-8">
                Economize ao adquirir nossos pacotes de tratamentos. Combinamos procedimentos complementares 
                para maximizar seus resultados com preços especiais.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-clinic-primary hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2">Pacote Facial</h3>
                  <p className="text-clinic-primary font-bold text-2xl mb-4">R$ 800,00</p>
                  <p className="text-sm text-gray-500 mb-4">5 sessões de tratamentos faciais</p>
                  <ul className="space-y-2 text-left mb-6">
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      2x Limpeza de Pele
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      2x Radiofrequência Facial
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      1x Peeling Químico
                    </li>
                  </ul>
                  <Link to="/agendar">
                    <Button className="w-full">Agendar</Button>
                  </Link>
                </div>
                
                <div className="border-2 border-clinic-primary rounded-lg p-6 shadow-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-clinic-primary text-white px-4 py-1 rounded-full text-sm">
                    Mais Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pacote Corporal Detox</h3>
                  <p className="text-clinic-primary font-bold text-2xl mb-4">R$ 1.200,00</p>
                  <p className="text-sm text-gray-500 mb-4">8 sessões de tratamentos corporais</p>
                  <ul className="space-y-2 text-left mb-6">
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      4x Drenagem Linfática
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      2x Massagem Modeladora
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      2x Tratamento para Celulite
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Desconto de 20% para próximo pacote
                    </li>
                  </ul>
                  <Link to="/agendar">
                    <Button className="w-full">Agendar</Button>
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 hover:border-clinic-primary hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2">Pacote Noiva</h3>
                  <p className="text-clinic-primary font-bold text-2xl mb-4">R$ 1.500,00</p>
                  <p className="text-sm text-gray-500 mb-4">Preparação completa para o grande dia</p>
                  <ul className="space-y-2 text-left mb-6">
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      3x Tratamentos Faciais
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      4x Tratamentos Corporais
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      1x Dia da Noiva Completo
                    </li>
                  </ul>
                  <Link to="/agendar">
                    <Button className="w-full">Agendar</Button>
                  </Link>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">Formas de Pagamento</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="bg-gray-100 p-3 rounded-lg w-20 h-12 flex items-center justify-center">
                    <span className="font-bold">Visa</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg w-20 h-12 flex items-center justify-center">
                    <span className="font-bold">Master</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg w-20 h-12 flex items-center justify-center">
                    <span className="font-bold">PIX</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg w-20 h-12 flex items-center justify-center">
                    <span className="font-bold">Boleto</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg w-20 h-12 flex items-center justify-center">
                    <span className="font-bold">Dinheiro</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Aceitamos parcelamento em até 12x nos cartões de crédito.
                  Entre em contato para mais informações sobre descontos e condições especiais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default PricingPage;
