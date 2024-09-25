import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormContext } from "react-hook-form";

const TextInput = ({ name, title, mensaje }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <div className="flex flex-col ">
      <div>
        <label className="text-black  text-lg">{title}</label>
      </div>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          {...register(name, { required: "Campo Requerido" })}
          className="rounded-lg bg-white bg w-[250px] border pl-2 border-gray-300
        "
        />
        {errors[name] && <ErrorMessage message={mensaje} />}
      </div>
    </div>
  );
};

export default TextInput;
