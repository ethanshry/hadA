import * as React from "react";
let CreateIcon = require("react-icons/lib/md/create");
let FinishedIcon = require("react-icons/lib/md/check-circle");

import globals from "../globals";

export interface DraftPostProps {
    username: String;
}

export interface iDraftPostState {
    isActive: boolean
}

export default class DraftPost extends React.Component<DraftPostProps, iDraftPostState> {

    constructor(props: DraftPostProps) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    private getIconStyle(): React.CSSProperties {
        if (this.state.isActive) {
            return {
                zIndex: 5,
                color: globals.colors.accent1,
                position: 'relative',
                borderTopLeftRadius: 7,
                borderTopRightRadius: 7,
                transition: '.5s',
                float: 'left',
                padding: "7px 15px 7px 15px"
            };
        } else {
            return {
                // TODO: remove border when not active
                zIndex: 5,
                color: globals.colors.gray1,
                position: 'relative',
                borderTopLeftRadius: 7,
                borderTopRightRadius: 7,
                transition: '.5s',
                float: 'left',
                padding: "7px 15px 7px 15px"
            };
        }
    }

    private getContainerStyle(): React.CSSProperties {
        if (this.state.isActive) {
            return {
                color: globals.colors.gray1,
                boxShadow: '0px 0px 50px #888888',
                transition: '1.5s',
                backgroundColor: globals.colors.light,
                position: 'fixed',
                width: '50vw',
                zIndex: 1,
                // account for draft button
                padding: "56px 15px 15px 15px",
                fontFamily: globals.typeface.body.fontFamily
            };
        } else {
            return {
                transition: '1.5s',
                fontFamily: globals.typeface.body.fontFamily
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
            padding: 5,
            fontFamily: globals.typeface.logo.fontFamily
        }
    }

    private getPostBodyStyle(): React.CSSProperties {
        return {
            width: "calc(100% - 20px)",
            margin: 5,
            padding: 5,
            fontFamily: globals.typeface.logo.fontFamily,
            
        }
    }

    private getTitleStyle(): React.CSSProperties {
        return {
            width: "calc(100% - 20px)",
            margin: 5,
            padding: 5,
            fontFamily: globals.typeface.logo.fontFamily
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
            color: globals.colors.light,
            cursor: 'pointer'
        }
    }

    private toggleDraftModeActive = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        return (
            <div>
                {//<FontIcon className="material-icons" onMouseOver={this.toggleHover} onMouseOut={this.toggleHover} style={this.getIconStyle()}>create</FontIcon>
                }
                <div onClick={this.toggleDraftModeActive} style={this.getIconStyle()}> <CreateIcon fontSize={40} /> </div>
                {this.state.isActive &&
                <div style={this.getContainerStyle()}>
                    {//<div onClick={this.toggleDraftModeActive} onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}> <CreateIcon fontSize={40} color={globals.colors.gray1} /> </div>
                    }
                    <div style={this.getCenteredContentStyle()}>
                        <div style={this.getTitleStyle()}>{this.props.username}'s next post:</div>
                        <select style={this.getTypeDropdownStyle()} id="postCategory">
                            <option value="" disabled selected>Post Category</option>
                            <option value="idea">Idea</option>
                            <option value="thought">Thought</option>
                            <option value="concern">Concern</option>
                            <option value="awMoment">Aww Moment</option>
                        </select>
                        <textarea placeholder="post content" id="postBody" style={this.getPostBodyStyle()}/>
                        <div contentEditable={true}>fish</div>
                    </div>
                    <div style={this.getPostSubmitButtonStyle()}>Post</div>
                </div>
                }
            </div>
        );
    }
}