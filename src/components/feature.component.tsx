import * as React from "react";

interface IProps {
    example: string;
}

class Feature extends React.Component<IProps> {
    render() {
        return(
            <div>Feature component</div>
        );
    }
}

export default Feature;
