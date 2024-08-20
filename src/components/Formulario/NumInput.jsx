import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormContext } from "react-hook-form";

const NumInput = ({ name, title, mensaje }) => {
  const { formState: { errors }, register } = useFormContext();
  return (
    <div className="flex items-center gap-4">
      <label className="text-white text-lg">{title}</label>
      <input
        type="number"
        {...register(
          name,
          {
            valueAsNumber: true,
            validate: (value) => !isNaN(value) || "Ingresar sólo números",
          }
        )}
        className="rounded-sm bg-white bg opacity-60"
      />
      {errors[name] && <ErrorMessage message={{ mensaje }} />}
    </div>
  );
};
export default NumInput;
