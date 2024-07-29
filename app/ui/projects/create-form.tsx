'use client';

import { createProject, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { Button } from '../button';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/16/solid';
import UserInputString from './userInputString';

export default function Form() {
  const initialState: State = { message: null, errors: {} };

  const [state, formAction] = useActionState(createProject, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <UserInputString value="Project Name" type="string" />
        <UserInputString value="Description" type="string" />
        <UserInputString value="Customer Name" type="string" />
        <UserInputString value="Image URL" type="string" />
        <UserInputString value="From Date" type="string" />
        <UserInputString value="To Date" type="string" />

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Select relevant technologies
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="java"
                  name="status"
                  type="checkbox"
                  value="Java"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />

                <label
                  htmlFor="java"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Java <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/home/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Project</Button>
      </div>
    </form>
  );
}
