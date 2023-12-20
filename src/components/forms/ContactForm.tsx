import React from 'react';
import { AxiosError } from 'axios';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, ContactFormValidator } from '@/lib/validators/contact-form';
import Select from '../ui/Select/Select';
import { Option } from '../ui/Select/types';
import { Input, InputError, Label } from '../ui/Input/Input';
import { PokemonsResponse } from '@/lib/types';
import { Button } from '../ui/Button/Button';
import axios from '@/lib/axios';

const ContactForm: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<PokemonsResponse | undefined>();
  const [isPokemonsLoading, setIsPokemonsLoading] = React.useState<boolean>(false);
  const [isPokemonsError, setIsPokemonsError] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Option[]>([]);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(ContactFormValidator),
  });

  const fetchPokemons = async () => {
    try {
      setIsPokemonsLoading(true);
      const { data } = await axios('https://pokeapi.co/api/v2/pokemon?limit=4');

      if (data instanceof AxiosError) {
        throw new Error(data.message);
      }

      setIsPokemonsLoading(false);

      return data as PokemonsResponse;
    } catch (error) {
      setIsPokemonsLoading(false);
      console.log('Pokemons Error:', JSON.stringify(error, null, 2));
    }
  };

  const onSubmit: SubmitHandler<ContactFormSchema> = (values) => {
    console.log(values);
  };

  React.useEffect(() => {
    setIsPokemonsLoading(true);
    fetchPokemons()
      .then((data) => {
        setPokemons(data);
      })
      .catch(() => {
        setIsPokemonsError(true);
      });
  }, []);

  React.useEffect(() => {
    if (pokemons) {
      setOptions(
        pokemons.results.map((pokemon) => ({
          label: pokemon.name,
          value: pokemon.name,
        })),
      );
    }
  }, [pokemons]);

  return (
    <form className="mx-auto flex max-w-lg flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="my-2 text-center text-3xl font-bold">Contact Form for Pokemon Trainer</h2>
      <div className="flex w-full flex-col gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Label>Your Name</Label>
              <Input {...field} disabled={isPokemonsLoading} />
              {errors.name && <InputError>{errors.name.message}</InputError>}
            </div>
          )}
        />

        <Controller
          name="surname"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Label>Your Surname</Label>
              <Input {...field} disabled={isPokemonsLoading} />
              {errors.surname && <InputError>{errors.surname.message}</InputError>}
            </div>
          )}
        />

        <Controller
          name="pokemons"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Label>Your Team</Label>
              <Select
                isMulti
                isSearchable
                onSelect={(option) => console.log(option)}
                options={options}
                placeholder="Select"
                rootClassname="w-full"
                triggerClassname="w-full"
              />
              {errors.name && <InputError>{errors.name.message}</InputError>}
            </div>
          )}
        />
      </div>
      <div className="flex justify-end">
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default ContactForm;
