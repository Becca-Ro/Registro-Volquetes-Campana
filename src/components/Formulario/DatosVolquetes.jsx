import React from "react";
import { useFormContext } from "react-hook-form";
import Titulos from "./Titulos";
import NumInput from "./NumInput";
import TextInput from "./TextInput";
import TipoInput from "./TipoInput";

const DatosVolquetes = () => {
  const { formState: { errors } } = useFormContext();
  return (
    <div>
      <Titulos titulo="DATOS DEL VOLQUETE" />
      <div className="grid grid-cols-1 gap-1 pl-2">
        <TipoInput
          name="TipoVolqueteId"
          title="Tipo de Volquete"
          mensaje={errors.TipoVolqueteId?.message}
        />
        <NumInput
          name="NumVolquete"
          title="Número de Volquete"
          mensaje={errors.NumVolquete?.message}
        />
        <TextInput
          name="DestinoFinal"
          title="Destino Final del Material"
          mensaje={errors.DestinoFinal?.message}
        />
      </div>
    </div>
  );
};
export default DatosVolquetes;
