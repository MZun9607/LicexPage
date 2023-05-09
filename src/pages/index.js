
import MaxWidthContainer from "@src/components/containers/maxwidthcontainer"
import Navbar from "@src/components/containers/Navbar"
import Hero from "@src/components/containers/Hero"
import Card from "@src/components/containers/Card"
import Footer from "@src/components/Footer"


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between
                   bg-white dark:bg-licexdark-darkblue text-licex-gray dark:text-licexdark-steel font-Poppins">
      <header className="w-full sticky top-0 z-50">
        <div className="relative">
          <Navbar/>
        </div> 
      </header>
      <div className="w-full min-h-min 
                      bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
                      from-licexlight-lightblue via-white  to-white 
                      dark:from-licexdark-lightblue dark:via-licexdark-darkblue  dark:to-licexdark-darkblue
                      m-0">
        <Hero/>
      </div>
      <div className="bg-licexdark-steel dark:bg-licexdark-lightblue 
                      w-full h-full m-0 py-20">
        <MaxWidthContainer item={
        <>
          <h1 className="text-center lg:text-left w-full px-16 text-3xl">
            ¿Quiénes somos?
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-min w-full place-items-center px-8">
            <div className="max-w-xl">
              <img src="https://upap.edu.py/wp-content/uploads/2021/06/Comercio-Exterior.png"></img>
            </div> 
            
            <div className="lg:mx-0 text-center lg:text-left bg-licex-blue dark:bg-licexdark-steel shadow-md shadow-licex-gray grid place-items-center">
                <p className="py-8 px-8 text-white dark:text-licexdark-lightblue text-xl  ">
                Somos una empresa de comercio exterior 
                con amplia experiencia en el mercado global.
                </p>
                <p className="py-8 px-8 text-white dark:text-licexdark-lightblue text-xl ">
                Nuestra misión es facilitar el comercio 
                internacional para nuestros clientes, brindando 
                soluciones integrales y personalizadas que 
                les permitan expandir sus negocios a nivel global
                </p>
            </div>
          </div>
        </>
        }/>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
                      from-licexlight-lightblue via-white  to-white 
                      dark:from-licexdark-lightblue dark:via-licexdark-darkblue  dark:to-licexdark-darkblue
                    w-full h-full m-0 py-20 ">
        <MaxWidthContainer item={
          <>
            <h1 className="text-center w-full px-16 text-3xl">
              Servicios
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 h-min w-full items-center"> 
              <Card img="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2019/02/iStock-857794116-600x400.jpg" desc="Manejo de documentación"/>
              <Card img="https://www.comexperu.org.pe/upload/images/sem-1046---editorial-091020-033721.jpg" desc="Gestión de cargas"/>
              <Card img="https://apam-peru.com/web/wp-content/uploads/2017/12/aduanas-peru.jpg" desc="Distribución de cargas"/>
            </div>
          </>
        }/>
      </div>
      <div className="bg-licexdark-steel dark:bg-licexdark-lightblue w-full h-full m-0 py-20">
        <MaxWidthContainer item={
          <>
            <h1 className="text-center lg:text-right w-full px-16 text-3xl">
              Socios
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-auto place-items-center px-8 py-20">
              <div className="w-80 h-80 text-center lg:text-left bg-licex-blue dark:bg-licexdark-steel shadow-md shadow-licex-gray grid place-items-center">
                <img src="https://american-tasaciones.com.pe/wp-content/uploads/2019/06/73-VILLAS-OQUENDO-1.png"></img>
              </div>
              <div className="w-80 h-80 text-center lg:text-left bg-licex-blue dark:bg-licexdark-steel shadow-md shadow-licex-gray grid place-items-center">
                <img src="https://american-tasaciones.com.pe/wp-content/uploads/2019/06/73-VILLAS-OQUENDO-1.png"></img>
              </div>
            </div>
          </>
        }/>
      </div>
      <footer className="w-full h-80">
        <Footer/>
      </footer>
    </main>
  )
}
