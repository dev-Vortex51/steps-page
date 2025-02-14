interface InputContainerProps {
  type: string;
  placeholder: string;
  id: string;
  error?: { message: string };
  register: (
    name: string,
    options?: {
      required?: string;
      pattern?: { value: RegExp; message: string };
    }
  ) => {
    onChange: () => void;
    onBlur: () => void;
    ref: (instance: HTMLInputElement | null) => void;
  };
  name: string;
  validation?: {
    required?: string;
    pattern?: { value: RegExp; message: string };
  };
}

const InputContainer = ({
  type,
  placeholder,
  id,
  error,
  register,
  name,
  validation,
}: InputContainerProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex items-center justify-between w-full">
        <label htmlFor={id} className="font-normal text-marine ">
          {name}
        </label>
        {error && <p className="text-strawberry">{error.message}</p>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={`w-full h-10 py-2.5 px-4 rounded-md border outline-0
    border-light-gray text-marine font-bold focus:border-purplish
    placeholder:font-normal placeholder:text-cool-gray ${error && "border-strawberry"} `}
        {...register(id, validation)}
      />
    </div>
  );
};

export default InputContainer;
