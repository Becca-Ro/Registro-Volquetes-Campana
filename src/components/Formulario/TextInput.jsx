import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormContext } from "react-hook-form";

const TextInput =({ name, title, mensaje }) => {
    const {formState: { errors }, register } = useFormContext();
    return(
        <div className="flex items-center gap-4">
        <label className="text-white text-lg">{title}</label>
        <input
        type="text"
        {...register(name, { required: "Campo Requerido" })}
        className="rounded-sm bg-white bg opacity-60 w-[210px]"
    />
    {errors[name] && (
            <ErrorMessage message={mensaje || "input invalido"} />
        )}
    </div>
    )
    
}

export default TextInput