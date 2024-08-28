import React from "react";
import SelectorTipo from "../SelectorTipo";
import ErrorMessage from "./ErrorMessage";
import { Controller, useFormContext } from "react-hook-form";

const TipoInput = ({ name, title, mensaje, }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex items-center gap-4 ">
      <label className="text-white texto text-lg">{title}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <SelectorTipo value={field.value} onChange={field.onChange} />
        )}
      />
      {errors[name] && <ErrorMessage message={mensaje} />}
    </div>
  );
};

export default TipoInput;
