export default function MaxWidthContainer( props ) {
    let divClassName = "flex w-full items-center justify-center "

    if (props.bg!= null || props.bg !="" || props.bg !="undefined" ) {
        divClassName = divClassName + props.bg + " "
    }
    if (props.spacing!= null || props.spacing !="" || props.spacing!="undefined" ) {
        divClassName = divClassName + props.spacing + " "
    }

    return (
        <div className={divClassName}>
            <div className="w-full max-w-6xl">
                {props.item}
            </div>
        </div>
    )
}