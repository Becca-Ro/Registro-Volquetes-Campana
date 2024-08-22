import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormContext } from "react-hook-form";

const NumInput = ({ name, title, mensaje }) => {
  const { formState: { errors }, register } = useFormContext();
  return (
    <div className="flex flex-col texto">
      <div><label className="text-white text-lg">{title}</label></div>
      <div>
      <input
        type="number"
        {...register(
          name,
          {
            valueAsNumber: true,
            validate: (value) => !isNaN(value) || "Ingresar sólo números",
          }
        )}
        className="rounded-lg bg-white bg w-[250px] border pl-2 border-gray-300"
      />
      <p>{errors[name] && <ErrorMessage message={{ mensaje }} />}</p>
      </div>
    </div>
  );
};
export default NumInput;
