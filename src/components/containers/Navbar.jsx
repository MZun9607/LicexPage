import React, {useState} from "react";


import LicexLogo from "@src/svg/LicexLogo";
import ThreeBarsMenu from "@src/svg/ThreeBarsMenu";

const items = [["Socios", "Socios"], ["Servicios", "Servicios"], ["Quiénes Somos", "QuienesSomos"], ["Inicio", "Main"] ] ;


export default function Navbar( props ) {
    const [isOpen, setIsOpen] = useState(false);
    
    function menuOpenClose(){
        setIsOpen(!isOpen);
    }

    return(
        <div className="text-licex-blue dark:text-licexdark-steel  bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md">
            <div className="flex justify-between h-20 px-4 md:px-8  w-full">
                <div className="flex-none xl:pl-16 h-full"> 
                    <div className="flex w-64 h-20 ">
                        <LicexLogo/>
                    </div>
                </div>
                <div className="flex lg:hidden items-center flex-none h-full">
                    <button onClick={menuOpenClose} className="flex content-center">
                        <ThreeBarsMenu/>
                    </button>
                </div>
                <ul className="hidden h-full lg:flex lg:flex-1 flex-col-reverse lg:flex-row-reverse lg:items-center">
                    {
                        items.map( (item, key) => (
                            <a key={key} className="h-full flex items-center  hover:text-white hover:bg-licex-blue hover:dark:text-licexdark-darkblue  hover:bg-opacity-60 hover:dark:bg-white hover:dark:bg-opacity-60" href={"#"+item[1]}>
                                <li className="lg:px-8 text-xl" > 
                                    {item[0]}
                                </li>   
                            </a>
                        ) )
                    }
                </ul>
            </div>
            <div id="navbar-responsive" className={"w-screen" + (isOpen ? " flex" : " hidden")}>
                <div className="flex flex-col-reverse items-center lg:hidden">
                    {
                        items.map( (item, key) => (
                            <a className="py-4 w-screen text-xl hover:text-white hover:bg-licex-blue hover:dark:text-licexdark-darkblue hover:bg-opacity-60 hover:dark:bg-white hover:dark:bg-opacity-60" key={key} href={"#"+item[1]}>
                                <button onClick={menuOpenClose} className="text-center h-full w-full">
                                    {item[0]}
                                </button>
                            </a>
                        ) )
                    }
                </div>
            </div>
        </div> 
    )
}