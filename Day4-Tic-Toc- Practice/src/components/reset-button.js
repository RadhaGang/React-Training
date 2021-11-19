

const ResetButton = ({visible,caption,onReset})=>{

    if(visible)
        return <button onClick={onReset}  className="reset-button">{caption||"Reset"}</button>;
    else
        return null; //no UI to display
}


export default ResetButton;