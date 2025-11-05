
'use client';

import { useEffect, useState } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleServiceRequest, type State } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  contact: z.string().min(5, { message: 'Por favor, introduce un teléfono o correo electrónico válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type FormData = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending} aria-disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        'Enviar Mensaje'
      )}
    </Button>
  );
}

export function ContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(handleServiceRequest, initialState);
  const { toast } = useToast();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });
  
  useEffect(() => {
    if (state.message && state.errors) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
    if (state.message && !state.errors) {
      setIsAlertOpen(true);
      toast({
        variant: 'default',
        title: 'Éxito',
        description: state.message,
      });
    }
  }, [state, toast]);


  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Contáctanos</CardTitle>
          <CardDescription>Completa el formulario para enviarnos un mensaje.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" {...register('name')} placeholder="Tu Nombre" />
              {(errors.name || state.errors?.name) && (
                <p className="text-sm font-medium text-destructive">
                  {errors.name?.message || state.errors?.name?.[0]}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Teléfono o Correo Electrónico</Label>
              <Input id="contact" {...register('contact')} placeholder="Tu Información de Contacto" />
               {(errors.contact || state.errors?.contact) && (
                <p className="text-sm font-medium text-destructive">
                  {errors.contact?.message || state.errors?.contact?.[0]}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Describe tu problema..."
                className="min-h-[120px]"
              />
              {(errors.message || state.errors?.message) && (
                <p className="text-sm font-medium text-destructive">
                  {errors.message?.message || state.errors?.message?.[0]}
                </p>
              )}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500"/>
            </div>
            <AlertDialogTitle className="text-center">Mensaje Enviado</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo en breve.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsAlertOpen(false)}>
              Cerrar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
