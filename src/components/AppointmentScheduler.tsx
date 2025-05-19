
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, MessageSquare, Calendar, Clock } from 'lucide-react';

const AppointmentScheduler = () => {
  const handleWhatsAppScheduling = () => {
    const message = encodeURIComponent("Olá, gostaria de agendar um procedimento estético. Poderia me ajudar?");
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="section-padding bg-clinic-secondary/10" id="agendar">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-clinic-rose text-white px-4 py-1 rounded-full text-sm mb-2 font-medium">
            Agendamento
          </span>
          <h2 className="heading-lg mb-4">Agende Seu Procedimento</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Entre em contato via WhatsApp para agendar seu procedimento com um de nossos especialistas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Como Agendar</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-clinic-rose/10 p-2 rounded-full mr-3">
                    <MessageSquare className="h-5 w-5 text-clinic-rose" />
                  </div>
                  <div>
                    <p className="font-medium">Entre em contato</p>
                    <p className="text-gray-600">Envie uma mensagem pelo WhatsApp informando seu interesse.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-clinic-rose/10 p-2 rounded-full mr-3">
                    <Calendar className="h-5 w-5 text-clinic-rose" />
                  </div>
                  <div>
                    <p className="font-medium">Escolha a data</p>
                    <p className="text-gray-600">Nossa equipe informará as datas disponíveis para seu procedimento.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-clinic-rose/10 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-clinic-rose" />
                  </div>
                  <div>
                    <p className="font-medium">Confirme o horário</p>
                    <p className="text-gray-600">Confirmaremos seu agendamento e enviaremos um lembrete no dia anterior.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center space-y-6">
              <div className="text-center">
                <p className="text-lg font-medium mb-2">Horário de Atendimento</p>
                <p className="text-gray-600">Segunda à Sexta: 09h às 19h</p>
                <p className="text-gray-600">Sábados: 09h às 16h</p>
              </div>
              <Button 
                onClick={handleWhatsAppScheduling}
                className="bg-clinic-rose hover:bg-clinic-rose/90 text-white px-6 py-6 w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg text-base"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0996094 12.0161 0.0996094C5.72946 0.0996094 0.516071 5.31407 0.516071 11.5982C0.516071 13.6714 1.06071 15.6855 2.08393 17.4375L0.410714 24L7.12946 22.3554C8.81607 23.2821 10.6946 23.7696 12.6107 23.7696H12.0161C18.3027 23.7696 23.5161 18.5554 23.5161 12.2714C23.5161 9.11786 22.6518 6.12857 20.4054 3.5875ZM12.0161 21.7875C10.2964 21.7875 8.60893 21.3 7.12946 20.3732L6.73571 20.1375L2.96607 21.1232L3.95179 17.4375L3.71429 17.0437C2.67857 15.5643 2.1625 13.6098 2.1625 11.5982C2.1625 6.24643 6.66607 1.74286 12.0179 1.74286C14.6464 1.74286 17.0982 2.75536 18.9732 4.63036C20.8482 6.50536 21.8607 8.95714 21.8607 11.5857C21.8589 17.0455 17.3554 21.7875 12.0161 21.7875ZM17.5232 14.0054C17.2286 13.8589 15.7696 13.1455 15.5036 13.0589C15.2375 12.9125 15.0321 12.8857 14.8268 13.1804C14.6214 13.475 14.0571 14.0982 13.8839 14.3036C13.7107 14.5089 13.4768 14.5357 13.1821 14.3893C11.8982 13.7464 11.0339 13.2589 10.1696 11.7804C9.88393 11.3268 10.5973 11.3268 11.2518 10.0143C11.3393 9.80893 11.2857 9.63036 11.2 9.48393C11.1143 9.3375 10.4 7.87857 10.1357 7.28928C9.85357 6.72679 9.59286 6.8 9.41429 6.8C9.24107 6.8 9.03571 6.77321 8.83036 6.77321C8.625 6.77321 8.33036 6.85893 8.06429 7.15357C7.79821 7.44821 7.03571 8.16071 7.03571 9.61964C7.03571 11.0786 8.09107 12.5107 8.23393 12.7161C8.40536 12.9214 10.4 16.0364 13.4768 17.3196C15.7107 18.2464 16.3429 18.3339 17.0232 18.1875C17.4161 18.1018 18.5839 17.4696 18.8464 16.7893C19.1089 16.1089 19.1089 15.5196 19.0232 15.3643C18.9375 15.175 18.7339 15.0893 18.4393 14.9429L17.5232 14.0054Z"
                    fill="currentColor"
                  />
                </svg>
                Agendar via WhatsApp
              </Button>
              <p className="text-sm text-gray-500">Resposta rápida em horário comercial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentScheduler;
