import * as React from "react";
import * as _ from 'lodash';

import Post, {PostProps} from './Post';

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

export class Layout extends React.Component<PostViewerProps> {

    render() {

        return (
        <div>
            <div>
                <div onClick={this.props.updateIndex.bind(this, 'decrement')}>
                    Back
                </div>
                <Post 
                    postBody={this.props.postData.postContent}
                    username={this.props.postData.user}
                    postCategory={this.props.postData.postCategory}
                    addFilter={this.props.addFilter.bind(this)}
                    timestamp={'4:23pm on 9/3/2017'}
                    starCount={this.props.postData.starCount}
                />
            </div>
            <div onClick={this.props.updateIndex.bind(this, 'increment')}>
                Forward
            </div>
        </div>
        );
    }
}