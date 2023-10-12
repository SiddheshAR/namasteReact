
import  {useState} from "react";

export const HdFunct =()=>{
    const [log_status,log_update]=useState(true);
    const [signup, setSignup] = useState("true");
    return (
        <>
        <div id="navbar-pt">
            <div>
                <img id="logo1"     src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="logo"></img>
            </div>
            {/* Nav Items */}
            <div id="nav-items">
                <ul>
                    <li> <a href="/">Home</a></li>
                    <li style={{
                        backgroundColor:"greenyellow",
                        fontSize:"20px"
                    }}>About</li>
                    <li>Service</li>
                    <li>Contact</li>
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
