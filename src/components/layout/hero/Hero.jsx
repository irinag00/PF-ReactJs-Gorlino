import { Link } from "react-router-dom";
import "../hero/Hero.css";
const Hero = () => {
  return (
    <section className="hero shadow-md">
      <div className="hero-content container">
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">Obssesion</h2>
            <h4 className="mb-6 text-xl font-semibold max-w-[800px]">
              Somos el local mayorista y minorista más grande del país, y
              queremos seguir creciendo para ofrecerles siempre LO MEJOR.
            </h4>
            <h4 className="mb-6">
              ¡Lo último, lo más lindo y el mejor precio!
            </h4>
            <Link to="/">
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Conoce todos nuestros productos
              </button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
