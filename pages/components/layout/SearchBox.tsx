import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

interface Props {
  currentRefinement: string;
  isSearchStalled: boolean;
  refine: (query: string) => void;
}

function SearchBox({ refine }: Props) {
  const handleSubmit = ({ query }: { query: string }) => {
    refine(query);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ query: '' }}>
      {() => (
        <Form className="w-full flex md:ml-0">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Field
              id="search-field"
              className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent"
              placeholder="Quick search"
              name="query"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default connectSearchBox(SearchBox);