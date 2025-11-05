import Image from 'next/image';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const bgImage = PlaceHolderImages.find((p) => p.id === 'background');

  return (
    <div className="relative min-h-screen w-full bg-background">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="absolute inset-0 z-0 object-cover opacity-5 dark:opacity-[0.02]"
          data-ai-hint={bgImage.imageHint}
          priority
        />
      )}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
          {/* <Testimonials /> */}
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
