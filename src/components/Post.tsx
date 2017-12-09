import * as React from "react";
import * as _ from 'lodash';

import globals from "../globals";

let UserIcon = require("react-icons/lib/md/person");
let FavoriteIcon = require("react-icons/lib/md/star");
let ShareIcon = require("react-icons/lib/md/share");

export interface PostProps {
    postBody: String;
    username: String;
    postCategory: String;
    timestamp: String;
    starCount: number;
    addFilter(filter: String): void;
}

export default class Logo extends React.Component<PostProps, {}> {

    private blackListChars: String[] = ['"', "'", ",", "!", "?", "."];

    constructor(props: PostProps) {
        super(props);
    }

    private getPostBoxStyle(): React.CSSProperties {
        return {
            fontSize: globals.typeface.post.fontSizeMain,
            fontFamily: globals.typeface.post.fontFamily,
            boxShadow: '0px 0px 50px #888888',
            padding: 15,
            backgroundColor: '#FFFFFF',
            width: '50vw',
            height: '30vh',
            borderLeft: '15px solid ' + globals.colors.accent1,
            display: 'flex'
        };
    }

    private getPostHeaderStyle(): React.CSSProperties {
        return {
            fontSize: globals.typeface.post.fontSizeHeader,
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.dark,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flex: '0 0 auto'
        };
    }

    private getPostFooterStyle(): React.CSSProperties {
        return {
            fontSize: '1em',
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.dark,
            justifyContent: 'flex-end',
            display: 'flex'
        };
    }

    private getPostBodyStyle(): React.CSSProperties {
        return {
            fontSize: '1.7em',
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.dark,
            alignSelf: 'center',
            paddingLeft: '20px',
            paddingRight: '20px',
            flex: '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'pre-wrap', // maintain spaces after <span> elements
        };
    }

    private getCategoryStyle(): React.CSSProperties {
        return {
            color: globals.colors.accent1,
            textTransform: 'capitalize'
        };
    }

    private getActionIconPanelStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        };
    }

    private getPostContentPanelStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        };
    }

    render() {
        let postTags = this.props.postBody.split(' ');
        let postElementContents: any[] = [];
        _.forEach(postTags, (tag: string) => {
            //TODO: implement hecka regex or analysis to sort all the tags n stuff
            postElementContents.push(
                <span className={"postBodyFilterOption"} onClick={this.props.addFilter.bind(this,tag)}>{tag + " "}</span>
            );
        })

        return (
            <div className={'post'} style={this.getPostBoxStyle()}>
                <div style={this.getActionIconPanelStyle()}>
                    <div><FavoriteIcon fontSize={30} color={globals.colors.gray1} /> 3</div>
                    <ShareIcon fontSize={30} color={globals.colors.gray1} />
                </div>
                <div style={this.getPostContentPanelStyle()}>
                    <div style={this.getPostHeaderStyle()}>
                        <div style={{borderBottom: '1px solid ' + globals.colors.gray1, paddingBottom: 4}}>
                            <div>
                                <UserIcon fontSize={30} color={globals.colors.gray1} />
                                <span onClick={this.props.addFilter.bind(this,this.props.username)}>{"{" + this.props.username + "}"}</span>
                                <span onClick={this.props.addFilter.bind(this,this.props.postCategory)} style={this.getCategoryStyle()}>{this.props.postCategory}</span>
                            </div>
                        </div>
                    </div>
                    <div style={this.getPostBodyStyle()}>
                        {...postElementContents}
                    </div>
                    <div style={this.getPostFooterStyle()}>
                        <div style={{flex: 1}}></div>
                        <div style={{borderTop: '1px solid ' + globals.colors.gray1, paddingTop: 4}}>
                            {this.props.timestamp}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}