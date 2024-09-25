
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
import toast from "react-hot-toast";

const BotonSubmit = ({ watch, submitForm, setPopupVisible, popupVisible }) => {
  const {
    trigger,
    formState: { errors },
  } = useFormContext();
  const handleClick = async () => {
    const isValid = await trigger([
      "DiaEntrega",
      "DiaRetiro",
      "NombreChofer",
      "DNIChofer",
      "PatenteCamion",
      "NombreSolicitante",
      "TipoVolqueteId",
      "NumVolquete",
      "DestinoFinal",
      "Calle",
      "Coordenadas.lat",
      "Coordenadas.lng",
    ]);
    console.log("Validation result:", isValid);

    if (!isValid) {
      toast.error("Formulario incompleto. Complete los campos requeridos.");
      setPopupVisible(false);
    } else {
      setPopupVisible(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="rounded-xl hover:bg-violeta bg-gray-400 text-xl px-6 py-2"
      >
        SIGUIENTE
      </button>
        <AlertDialog open={popupVisible} onOpenChange={setPopupVisible}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl">
                Ingrese Datos de Usuario
              </AlertDialogTitle>
              <AlertDialogDescription>
                <div className="grid grid-cols-1 p-1 w-[480px] text-black text-sm">
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
                  const dataFinal = {
                    EmpresaUsuario: watch("EmpresaUsuario"),
                    EmpresaCodigo: watch("EmpresaCodigo"),
                  };
                  submitForm(dataFinal);
                }}
              >
                Terminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
         </AlertDialog>
    </>
  );
};
export default BotonSubmit;
