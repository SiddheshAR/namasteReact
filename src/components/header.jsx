
import  {useState,useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/hooks/userContext.js"
export const HdFunct =()=>{

    const {user} = useContext(UserContext);

    const [log_status,log_update]=useState(true);
    const [signup, setSignup] = useState("true");
    return (
        <>
        <div id="navbar-pt" className="flex w-full justify-between px-20">
            <div className="w-1/6 ">
                <img className="h-[120px] w-auto bg-cover" id="logo1" src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="logo"></img>
            </div>
            {/* Nav Items */}
            <div className="w-4/6 " id="nav-items" >
                <ul className="flex justify-end flex-row space-x-8 	justify-items-stretch;">
                    <Link to="/">
                        <li> <a href="/">Home</a></li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/zepto">
                        <li>Zepto</li>
                    </Link>
                    <li>Service</li>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <>
                        <li>{user.name}</li>
                    </>
                    <button
                    id="sign-up" 
                    placeholder="Okk"
                    onClick={()=>{
                        if(signup==="true"){
                            setSignup("false")
                        }else{
                            setSignup("true")
                        }
                    }
                    }
                    >{signup} </button>
                    {(log_status)? (<button onClick={()=>log_update(false)}>Login</button>):(<button onClick={()=>log_update(true)}>Logout</button>)}
                </ul>
            </div>
            {/* Nav Items End */}
            </div>
        </>
    )
}
