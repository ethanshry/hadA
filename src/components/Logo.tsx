import * as React from "react";

import globals from "../globals";

export default class Logo extends React.Component<{}, {}> {

    private getLogoStyle(): React.CSSProperties {
        return {
            fontSize: globals.typeface.logo.fontSize,
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.accent1,
            position: 'absolute',
            right: 15
        };
    }

    render() {
        return <div style={this.getLogoStyle()}>hadA</div>;
    }
}