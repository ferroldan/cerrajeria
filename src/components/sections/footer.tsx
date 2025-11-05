
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

function Copyright() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Esta parte en realidad no es necesaria si el estado inicial ya es correcto,
    // pero lo mantenemos para mayor claridad si la lógica se vuelve más compleja.
    // En un escenario simple, establecer el estado inicial es suficiente.
  }, []);

  return (
    <p className="text-sm text-muted-foreground">
      &copy; {year} Cerrajería 24/7. Todos los derechos reservados.
    </p>
  );
}


export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-background">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className='h-5'>
          {isClient ? <Copyright /> : <p className="text-sm text-muted-foreground">&copy; LlaveMaestra 24. Todos los derechos reservados.</p>}
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
