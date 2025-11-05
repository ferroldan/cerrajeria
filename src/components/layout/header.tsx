import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { KeyRound, Phone } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <KeyRound className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">
          Cerrajería 24/7
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button asChild variant="ghost" className="hidden sm:flex">
            <a href="tel:+5493515179820">
              <Phone className="mr-2 h-4 w-4" />
              Llamar ahora
            </a>
          </Button>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <a href="https://wa.me/+5493515179820" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
