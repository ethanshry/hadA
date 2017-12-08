import * as React from "react";
import * as _ from 'lodash';

import globals from "../globals";

let UserIcon = require("react-icons/lib/md/person");
let FavoriteIcon = require("react-icons/lib/md/star");

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
            position: 'absolute',
            boxShadow: '0px 0px 50px #888888',
            padding: 15,
            backgroundColor: '#FFFFFF',
            width: '50vw',
            height: '30vh',
            left: '25vw',
            top: '25vh'
        };
    }

    private getPostHeaderStyle(): React.CSSProperties {
        return {
            fontSize: globals.typeface.post.fontSizeHeader,
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.dark,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 4,
            borderBottom: '1px solid ' + globals.colors.accent1,
            flex: '0 0 auto'
        };
    }

    private getPostFooterStyle(): React.CSSProperties {
        return {
            fontSize: '1em',
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.dark,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: '0 0 auto'
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
            whiteSpace: 'pre-wrap' // maintain spaces after <span> elements
        };
    }

    private getCategoryStyle(): React.CSSProperties {
        return {
            backgroundColor: globals.colors.accent1,
            color: globals.colors.light,
            borderRadius: 9,
            padding: 5,
            paddingLeft: 20,
            paddingRight: 20
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
                <div style={{'width': '100%', 'height': '100%'}}>
                    <div style={{'height': '100%', 'display': 'flex', 'flex-direction': 'column'}}>
                        <div style={this.getPostHeaderStyle()}>
                            <div onClick={this.props.addFilter.bind(this,this.props.username)}> <UserIcon fontSize={30} color={globals.colors.gray1} /> {this.props.username}</div>
                            <div onClick={this.props.addFilter.bind(this,this.props.postCategory)} style={this.getCategoryStyle()}>{this.props.postCategory}</div>
                        </div>
                        <div style={this.getPostBodyStyle()}>
                            {...postElementContents}
                        </div>
                        <div style={this.getPostFooterStyle()}>
                            <div>{this.props.timestamp}</div>
                            <div><FavoriteIcon fontSize={30} color={globals.colors.gray1} /> 3</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}