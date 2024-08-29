import React from "react";
import * as yup from "yup";

const schema = yup.object().shape({
    EmpresaUsuario: yup.string().required("Usuario requerido"),
    EmpresaCodigo: yup.string().required("Código requerido"),
    DiaEntrega: yup.date().required("Fecha de entrega requerida"),
    DiaRetiro: yup.date().required("Fecha de retiro requerida"),
    NombreChofer: yup.string().required("Nombre requerido"),
    DNIChofer: yup.number().required("DNI requerido"),
    PatenteCamion: yup.string().required("Patente requerida"),
    NombreSolicitante: yup.string().required("Solicitante requerido"),
    TipoVolqueteId: yup.string().required("Tipo requerido"),
    NumVolquete: yup.number().required("Número de volquete requerido"),
    DestinoFinal: yup.string().required("Destino final requerido"),
    Calle: yup.string().required("Direccion requerida"),
    Altura: yup.string().nullable(), 
    EntreCalle: yup.object().shape({
      Item1: yup.string().nullable(),
      Item2: yup.string().nullable(),
    }),
    LoteCountry: yup.string(),
    Coordenadas: yup.object().shape({
      lat: yup.number().required("Coordenadas requeridas"),
      lng: yup.number().required("Coordenadas requeridas"),
    }),
  });

export default schema