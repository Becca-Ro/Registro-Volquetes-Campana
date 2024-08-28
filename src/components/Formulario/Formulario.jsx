import React from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { Schema } from "yup";
import BotonSubmit from "./BotonSubmit";
import schema from "./Schema";
import Fechas from "./Fechas.jsx";
import DatosChofer from "./DatosChofer";
import DatosVolquetes from "./DatosVolquetes";
import DatosSolicitante from "./DatosSolicitante";
import DatosDireccion from "./Direccion";
import MapaSeccion from "./MapaSeccion";
import toast from "react-hot-toast";

<Schema />;

const submitData = async (data) => {

  const response = await fetch(
    "http://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/Volquetes/Solicitud",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  console.log(response);
  if (response.status === 401) {
    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    throw new Error("Respuesta de la red no exitosa");
  }

  return response.json();
};

const now = dayjs();
const formattedDate = now.format("YYYY-MM-DD");

const VolquetesForm = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      EmpresaUsuario: "",
      EmpresaCodigo: "",
      DiaEntrega: formattedDate,
      DiaRetiro:formattedDate,
      NombreChofer: "",
      DNIChofer: "",
      PatenteCamion: "",
      NombreSolicitante: "",
      TipoVolqueteId: "",
      NumVolquete: "",
      DestinoFinal: "",
      Calle: "",
      Altura:"",
      EntreCalle: { Item1: null, Item2: null },
      LoteCountry: "",
      Coordenadas: { lat: null, lng: null },
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = methods;

  const [popupVisible, setPopupVisible] = useState(false);

  const mutation = useMutation({
    mutationFn: submitData,
    onSuccess: () => {
      toast.success("Formulario enviado");
      reset();
      setPopupVisible(false);
    },
    onError: (error) => {
      console.error("Error de registro:", error);
      toast.error("Credenciales Incorrectas");
    },
  });

  console.log(watch());

  const submitForm = (DataFinal) => {
    if (Object.keys(errors).length === 0) {
      const finalData = { ...watch(), ...DataFinal };
      mutation.mutate(finalData, {
        onSuccess: () => {
          methods.reset();
          setPopupVisible(false);
          toast.success("Formulario enviado"); 
        },
      });
    } else {
      toast.error("Formulario no válido");
    }
  };

  const onSubmit = () => {
    setPopupVisible(true);
  };

  return (
    <FormProvider {...methods}>
      <div className="fondo">
      <form
        onSubmit={handleSubmit(submitForm)}

        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:overscroll-none xl:overscroll-none xl:grid-cols-3 auto-rows-auto gap-1 pt-1 p-1 rounded bg-opacity-20 font-sans"
      >
        <div class="space-y-4">
          <Fechas />
        </div>
        <div class="space-y-4">
          <DatosChofer />
        </div>
        <div class="space-y-4">
          <DatosSolicitante />
        </div>
        <div class="space-y-4">
          <DatosVolquetes />
        </div>
        <div class="space-y-4">
          <DatosDireccion />
        </div>
        <div class="space-y-4">
          <MapaSeccion />
        </div>
        <div></div>
        <div className="justify-self-center space-y-4 p-3">
          <BotonSubmit
            watch={watch}
            submitForm={submitForm}
            setPopupVisible={setPopupVisible}
            popupVisible={popupVisible}
          />
        </div>
      </form>
      </div>
    </FormProvider>
  );
};

export default VolquetesForm;
