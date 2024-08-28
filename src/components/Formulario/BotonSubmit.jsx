import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import TextInput from "./TextInput";
import { useFormContext } from "react-hook-form";

const BotonSubmit = ({ watch, submitForm, setPopupVisible, popupVisible }) => {
  const {
    formState: { errors, isValid },
    trigger,
  } = useFormContext();
  
  useEffect(()=> {trigger();}, [trigger]);
  
  const handleButtonClick = async () => {
    const isFormValid = await trigger();
    console.log(isFormValid);
    if (isFormValid) {
      setPopupVisible(true);
    } else {
      setPopupVisible(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleButtonClick}
        className="rounded-xl hover:bg-white bg-gray-400 text-xl px-6 py-2"
      >
        SIGUIENTE
      </button>

      {popupVisible && (
        <AlertDialog open={popupVisible} onOpenChange={setPopupVisible}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl">
                Ingrese Datos de Usuario
              </AlertDialogTitle>
              <AlertDialogDescription>
                <div className="grid grid-cols-1 p-1 w-[460px]">
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
      )}
    </>
  );
};

export default BotonSubmit;
