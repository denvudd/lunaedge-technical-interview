import { ValidationError } from '@/config/validation-errors';
import { z } from 'zod';

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
});

export type ContactFormSchema = z.infer<typeof ContactFormValidator>;
