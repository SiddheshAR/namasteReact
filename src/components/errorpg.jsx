import { useRouteError } from "react-router-dom";

const ErrorPage=() => {
    const err = useRouteError();
    console.log(err);
    let errorMessage=err.status;
    let errorStatus =err.statusText;
    return(
        <>
             <h2>
                Oops something went Wrong.
             </h2>   
             <p>{errorMessage}:{errorStatus}</p>
             <h3>Try again</h3>
        </>
    )
} 
export default ErrorPage; 