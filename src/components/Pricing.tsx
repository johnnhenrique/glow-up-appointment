
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

// Mock price data
const pricingData = {
  faciais: [
    { id: 1, name: 'Limpeza de Pele Especializada', price: '150,00', highlight: true },
    { id: 2, name: 'Radiofrequência Facial', price: '250,00', highlight: false },
    { id: 3, name: 'Peeling Químico', price: '150,00', highlight: false },
    { id: 4, name: 'Skin Booster', price: '300,00', highlight: true },
    { id: 5, name: 'Microagulhamento', price: '300,00', highlight: true },
    { id: 6, name: 'Toxina Botulínica', price: '850,00', highlight: false },
  ],
  corporais: [
    { id: 1, name: 'Drenagem Linfática', price: '180,00', highlight: false },
    { id: 2, name: 'Massagem Modeladora', price: '200,00', highlight: false },
    { id: 3, name: 'Tratamento para Celulite', price: '280,00', highlight: true },
    { id: 4, name: 'Radiofrequência Corporal', price: '320,00', highlight: false },
    { id: 5, name: 'Criolipólise', price: '850,00', highlight: false },
    { id: 6, name: 'Ultracavitação', price: '300,00', highlight: false },
  ],
  laser: [
    { id: 1, name: 'Depilação a Laser - Perna Completa', price: '400,00', highlight: false },
    { id: 2, name: 'Depilação a Laser - Buço', price: '80,00', highlight: false },
    { id: 3, name: 'Depilação a Laser - Axilas', price: '120,00', highlight: false },
    { id: 4, name: 'Remoção de Manchas a Laser', price: '350,00', highlight: true },
    { id: 5, name: 'Laser para Rejuvenescimento', price: '450,00', highlight: false },
    { id: 6, name: 'Laser para Estrias', price: '380,00', highlight: false },
  ],
  pacotes: [
    { id: 1, name: 'Pacote Facial Completo (5 sessões)', price: '800,00', highlight: true },
    { id: 2, name: 'Pacote Corporal Detox (8 sessões)', price: '1.200,00', highlight: true },
    { id: 3, name: 'Pacote Noiva (facial + corporal)', price: '1.500,00', highlight: false },
    { id: 4, name: 'Pacote Pós-Gestante', price: '1.100,00', highlight: false },
    { id: 5, name: 'Pacote Verão (10 sessões variadas)', price: '1.800,00', highlight: false },
  ]
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('faciais');

  return (
    <section className="section-padding" id="precos">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-clinic-accent text-clinic-dark px-4 py-1 rounded-full text-sm mb-2 font-medium">
            Nossos preços
          </span>
          <h2 className="heading-lg mb-4">Tabela de Preços</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Conheça nossa tabela de preços transparente para todos os tratamentos.
            Oferecemos opções para todos os orçamentos e necessidades.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          <Tabs defaultValue="faciais" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-gray-100">
              <TabsTrigger value="faciais" className="data-[state=active]:bg-clinic-primary data-[state=active]:text-white">Faciais</TabsTrigger>
              <TabsTrigger value="corporais" className="data-[state=active]:bg-clinic-primary data-[state=active]:text-white">Corporais</TabsTrigger>
              <TabsTrigger value="laser" className="data-[state=active]:bg-clinic-primary data-[state=active]:text-white">Laser</TabsTrigger>
              <TabsTrigger value="pacotes" className="data-[state=active]:bg-clinic-primary data-[state=active]:text-white">Pacotes</TabsTrigger>
            </TabsList>

            {Object.keys(pricingData).map((category) => (
              <TabsContent key={category} value={category}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[70%]">Procedimento</TableHead>
                      <TableHead className="text-right">Preço (R$)</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingData[category].map((item) => (
                      <TableRow key={item.id} className={item.highlight ? 'bg-clinic-secondary/20' : ''}>
                        <TableCell className="font-medium">
                          {item.name}
                          {item.highlight && (
                            <span className="ml-2 bg-clinic-primary text-white text-xs px-2 py-1 rounded-full">
                              Em promoção
                            </span>
                          )}
                        </TableCell>
                        <TableCell className="text-right font-bold">R$ {item.price}</TableCell>
                        <TableCell>
                          <Link to="/agendar">
                            <Button size="sm" className="w-full bg-clinic-primary hover:bg-clinic-primary/90">Agendar</Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
