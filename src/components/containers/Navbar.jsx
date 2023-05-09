const items = ["Contáctanos", "Socios", "Servicios", "¿Quiénes somos?", "Inicio" ] ;

import LicexLogo from "@src/svg/LicexLogo";
import ThreeBarsMenu from "@src/svg/ThreeBarsMenu";

export default function Navbar( props ) {
    return(
        <div className="flex justify-between h-20 px-4 md:px-8 text-licex-blue dark:text-licexdark-steel w-full bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md">
            <div className="flex-none xl:pl-16 h-full"> 
                <div className="flex w-64 h-20 ">
                    <LicexLogo/>
                </div>
            </div>
            <ul className="hidden xl:flex xl:flex-1 flex-col-reverse xl:flex-row-reverse xl:items-center">
            {
                items.map( (item, key) => (
                    <li className="xl:pl-16 text-xl" key={key}>
                        {item}
                    </li>
                ) )
            }
            </ul>
            <div className="flex xl:hidden items-center flex-none h-full">
                <button className="flex content-center ">
                    <ThreeBarsMenu/>
                </button>
            </div>
        
        </div>

    )
}