import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormContext } from "react-hook-form";

const NumInput = ({ name, title, mensaje }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <div className="flex flex-col">
      <div>
        <label className="text-white text-lg texto">{title}</label>
      </div>
      <div className="flex flex-row gap-2">
        <input
          type="number"
          {...register(name, {
            valueAsNumber: true,
            validate: (value) => !isNaN(value),
          })}
          className="rounded-lg bg-white bg w-[250px] border pl-2 border-gray-300"
          placeholder="Solo números"
        />
        {errors[name] && <ErrorMessage message={mensaje} />}
      </div>
    </div>
  );
};
export default NumInput;
