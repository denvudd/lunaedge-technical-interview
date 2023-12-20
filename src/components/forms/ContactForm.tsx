import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, ContactFormValidator } from '@/lib/validators/contact-form';
import Select from '../ui/Select/Select';
import { Option } from '../ui/Select/types';

const ContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(ContactFormValidator),
  });

  const onSubmit: SubmitHandler<ContactFormSchema> = (values) => {
    console.log(values);
  };

  const frameworks = [
    {
      value: 'next.js',
      label: 'Next.js',
    },
    {
      value: 'sveltekit',
      label: 'SvelteKit',
    },
    {
      value: 'nuxt.js',
      label: 'Nuxt.js',
    },
    {
      value: 'remix',
      label: 'Remix',
    },
    {
      value: 'astro',
      label: 'Astro',
    },
  ];

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="my-2 text-3xl font-bold">Contact Form for Pokemon Trainer</h2>
      <Select
        align="full-width"
        isMulti
        isSearchable
        onSelect={(option) => console.log(option)}
        options={frameworks}
        placeholder="Select"
      />
    </form>
  );
};

export default ContactForm;
