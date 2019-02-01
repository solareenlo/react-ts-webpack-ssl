import * as React from "react";

export interface SampleProps { compiler: string; framework: string; library: string; }

export class Sample extends React.Component<SampleProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework} and {this.props.library}!</h1>;
    }
}

export default Sample;
