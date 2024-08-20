import React from "react";
import SelectorCalle from "../SelectorCalle";
import ErrorMessage from "./ErrorMessage";
import { Controller, useFormContext } from "react-hook-form";

const CalleInput =({name, title, mensaje,}) =>{
  const { control, formState: { errors }, setValue } = useFormContext();
    return(
        <div className="flex items-center gap-4 p-1">
          <label className="text-white text-lg">{title}</label>
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <SelectorCalle
                value={field.value}
                onChange={(value) =>{field.onChange(value)
                }}
              />
            )}
          />
          {errors[name] && <ErrorMessage message={mensaje || "input invalido"} />}
        </div>
    )
}

export default CalleInput