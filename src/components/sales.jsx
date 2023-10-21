import React from "react";

class SalesComp extends React.Component{
    constructor(props){
        super(props)
        this.state()
        console.log("Child-2 Constructor")
    }
    componentDidMount(){
        console.log("Child-2 Mount")
    }
    render(){
        console.log("Child-2 Render")
        return(
        <>
            <h2>This is the Sales Page.</h2>
            <h3>{this.props.city}</h3>
        </>
        )
    }
}

export default SalesComp