import React from "react";
import {Link,Outlet} from "react-router-dom"
// let ContactPage = ()=>{
//     return (
//         <>
//             <h2>THis is the Contact Page.</h2>
//         </>
//     )
// }

class ContactPage extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent-1 Constructor")
    }
    componentDidMount(){
        console.log("Parent-1 Mount")
    }
    render(){
        console.log("Parent-1 Render")
        return(
            <>
                 <h2>THis is the Contact Page made using Classes.</h2>
                 <Link to="/contact/sales">
                        <h2>Sales Page</h2>
                 </Link>
                 <Link to="/contact/support">
                        <h2>Support Page</h2>
                 </Link>
                 <Outlet />
            </>
        )
    }
}


export default ContactPage;