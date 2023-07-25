import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormEvent } from 'react';

export const Search = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const artist = formData.get('artist');

    console.log({ artist });
  };
  return (
    <div className="mb-4">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-full items-center space-x-2 "
      >
        <Input
          className="flex-1"
          type="text"
          placeholder="Search by artist"
          name="artist"
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};
