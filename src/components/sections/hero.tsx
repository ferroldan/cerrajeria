import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section id="hero" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Tu Cerrajero de Confianza 24/7
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
          Servicio rápido, confiable y profesional para tu hogar, auto y negocio.
          Cuando estás fuera, estamos aquí para ayudarte a volver a entrar.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="tel:+5493515179820">
              <Phone className="mr-2 h-5 w-5" />
              Urgencias
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-card hover:bg-background">
             <a href="https://wa.me/+5493515179820" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="mr-2 h-5 w-5 text-green-500" />
              Mensaje en WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
