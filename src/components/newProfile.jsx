import React from "react";

class NewProfile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:5,    //We are Defining State Variables here.
            userInfo:"Siddhesh"
        }
        console.log("Constructor Rendering Finished.")
    } 
    async componentDidMount(){
            let git_profile = await fetch("https://api.github.com/users/SiddheshAR");
            let git_json = await git_profile.json();
            console.log(git_json);
            this.setState({
                userInfo:git_json
            })
    }
    componentDidUpdate(){
        console.log("Component is Updated.")
    }
    componentWillUnmount(){
        console.log("Component is getting Unmounted")
    }
    render(){
        const {count} = this.state;
        console.log("Component Rendering Finished.")
        return(
            <>
                <h2>Hello, New User. {this.props.name}</h2>
                <h2>Counter={count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:count+1
                    })
                }}>
                    Add me
                </button>
                <h3>Username: {this.state.userInfo.login}</h3>
                <h4>{this.state.userInfo.id}</h4>
                <img src={this.state.userInfo.avatar_url}></img>
            </>
        )
    }
}

export default NewProfile;