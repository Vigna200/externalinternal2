import { Component } from "react";
export default class LifecycleDemo extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            shouldunmount:false,
        }
        console.log('constructor called');
    }
    componentDidMount(){
        console.log('component Mounted');
    }
    componentDidUpdate(prevProps,prevState){
        console.log(`previous state: ${prevState.count} current count: ${this.state.count}`);
        console.log('component Updated');
    }
    componentWillUnmount(){
        console.log('component unmounted');
        alert('componet is being unmounted');
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    handleunmount=()=>{
        this.setState({shouldunmount:true});
    }
    render(){
        console.log('component rendered');
        if(this.state.shouldunmount){
            return null;
        }
    return(
            <div>
                <h1>Lifecycle Demo</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.handleunmount}>Unmount</button>
            </div>
        )
    }
}