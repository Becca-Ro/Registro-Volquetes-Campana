import "./HomePage.css";
import VolquetesForm from "../Formulario/Formulario";

function HomePage() {
  return (
    <div className="grid grid-cols-1 auto-rows-min">
      <div className="grid grid-rows-2 grid-cols-1 h-[100px]">
        <div className="bg-violeta text-center flex flex-row items-center justify-between text-white font-semibold text-2xl p-2 shadow-md rounded-md tracking-widest w-full">
          <div>
            <img src="src/assets/logo.png" alt="logo" className="w-32" />
          </div>
          <div>
            MUNICIPALIDAD DE CAMPANA
          </div>
        </div>
        <div className="uppercase font-semibold text-xl pt-3 pl-3">
          Formulario de Registro Volquetes
        </div>
      </div>
      <div>
        <VolquetesForm />
      </div>
      <div className="bg-violeta h-5"></div>
    </div>
  );
}

export default HomePage;
