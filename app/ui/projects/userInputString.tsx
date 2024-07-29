interface IUserInputString {
  value: string;
  type: string;
}

export default function UserInputString({ value, type }: IUserInputString) {
  return (
    <div className="mb-4">
      <label htmlFor={value} className="mb-2 block text-sm font-medium">
        {value}
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id={value}
            name={value}
            type={type}
            placeholder={`Enter ${value}`}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
