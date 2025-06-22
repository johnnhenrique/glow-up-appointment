
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "Qual a duração média dos procedimentos?",
    answer: "A duração varia conforme o procedimento escolhido. Tratamentos faciais simples duram entre 30-60 minutos, enquanto tratamentos corporais podem durar de 45-90 minutos. Procedimentos a laser variam entre 15-45 minutos dependendo da área tratada."
  },
  {
    question: "É necessário fazer consulta de avaliação antes dos procedimentos?",
    answer: "Sim, recomendamos uma consulta de avaliação prévia para todos os procedimentos. Isso nos permite personalizar o tratamento de acordo com suas necessidades específicas e garantir os melhores resultados."
  },
  {
    question: "Quantas sessões são necessárias para ver resultados?",
    answer: "O número de sessões varia conforme o procedimento e as características individuais. Para a maioria dos tratamentos, resultados iniciais são perceptíveis após 2-3 sessões, mas o protocolo completo geralmente inclui 6-10 sessões para resultados ótimos."
  },
  {
    question: "Posso fazer mais de um procedimento no mesmo dia?",
    answer: "Sim, muitos procedimentos podem ser combinados no mesmo dia. Nossa equipe pode criar um cronograma personalizado que combine tratamentos complementares de forma segura e eficaz."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos dinheiro, cartões de crédito e débito, Pix, e também oferecemos parcelamento em até 4x nos cartões de crédito. Temos ainda pacotes promocionais com descontos especiais."
  },
  {
    question: "Como devo me preparar para os procedimentos?",
    answer: "Para a maioria dos tratamentos, recomendamos evitar exposição solar intensa nas semanas anteriores, manter a pele hidratada e evitar procedimentos invasivos próximos à data. Instruções específicas são fornecidas após a consulta de avaliação."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-clinic-primary text-white px-4 py-1 rounded-full text-sm mb-2 font-medium">
            FAQ
          </span>
          <h2 className="heading-lg mb-4">Perguntas Frequentes</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos tratamentos e procedimentos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-clinic-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
