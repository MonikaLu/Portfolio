'use client';

import { createProject, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { Button } from '../button';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/16/solid';
import UserInputString from './userInputString';
import { Technology } from '@prisma/client';

export default function Form() {
  const initialState: State = { message: null, errors: {} };

  const [state, formAction] = useActionState(createProject, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <UserInputString value="projectName" type="string" state={state} />
        <UserInputString value="description" type="string" state={state} />
        <UserInputString value="customerName" type="string" state={state} />
        <UserInputString value="image_url" type="string" state={state} />
        <UserInputString value="fromDate" type="date" state={state} />
        <UserInputString value="toDate" type="date" state={state} />

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Select relevant technologies
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              {Object.values(Technology).map((tech) => (
                <div className="flex items-center" key={tech}>
                  <input
                    id={tech}
                    name="technologies"
                    type="checkbox"
                    value={tech}
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />

                  <label
                    htmlFor={tech}
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    {tech} <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/home/projects"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Project</Button>
      </div>
    </form>
  );
}
