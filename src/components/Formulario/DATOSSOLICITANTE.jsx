import React from "react";
import { useFormContext } from "react-hook-form";
import Titulos from "./Titulos";
import TextInput from "./TextInput";

const DatosSolicitante = () => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Titulos titulo="DATOS DEL SOLICITANTE" />
      <div className="grid grid-cols-1 gap-1 pl-2">
        <TextInput
          name="NombreSolicitante"
          title="Nombre y Apellido"
          mensaje={errors.NombreSolicitante?.message}
        />
      </div>
    </div>
  );
};
export default DatosSolicitante;
