import * as React from "react";
import * as _ from 'lodash';

import globals from "../globals";

let UserIcon = require("react-icons/lib/md/person");
let FavoriteIcon = require("react-icons/lib/md/star");

export interface iPostProps {
    postBody: String;
    username: String;
    postCategory: String;
    zIndex: number;
    addFilter(filter: String): void;
    setPrimary(zIndex: number): void;
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
            postBoxStyle.width = '40.5vw';
            postBoxStyle.height = '24.3vh';
            postBoxStyle.left = Math.random() * 100 * .7 + 15 + 'vw';
            postBoxStyle.top = Math.random() * 100 * .7 + 15 + 'vh';
        } else {
            postBoxStyle.width = 'calc(50vw *' + Math.pow(.9, this.props.zIndex) + ')';
            postBoxStyle.height = 'calc(30vh *' + Math.pow(.9, this.props.zIndex) + ')';
            postBoxStyle.left = Math.random() * 100 * .8 + 10 + 'vw';
            postBoxStyle.top = Math.random() * 100 * .8 + 10 + 'vh';
        }
        return postBoxStyle;
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
        
            <div className={'post'} style={this.getPostBoxStyle()} onClick={this.props.setPrimary.bind(this, this.props.zIndex)}>
                <div style={{'width': '100%', 'height': '100%'}}>
                    {(this.props.zIndex < 5) &&
                        <div style={{'height': '100%', 'display': 'flex', 'flex-direction': 'column'}}>
                            <div style={this.getPostHeaderStyle()}>
                                <div onClick={this.props.addFilter.bind(this,this.props.username)}> <UserIcon fontSize={30} color={globals.colors.gray1} /> {this.props.username}</div>
                                <div onClick={this.props.addFilter.bind(this,this.props.postCategory)} style={this.getCategoryStyle()}>{this.props.postCategory}</div>
                            </div>
                            <div style={this.getPostBodyStyle()}>
                                {...postElementContents}
                            </div>
                            <div style={this.getPostFooterStyle()}>
                                <div>4:23pm on 9/3/2017</div>
                                <div><FavoriteIcon fontSize={30} color={globals.colors.gray1} /> 3</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}