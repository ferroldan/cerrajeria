
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  contact: z.string().min(5, { message: 'Por favor, introduce un contacto válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export type State = {
  errors?: {
    name?: string[];
    contact?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function handleServiceRequest(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    contact: formData.get('contact'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos faltantes. No se pudo enviar el mensaje.',
    };
  }

  // Aquí podrías agregar lógica para enviar el formulario (email, base de datos, etc.)
  return { 
    message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
  };
}
