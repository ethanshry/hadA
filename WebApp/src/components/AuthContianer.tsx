import * as React from "react";
import globals from '../globals';

export interface AuthContainerProps {
    authorizeUser(user: string): void;
}

interface AuthContainerState {
    usernameIsValid: boolean;
}

export default class AuthContainer extends React.Component<AuthContainerProps, AuthContainerState> {

    constructor(props: AuthContainerProps) {
        super(props);
        this.state = {
            usernameIsValid: false
        };
    }

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

    private getInputWrapperStyle():React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'column'
        };
    }

    private getUsernameInputStatusStyle():React.CSSProperties {
        if (!this.state.usernameIsValid) {
            return {
                marginTop: 3,
                color: globals.colors.accent1,
                textAlign: 'center'
            };
        } else {
            return {
                marginTop: 3,
                color: "white", //should match background color
                textAlign: 'center'
            };
        }
    }

    private testAuthorization(): void {
        let username: string = (document.getElementById("usernameInput") as HTMLInputElement).value;
        let password: string = (document.getElementById("passwordInput") as HTMLInputElement).value;
        let authFlag: boolean = true;
        //TODO: Call auth API
        if (authFlag) {
            this.props.authorizeUser(username);
        }
    }

    private createNewUser(): void {
        let username: string = (document.getElementById("usernameInput") as HTMLInputElement).value;
        let password: string = (document.getElementById("passwordInput") as HTMLInputElement).value;
        let authFlag: boolean = true;
        //TODO: Call auth API
        if (authFlag) {
            this.props.authorizeUser(username);
        }
    }

    private testUsernameValidity(): void {
        let username: string = (document.getElementById("usernameInput") as HTMLInputElement).value;
        //TODO: Actually validate username
        console.log(username);
        if (username == "test") {
            console.log("valid");
            this.setState({
                usernameIsValid: true
            });
        } else {
            console.log("invalid");
            this.setState({
                usernameIsValid: false
            });
        }
    }

    render() {

        return (
        <div style={this.getContainerStyle()}>
            <div style={this.getHeaderStyle()}> Login </div>
            <div style={this.getInputWrapperStyle()}>
                <input style={this.getInputStyle()} id="usernameInput" type="text" placeholder="username" onChange={this.testUsernameValidity.bind(this)} />
                <div style={this.getUsernameInputStatusStyle()}>username is not a pre-existing user</div>
            </div>
            <input style={this.getInputStyle()} id="passwordInput" type="text" placeholder="password" />
            { this.state.usernameIsValid &&
            <div style={this.getButtonStyle()} onClick={this.testAuthorization.bind(this)}> Log In </div>
            }
            { !this.state.usernameIsValid &&
            <div style={this.getButtonStyle()} onClick={this.createNewUser.bind(this)}> Create Account </div>
            }
        </div>
        );
    }
}