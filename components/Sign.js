


const Sign = (props) => {
    return (
        <>
            {props.tolog? <span className="reglog" onClick={props.status}>Create</span>: <span className="reglog" onClick={props.status}>Login</span>}
        </>
    );
}
 
export default Sign;