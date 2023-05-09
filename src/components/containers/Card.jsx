export default function Card( props ) {
    return (
        <div className="flex flex-col items-center py-12 opacity-80 hover:opacity-100">
            <img src={props.img} className="w-80 h-56 shadow-md shadow-licex-gray"></img>
            <div className="w-60 h-36 bg-licex-blue dark:bg-licexdark-steel shadow-md shadow-licex-gray grid place-items-center">
                <p className=" px-8 text-white dark:text-licexdark-lightblue text-xl text-center ">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}