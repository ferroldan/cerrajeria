import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DoorOpen, KeyRound, Copy, Car, Zap } from 'lucide-react';

const services = [
  {
    icon: <DoorOpen className="h-10 w-10 text-primary" />,
    title: 'Apertura de Puertas',
    description: '¿Te quedaste afuera? Ofrecemos entrada rápida y sin daños para tu hogar, oficina o vehículo.',
  },
  {
    icon: <KeyRound className="h-10 w-10 text-primary" />,
    title: 'Cambio de Cerraduras',
    description: 'Mejora tu seguridad con nuestros servicios profesionales de reemplazo e instalación de cerraduras.',
  },
  {
    icon: <Copy className="h-10 w-10 text-primary" />,
    title: 'Duplicado de Llaves',
    description: '¿Necesitas una copia? Ofrecemos corte de llaves preciso para una amplia variedad de tipos de cerraduras.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Emergencias 24/7',
    description: 'Día o noche, nuestro equipo de emergencia está listo para responder a tus necesidades urgentes de cerrajería.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background/50 py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cualquiera que sea tu necesidad de cerraduras y llaves, tenemos la solución.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="items-center p-0">
                <div className="rounded-full bg-primary/10 p-4">
                  {service.icon}
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
           <Card className="flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg md:col-span-2 lg:col-span-1">
              <CardHeader className="items-center p-0">
                 <div className="rounded-full bg-primary/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <CardTitle className="mt-4 font-headline text-xl">Asesoramiento de Seguridad</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                Permítenos evaluar tu propiedad y recomendarte mejoras de seguridad para tu tranquilidad.
              </CardDescription>
            </Card>
        </div>
      </div>
    </section>
  );
}
