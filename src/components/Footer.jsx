import MaxWidthContainer from "./containers/maxwidthcontainer"
import LicexLogo from "@src/svg/LicexLogo";

export default function Footer( props ) {
    return (
        <div className="bg-licex-blue text-white
                    dark:bg-gradient-to-b 
                    dark:from-licexdark-darkblue dark:via-licexdark-darkblue  dark:to-licexdark-lightblue
                    dark:text-licexdark-steel
                    w-full h-full m-0 py-10 ">
            <MaxWidthContainer spacing="h-full" item={
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center items-center">
                    <div className="flex-none xl:pl-16 pt-12 h-full"> 
                        <div className="flex w-64 h-20 ">
                            <LicexLogo/>
                        </div>
                    </div>
                    <div className="text-sm lg:text-base grid grid-cols-2 gap-12 py-12 lg:my-0 lg:gap-2"> 
                        <div className="text-right lg:text-left">
                            <h1>Número de contacto: </h1>
                            <h1>RUC: </h1>
                            <h1>e-mail: </h1>
                            <h1>Dirección: </h1>
                        </div>
                        <div className="text-left">
                            <h1>(+51) XXXXXXXXX</h1>
                            <h1>XXXXXXXXXXX</h1>
                            <h1>XXXXX@XXXXX.XXX</h1>
                            <h1>XXXXXXXXXXXX</h1>
                        </div>
                    </div>
                </div>
            }/>
        </div>
    )
}

