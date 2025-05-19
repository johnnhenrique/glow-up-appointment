
import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const AppointmentScheduler = () => {
  useEffect(() => {
    // Add Calendly script to document
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section-padding bg-clinic-secondary/10" id="agendar">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-clinic-rose text-white px-4 py-1 rounded-full text-sm mb-2 font-medium">
            Agendamento
          </span>
          <h2 className="heading-lg mb-4">Agende Seu Procedimento</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Escolha a data, horário e o procedimento desejado para agendar sua consulta com um de nossos especialistas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="calendly-inline-widget bg-white rounded-lg shadow-lg overflow-hidden" 
            data-url="https://calendly.com/your-calendly-username"
            style={{
              minWidth: '320px',
              height: '700px',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentScheduler;
