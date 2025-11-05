import { ContactForm } from '@/components/contact-form';

export default function Contact() {
  return (
    <section id="contact" className="bg-background/50 py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ponte en Contacto
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ¿Tienes una pregunta o necesitas asistencia inmediata? Completa el formulario y nuestra IA sugerirá el especialista adecuado para tus necesidades. Para emergencias, por favor llámanos directamente.
            </p>
            <div className="mt-8 space-y-4 text-base text-foreground">
              <p>
                <strong>Teléfono:</strong> <a href="tel:+1-555-123-4567" className="hover:underline">+1 (555) 123-4567</a>
              </p>
              <p>
                <strong>Correo Electrónico:</strong> <a href="mailto:contact@llavemaestra24.com" className="hover:underline">contact@llavemaestra24.com</a>
              </p>
               <p>
                <strong>Horario:</strong> 24 horas al día, 7 días a la semana
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
