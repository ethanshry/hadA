import * as React from "react";

import globals from "../globals";

export interface LogoProps {
    username: String;
}

export default class Logo extends React.Component<LogoProps, {}> {

    private getLogoStyle(): React.CSSProperties {
        return {
            fontSize: globals.typeface.logo.fontSize,
            fontFamily: globals.typeface.body.fontFamily,
            color: globals.colors.gray1,
            position: 'absolute',
            right: 15
        };
    }

    private getAppBrandStyle(): React.CSSProperties {
        return {
            color: globals.colors.accent1,
            fontFamily: globals.typeface.logo.fontFamily
        };
    }

    render() {
        return ( 
            <div style={this.getLogoStyle()}>
                {this.props.username}
                <span style={this.getAppBrandStyle()}>hadA</span>
            </div>
        );
    }
}