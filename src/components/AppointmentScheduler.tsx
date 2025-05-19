
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

// Type for available time slots
type TimeSlot = {
  id: number;
  time: string;
  available: boolean;
};

// Sample available time slots
const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  let id = 1;
  
  for (let hour = 9; hour <= 19; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Randomly mark some slots as unavailable
      const available = Math.random() > 0.3;
      
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      
      slots.push({
        id: id++,
        time: `${formattedHour}:${formattedMinute}`,
        available
      });
    }
  }
  
  return slots;
};

// Sample services
const services = [
  { id: 1, name: 'Limpeza de Pele', category: 'facial', duration: '60 min', price: 'R$ 180,00' },
  { id: 2, name: 'Radiofrequência Facial', category: 'facial', duration: '45 min', price: 'R$ 250,00' },
  { id: 3, name: 'Peeling Químico', category: 'facial', duration: '30 min', price: 'R$ 220,00' },
  { id: 4, name: 'Microagulhamento', category: 'facial', duration: '60 min', price: 'R$ 380,00' },
  { id: 5, name: 'Drenagem Linfática', category: 'corporal', duration: '60 min', price: 'R$ 180,00' },
  { id: 6, name: 'Massagem Modeladora', category: 'corporal', duration: '60 min', price: 'R$ 200,00' },
  { id: 7, name: 'Tratamento para Celulite', category: 'corporal', duration: '45 min', price: 'R$ 280,00' },
  { id: 8, name: 'Depilação a Laser - Perna', category: 'laser', duration: '45 min', price: 'R$ 400,00' },
  { id: 9, name: 'Depilação a Laser - Buço', category: 'laser', duration: '15 min', price: 'R$ 80,00' },
  { id: 10, name: 'Depilação a Laser - Axilas', category: 'laser', duration: '15 min', price: 'R$ 120,00' }
];

// Professionals
const professionals = [
  { id: 1, name: 'Dra. Ana Silva', specialty: 'Dermatologia Estética' },
  { id: 2, name: 'Dra. Juliana Ramos', specialty: 'Fisioterapia Dermatofuncional' },
  { id: 3, name: 'Dr. Carlos Mendes', specialty: 'Medicina Estética' }
];

const AppointmentScheduler = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedProfessional, setSelectedProfessional] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  
  // Filter services by category
  const filteredServices = category === "all" 
    ? services 
    : services.filter(service => service.category === category);
    
  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setDate(date);
    if (date) {
      // Generate new time slots when a date is selected
      setTimeSlots(generateTimeSlots());
      setSelectedTime(""); // Reset time selection
    }
  };
  
  // Handle appointment submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedService || !selectedProfessional || !selectedTime) {
      toast.error("Por favor, preencha todos os campos para agendar.");
      return;
    }
    
    // Format date for display
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    
    // Get service and professional details
    const service = services.find(s => s.id.toString() === selectedService);
    const professional = professionals.find(p => p.id.toString() === selectedProfessional);
    
    // Show success message with appointment details
    toast.success(
      <div>
        <p className="font-bold">Agendamento confirmado!</p>
        <p>Data: {formattedDate}</p>
        <p>Horário: {selectedTime}</p>
        <p>Serviço: {service?.name}</p>
        <p>Profissional: {professional?.name}</p>
        <p>Um email de confirmação foi enviado para você.</p>
      </div>,
      {
        duration: 5000,
      }
    );
    
    // Reset form
    setDate(undefined);
    setCategory("all");
    setSelectedService("");
    setSelectedProfessional("");
    setSelectedTime("");
    setTimeSlots([]);
  };

  return (
    <section className="section-padding bg-clinic-secondary/10" id="agendar">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-clinic-primary text-white px-4 py-1 rounded-full text-sm mb-2 font-medium">
            Agendamento
          </span>
          <h2 className="heading-lg mb-4">Agende Seu Procedimento</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Escolha a data, horário e o procedimento desejado para agendar sua consulta com um de nossos especialistas.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Calendar */}
                <div>
                  <Label className="text-lg font-medium mb-4 block">1. Escolha uma data</Label>
                  <Calendar 
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    disabled={(date) => {
                      // Disable past dates and Sundays
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0;
                    }}
                    className="rounded-md border shadow-sm p-3 pointer-events-auto"
                  />
                </div>
                
                {/* Right Column - Service Selection */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg font-medium mb-4 block">2. Escolha um serviço</Label>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="category">Categoria</Label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Todas as categorias" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas as categorias</SelectItem>
                            <SelectItem value="facial">Tratamentos Faciais</SelectItem>
                            <SelectItem value="corporal">Tratamentos Corporais</SelectItem>
                            <SelectItem value="laser">Tratamentos a Laser</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="service">Procedimento</Label>
                        <Select value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um procedimento" />
                          </SelectTrigger>
                          <SelectContent>
                            {filteredServices.map(service => (
                              <SelectItem key={service.id} value={service.id.toString()}>
                                {service.name} - {service.price} ({service.duration})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="professional">Profissional</Label>
                        <Select value={selectedProfessional} onValueChange={setSelectedProfessional}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um profissional" />
                          </SelectTrigger>
                          <SelectContent>
                            {professionals.map(pro => (
                              <SelectItem key={pro.id} value={pro.id.toString()}>
                                {pro.name} - {pro.specialty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Time Slots */}
                  {date && (
                    <div>
                      <Label className="text-lg font-medium mb-2 block">3. Escolha um horário</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(slot => (
                          <Button
                            key={slot.id}
                            type="button"
                            variant={selectedTime === slot.time ? "default" : "outline"}
                            className={`${
                              !slot.available ? 'opacity-50 cursor-not-allowed' : ''
                            } ${
                              selectedTime === slot.time ? 'bg-clinic-primary text-white' : ''
                            }`}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                          >
                            {slot.time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-clinic-primary hover:bg-clinic-primary/90 text-white py-6 text-lg"
                disabled={!date || !selectedService || !selectedProfessional || !selectedTime}
              >
                Confirmar Agendamento
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentScheduler;
