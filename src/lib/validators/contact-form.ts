import { z } from 'zod';
import { ValidationError } from '@/config/validation-errors';

export const ContactFormValidator = z.object({
  name: z
    .string()
    .min(2, ValidationError.TooShort)
    .max(12, ValidationError.TooLong)
    .regex(/^[a-zA-Z]+$/, ValidationError.InvalidCharacter),
  surname: z
    .string()
    .min(2, ValidationError.TooShort)
    .max(12, ValidationError.TooLong)
    .regex(/^[a-zA-Z]+$/, ValidationError.InvalidCharacter),
  pokemons: z.array(z.string()).min(1, ValidationError.Required),
});

export type ContactFormSchema = z.infer<typeof ContactFormValidator>;
