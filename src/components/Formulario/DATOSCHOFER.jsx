import React from "react";
import { useFormContext } from "react-hook-form";
import Titulos from "./Titulos";
import NumInput from "./NumInput";
import TextInput from "./TextInput";

const DatosChofer = () => {
  const { formState: { errors } } = useFormContext();
  return (
    <div>
    <Titulos titulo="DATOS DEL CHOFER" />
    <div className="grid grid-cols-1 gap-1 pl-2">
      <TextInput
        name="NombreChofer"
        title="Nombre del Chofer"
        mensaje={errors.NombreChofer?.message}
      />
      <NumInput
        name="DNIChofer"
        title="DNI del Chofer"
        mensaje={errors.DNIChofer?.message}
      />
      <TextInput
        name="PatenteCamion"
        title="Patente del Chofer"
        mensaje={errors.PatenteCamion?.message}
      />
    </div>
  </div>
  )}

  export default DatosChofer