import { z } from 'zod';
import { ValidationError } from '@/config/validation-errors';

export const ContactFormValidator = z.object({
  name: z
    .string({
      required_error: ValidationError.Required,
    })
    .min(2, ValidationError.TooShort)
    .max(12, ValidationError.TooLong)
    .regex(/^[a-zA-Z]+$/, ValidationError.InvalidCharacter),
  surname: z
    .string({
      required_error: ValidationError.Required,
    })
    .min(2, ValidationError.TooShort)
    .max(12, ValidationError.TooLong)
    .regex(/^[a-zA-Z]+$/, ValidationError.InvalidCharacter),
  pokemons: z
    .array(
      z.object({
        label: z.string(),
        value: z.string().or(z.number()),
      }),
    )
    .min(4, ValidationError.Only4Pokemons)
    .max(4, ValidationError.Only4Pokemons),
});

export type ContactFormSchema = z.infer<typeof ContactFormValidator>;
