import React from "react";
import { useFormContext } from "react-hook-form";
import Titulos from "./Titulos";
import DateInput from "./DateInput";

const Fechas = () => {
  const { control, formState: { errors } } = useFormContext();
  return (
    <div>
        <Titulos titulo="FECHAS" />
        <DateInput
        name="DiaEntrega"
        title="Fecha de Entrega"
        mensaje={errors.DiaEntrega?.message}
      />
      <DateInput
        name="DiaRetiro"
        title="Fecha de Retiro"
        mensaje={errors.DiaRetiro?.message}
      /> 
    </div>
  );
};
export default Fechas;
