import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import TextInput from "./TextInput";
import { useFormContext } from "react-hook-form";

const BotonSubmit = ({ watch, submitForm, setPopupVisible }) => {
  const { register, formState: { errors }, control} = useFormContext();
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-white rounded border-violet-950 hover:bg-violet-500 text-xl font-semibold p-2 ">
        Siguente
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Ingrese Datos de Usuario</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid grid-cols-1 gap-1 p-1 w-[460px]">
              <TextInput 
                name="EmpresaUsuario"
                title="Usuario"
                mensaje={errors.EmpresaUsuario?.message}
              />
              <TextInput
                name="EmpresaCodigo"
                title="Código"
                mensaje={errors.EmpresaCodigo?.message}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setPopupVisible(false)}>
            Volver
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              const DataFinal = {
                EmpresaUsuario: watch("EmpresaUsuario"),
                EmpresaCodigo: watch("EmpresaCodigo"),
              };
              submitForm(DataFinal);
            }}
          >
            Terminar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BotonSubmit