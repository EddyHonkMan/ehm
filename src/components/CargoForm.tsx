import React from 'react';
import 'tailwindcss/tailwind.css';

function CargoForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit'); // eslint-disable-next-line no-console
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="asdf" className="block text-sm font-medium text-gray-700 ">
          ID
          <input type="text" name="cargoName" id="asdf" />
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}

export default CargoForm;
