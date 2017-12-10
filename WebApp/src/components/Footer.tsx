import * as React from "react";

import globals from "../globals";

export default class Footer extends React.Component<{}, {}> {

    private getContainerStyle(): React.CSSProperties {
        return {
            fontSize: globals.typeface.post.fontSizeHeader,
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.gray2,
            backgroundColor: globals.colors.dark,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 40,
            width: '100vw'
        };
    }

    render() {
        return (
            <div style={this.getContainerStyle()}>
                <div>About</div>
                <div>You</div>
                <div>Development</div>
                <div>Github</div>
            </div>
        );
    }
}