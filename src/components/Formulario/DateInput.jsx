import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import dayjs from "dayjs";

const DateInput = ({ name, title, mensaje}) => {
  const { control, formState: { errors } } = useFormContext();
  return (
    <div className="flex flex-row gap-4 ">
      <label className="text-black  text-lg pl-2">{title}</label>
      <div className="p-1">
        <Controller
          control={control}
          name={name}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          render={({ field }) => (
            <input
              type="date"
              {...field}
              className="rounded-lg bg-white bg border pl-2 border-gray-300"
            />
          )}
        />
        {errors[name] && <ErrorMessage message={mensaje} />}
      </div>
      <p className="text-red-400 font-medium text-lg">*</p>
    </div>
  );
};

export default DateInput