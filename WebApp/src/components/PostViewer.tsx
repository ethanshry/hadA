import * as React from "react";
import * as _ from 'lodash';

import Post, {PostProps} from './Post';

import globals from '../globals';

let LeftIcon = require("react-icons/lib/md/keyboard-arrow-left");
let RightIcon = require("react-icons/lib/md/keyboard-arrow-right");

//TODO: Define this and move this
export interface ServerPostData {
    postContent: String;
    postCategory: String;
    user: String;
    starCount: number;
}

export interface PostViewerProps {
    postData: ServerPostData;
    addFilter(filter: String): void;
    updateIndex(direction: String): void;
}

export default class PostViewer extends React.Component<PostViewerProps> {

    render() {

        return (
        <div style={{display: 'flex', height: 'calc(100% - 15vh - 7vh - 40px)', alignItems: 'center', justifyContent: 'space-around', backgroundColor: globals.colors.gray1}}>
            <div style={{fontSize: '90px'}} onClick={this.props.updateIndex.bind(this, 'decrement')}>
                <LeftIcon color={globals.colors.light} style={{cursor: 'pointer'}} />
            </div>
            <div>
                <Post 
                        postBody={this.props.postData.postContent}
                        username={this.props.postData.user}
                        postCategory={this.props.postData.postCategory}
                        addFilter={this.props.addFilter.bind(this)}
                        timestamp={'4:23pm on 9/3/2017'}
                        starCount={this.props.postData.starCount}
                    />
            </div>
            <div style={{fontSize: '90px'}} onClick={this.props.updateIndex.bind(this, 'increment')}>
                <RightIcon color={globals.colors.light} style={{cursor: 'pointer'}}/>
            </div>
        </div>
        );
    }
}