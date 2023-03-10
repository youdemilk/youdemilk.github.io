import { ChangeEventHandler, FC } from 'react';


type InputProps = {
  label: string;
  placeholder: string;
  value: number | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

export const Input: FC<InputProps> = (props) => {
  const { label, placeholder,  value, onChange, disabled } = props;

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96 mx-4 flex flex-1 flex-col max-w-sm" >
        <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
          {label}
        </label>
        <input
          value={value}
          onChange={onChange}
          type="number"
          className="
            form-control
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            my-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleFormControlInput1"
          maxLength={9}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
