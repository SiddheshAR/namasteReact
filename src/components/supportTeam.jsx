import React from "react";

class SupportComp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            Region:"Mumbai",
            pincode:90
        }
        console.log("Child-1 Constructor")
    }
    componentDidMount(){
       this.timer= setInterval(()=>{console.log("Ok")},1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        console.log("Child-1 Render")
        return(
        <>
            <h2>This is the Support Page.</h2>
            <h3>{this.props.country}</h3>
            <h3>{this.state.pincode}</h3>
            <h3>{this.state.Region}</h3>
        </>
        )
    }
}

export default SupportComp