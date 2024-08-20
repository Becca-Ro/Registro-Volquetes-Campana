import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import dayjs from "dayjs";

const DateInput = ({ name, title, mensaje}) => {
  const { control, formState: { errors } } = useFormContext();
  return (
    <div>
      <label className="text-white text-lg p-1">{title}</label>
      <div className="p-1">
        <Controller
          control={control}
          name={name}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          render={({ field }) => (
            <input
              type="date"
              {...field}
              className="rounded-sm bg-white bg opacity-60"
            />
          )}
        />
        {errors[name] && <ErrorMessage message={mensaje || "input invalido"} />}
      </div>
    </div>
  );
};

export default DateInput