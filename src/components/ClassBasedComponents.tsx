import { Component, PropsWithChildren } from "react";

export interface Props {
    text : string,
    children: React.ReactNode
}

export interface State {
    course : string,
    counter: number
}

class ClassBasedComponent extends Component<PropsWithChildren<{text : string}>> {
    state : State = {
        course: "React Course",
        counter : 1
    }

    componentDidMount(): void {
        // this.setState({ course: "Vue"})
        setInterval(() => {
            this.setState((prevState : State) => {
                return {
                    course : "Vue Course",
                    counter : prevState.counter + 1
                }
            })
        }, 2000)
        
    }
    render(){
        return (
            <div>
                <p>Class Based Component</p>
                <p>{this.props.children}</p>
                <p>We are studying {this.state.course} : {this.state.counter}</p>
            </div>
        )
    }
}

export default ClassBasedComponent;