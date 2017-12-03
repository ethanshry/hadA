import * as React from "react";
import * as _ from 'lodash';

import globals from "../globals";

export interface iPostProps {
    postBody: String;
    username: String;
    postCategory: String;
    zIndex: number;
    // relativePosition: [number, number];
    addFilter(filter: String): void;
}

export default class Logo extends React.Component<iPostProps, {}> {

    private blackListChars: String[] = ['"', "'", ",", "!", "?", "."];

    constructor(props: iPostProps) {
        super(props);
    }

    private getPostBoxStyle(): React.CSSProperties {
        let postBoxStyle: any = {
            fontSize: globals.typeface.post.fontSizeMain,
            fontFamily: globals.typeface.post.fontFamily,
            position: 'absolute',
            boxShadow: '0px 0px 50px #888888',
            padding: 15,
            backgroundColor: '#FFFFFF'
        };
        if (this.props.zIndex == 0) {
            postBoxStyle.width = '50vw';
            postBoxStyle.height = '30vh';
            postBoxStyle.left = '25vw';
            postBoxStyle.top = '25vh';
        } else if (this.props.zIndex < 5) {
            postBoxStyle.width = '50vw';
            postBoxStyle.height = '30vh';
            postBoxStyle.left = Math.random() * 100 + 'vw';
            postBoxStyle.top = Math.random() * 100 + 'vh';
        } else {
            postBoxStyle.width = 'calc(50vw *' + Math.pow(.95, this.props.zIndex) + ')';
            postBoxStyle.height = 'calc(30vh *' + Math.pow(.95, this.props.zIndex) + ')';
            postBoxStyle.left = Math.random() * 100 + 'vw';
            postBoxStyle.top = Math.random() * 100 + 'vh';
        }
        return postBoxStyle;
    }

    private getPostHeaderStyle(): React.CSSProperties {
        return {
            fontSize: globals.typeface.logo.fontSize,
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.dark,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        };
    }

    private getPostBodyStyle(): React.CSSProperties {
        return {
            fontSize: '1.7em',
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.dark,
            alignSelf: 'center',
            padding: '10% 0'
        };
    }

    render() {
        let postTags = this.props.postBody.split(' ');
        let postElementContents: any[] = [];
        _.forEach(postTags, (tag: string) => {
            //TODO: implement hecka regex or analysis to sort all the tags n stuff
            postElementContents.push(
                <span className={"postBodyFilterOption"} onClick={this.props.addFilter.bind(this,tag)}>{tag} </span>
            );
        })

        return (
        
            <div style={this.getPostBoxStyle()}>
                <div style={{'width': '100%'}}>
                    {(this.props.zIndex < 5) &&
                        <div style={{'height': '100%', 'display': 'flex', 'flex-direction': 'column'}}>
                            <div style={this.getPostHeaderStyle()}>
                                <div onClick={this.props.addFilter.bind(this,this.props.username)}>{this.props.username}</div>
                                <div onClick={this.props.addFilter.bind(this,this.props.postCategory)}>{this.props.postCategory}</div>
                            </div>
                            <div style={this.getPostBodyStyle()}>
                                {...postElementContents}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}