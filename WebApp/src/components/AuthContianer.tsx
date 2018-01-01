import * as React from "react";
import globals from '../globals';

export interface AuthContainerProps {
    authorizeUser(user: string): void;
}

export default class AuthContainer extends React.Component<AuthContainerProps, null> {

    private getContainerStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            position: 'absolute',
            top: '30vh',
            left: '30vw',
            height: '40vh',
            width: '40vw',
            padding: 20,
            boxShadow: '0px 0px 50px #888888',
            fontFamily: globals.typeface.body.fontFamily
        };
    }

    private getHeaderStyle(): React.CSSProperties {
        return {
            fontSize: '1.7em',
            marginLeft: '10%',
            marginRight: '10%',
            padding: 7,
            textAlign: 'center',
            color: globals.colors.gray1,
            borderBottom: '1px solid ' + globals.colors.gray1
        };
    }

    private getInputStyle(): React.CSSProperties {
        return {
            fontSize: '1.2em',
            marginLeft: '10%',
            marginRight: '10%',
            color: globals.colors.gray1,
            padding: 7
        };
    }

    private getButtonStyle(): React.CSSProperties {
        return {
            textAlign: 'center',
            fontSize: '2em',
            marginLeft: '20%',
            marginRight: '20%',
            padding: 10,
            backgroundColor: globals.colors.accent1,
            color: globals.colors.light,
            cursor: 'pointer'
        };
    }

    private testAuthorization(): void {
        let username: string = document.getElementById("usernameInput").textContent;
        let password: string = document.getElementById("passwordInput").textContent;
        let authFlag: boolean = true;
        //TODO: Call auth API
        if (authFlag) {
            this.props.authorizeUser(username);
        }
    }

    render() {

        return (
        <div style={this.getContainerStyle()}>
            <div style={this.getHeaderStyle()}> Login </div>
            <input style={this.getInputStyle()} id="usernameInput" type="text" placeholder="username" />
            <input style={this.getInputStyle()} id="passwordInput" type="text" placeholder="password" />
            <div style={this.getButtonStyle()} onClick={this.testAuthorization.bind(this)}> Submit </div>
        </div>
        );
    }
}