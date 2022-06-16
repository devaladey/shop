import { useEffect, useState } from "react";

function AlertBox({children}) {

    const [dismissAlert, setDismissAlert] = useState(10)

    useEffect(()=> {
        const interval = setInterval(()=> setDismissAlert(dismissAlert - 1), 1000)

        // if(interval == 0) setDismissAlert(0)

        return ()=> {
            clearInterval(interval);
        } 
    }, [dismissAlert])

    const alertBox = {
            position: "fixed",
            backgroundColor: "lightblue",
            color: "white",
            top: "16rem",
            right: "4rem",
            width: "20rem",
            padding: "1rem",
            borderLeft: "2px solid #ccc",
            fontSize: "1.6rem"
    };

    const alertLoadBar = {
            display: "inline-block",
            position: "absolute",
            backgroundColor: "black",
            top: "0",
            right: 0,
            width: "100%",
            height: "1.3px"
    };

    return ( 
        <>
            {
                dismissAlert > 0 ? (<div style={alertBox}><span style={alertLoadBar}></span>{children}</div>) : null
            }
        </>
     );
    
}

export default AlertBox;