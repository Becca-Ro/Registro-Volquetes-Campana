import React from "react";
import { useFormContext } from "react-hook-form";
import Titulos from "./Titulos";
import NumInput from "./NumInput";
import TextInput from "./TextInput";
import CalleInput from "./CallesInput";

const DatosDireccion = () => {
  const { formState: { errors } } = useFormContext();
  return (
    <div>
      <Titulos titulo="DIRECCIÓN" />
      <div className="grid grid-cols-1 gap-1 pl-2">
        <label className="text-white text-md">
          Si no posee altura especifique sus entrecalles
        </label>
        <CalleInput
          name="Calle"
          title="Calle"
          mensaje={errors.Calle?.message}
        />
        <CalleInput
          name="EntreCalle.Item1"
          title="Entre Calle"
          mensaje={errors.EntreCalle?.Item1.message}
        />
        <CalleInput
          name="EntreCalle.Item2"
          title="Entre Calle"
          mensaje={errors.EntreCalle?.Item2.message}
        />
        <NumInput
          name="Altura"
          title="Altura"
          mensaje={errors.Altura?.message}
          
        />
        <TextInput
          name="LoteCountry"
          title="Lotes/Country/Etc"
          mensaje={errors.LoteCountry?.message}
          />
      </div>
    </div>
  );
};
export default DatosDireccion;
