import * as React from "react";
let CreateIcon = require("react-icons/lib/md/create");
let FinishedIcon = require("react-icons/lib/md/check-circle");

import globals from "../globals";

export interface iDraftPostState {
    isHover: boolean,
    isActive: boolean
}

export default class DraftPost extends React.Component<{}, iDraftPostState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isHover: false,
            isActive: false
        };
    }

    private getIconStyle(): React.CSSProperties {
        if (this.state.isHover) {
            return {
                color: "#5D5DE5",
                border: '1px solid #AAAAAA',
                transition: '.5s',
                float: 'left'
            };
        } else {
            return {
                color: "#A1A1A1",
                border: '0px',
                transition: '.5s',
                float: 'left'
            };
        }
        
    }

    private getContainerStyle(): React.CSSProperties {
        if (this.state.isActive) {
            return {
                color: "#A1A1A1",
                border: '1px solid ' + globals.colors.dark,
                transition: '1.5s',

                position: 'absolute',
                width: '50vw',
                padding: '15px'
            };
        } else {
            return {
                
                transition: '1.5s'
            };
        }
    }

    private getCenteredContentStyle(): React.CSSProperties {
        return {
            margin: '10px auto',
        }
    }

    private getTypeDropdownStyle(): React.CSSProperties {
        return {
            width: "calc(100% - 6px)",
            margin: 5,
            padding: 5
        }
    }

    private getPostBodyStyle(): React.CSSProperties {
        return {
            width: "calc(100% - 20px)",
            margin: 5,
            padding: 5
        }
    }

    private getUsernameInputStyle(): React.CSSProperties {
        return {
            width: "calc(100% - 20px)",
            margin: 5,
            padding: 5
        }
    }

    private getPostSubmitButtonStyle(): React.CSSProperties {
        return {
            padding: 10,
            minWidth: '10vw',
            maxWidth: '50%',
            float: 'right',
            textAlign: 'center',
            backgroundColor: globals.colors.accent1,
            color: globals.colors.light
        }
    }

    private toggleHover = () => {
        this.setState({
            isHover: !this.state.isHover
        });
    }

    private toggleDraftModeActive = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        return (
            <div style={this.getContainerStyle()}>
                {//<FontIcon className="material-icons" onMouseOver={this.toggleHover} onMouseOut={this.toggleHover} style={this.getIconStyle()}>create</FontIcon>
                }
                <div onClick={this.toggleDraftModeActive} onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}> <CreateIcon fontSize={24} color={globals.colors.gray1} /> </div>
                {this.state.isActive &&
                <div>
                    <div style={this.getCenteredContentStyle()}>
                        <input type='text' placeholder='username' style={this.getUsernameInputStyle()} id='usernameInput'/>
                        <select style={this.getTypeDropdownStyle()} id="postCategory">
                            <option value="" disabled selected>Post Category</option>
                            <option value="idea">Idea</option>
                            <option value="thought">Thought</option>
                            <option value="concern">Concern</option>
                            <option value="awMoment">Aww Moment</option>
                        </select>
                        <textarea placeholder="post content" id="postBody" style={this.getPostBodyStyle()}/>
                    </div>
                    <div style={this.getPostSubmitButtonStyle()}><FinishedIcon fontSize={24} color={globals.colors.light} /></div>
                </div>
                }
            </div>
        );
    }
}