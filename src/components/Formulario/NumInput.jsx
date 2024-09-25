import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormContext } from "react-hook-form";

const NumInput = ({ name, title, mensaje }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <div className="flex flex-col ">
      <div>
        <label className="text-black text-lg">{title}</label>
      </div>
      <div>
        <input
          type="text"
          onKeyDown={(event) => {   //onKeyPress esta deprecated
            const permitidas = [
              'Backspace',
              'Delete',
              'ArrowLeft',
              'ArrowRight',
            ];
        
            if (!/[0-9]/.test(event.key) && !permitidas.includes(event.key)) {
              event.preventDefault();
            }
          }}
          {...register(name)}
          className="rounded-lg bg-white bg w-[250px] border pl-2 border-gray-300"
          placeholder="Solo números"
          maxLength={8}
          
        />
        {errors[name] && <ErrorMessage message={mensaje} />}
      </div>
    </div>
  );
};
export default NumInput;
