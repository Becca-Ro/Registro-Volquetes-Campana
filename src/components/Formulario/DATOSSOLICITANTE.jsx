import React from "react";
import { useFormContext } from "react-hook-form";
import Titulos from "./Titulos";
import TextInput from "./TextInput";

const DatosSolicitante = () => {
  const { formState: { errors } } = useFormContext();
  return (
    <div>
      <Titulos titulo="DATOS DEL SOLICITANTE" />
      <TextInput
        name="NombreSolicitante"
        title="Nombre y Apellido"
        mensaje={errors.NombreSolicitante?.message}
      />
    </div>
  );
};
export default DatosSolicitante;
