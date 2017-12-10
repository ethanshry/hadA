import * as React from "react";
import * as _ from 'lodash';

import PageContainer from './PageContainer';
import FilterBar from './FilterBar';
import Post from './Post';
import Footer from './Footer';
import TopBar from './TopBar';
import PostViewer from './PostViewer';
import AuthContainer from './AuthContianer';

import DemoPosts from '../demoPosts';

export interface iLayoutState {
    filters: String[];
    currentPostIndex: number;
    activeUser: String;
    isAuthenticated: boolean;
}

export class Layout extends React.Component<null, iLayoutState> {

    constructor(props: null) {
        super(props);
        this.state = {
            filters: [],
            currentPostIndex: 0,
            activeUser: "",
            isAuthenticated: false
        };
    }

    private filteredPosts(): any[] {
        let posts = DemoPosts.slice(this.state.currentPostIndex, Math.min(DemoPosts.length, this.state.currentPostIndex + 10));
        let filteredPosts: any[] = [];
        if (this.state.filters.length != 0) {
            _.forEach(posts, (post: any) => {
                let includeFlag = false;
                _.forEach(this.state.filters, (filter: string) => {
                    if (post.user.includes(filter) || post.postCategory.includes(filter) || post.postContent.includes(filter)) {
                        includeFlag = true;
                    }
                });
                includeFlag ? filteredPosts.push(post) : null;
            });
        } else {
             filteredPosts = posts;
        }
        return filteredPosts;
    }

    private removeFilter(filter: String): void {
        this.setState({
            filters: _.remove(this.state.filters, (item: String) => {
                return filter != item;
            })
        });
    }

    private addFilter(filter: String): void{
        if (this.state.filters.indexOf(filter) == -1) {
            let newFilters: String[] = this.state.filters;
            newFilters.push(filter);
            this.setState({
                filters: newFilters
            });
        }
    }

    private setPrimary(postIndex: number): void {
        if (postIndex == 0) {
            // do nothing, primary already set
        } else if (postIndex < 5) {
            // move post index past 0 and move tapped to top
            // TODO: Reordering
            this.setState({
                currentPostIndex: this.state.currentPostIndex + 1
            });
        } else {
            // move post index past top 5
            this.setState({
                currentPostIndex: this.state.currentPostIndex + 5
            });
        }
    }

    private updatePostIndex(direction: string): void {
        switch(direction){
            case 'decrement':
                this.setState({
                    currentPostIndex: this.state.currentPostIndex > 0 ? this.state.currentPostIndex - 1 : 0
                });
                break;
            case 'increment':
                // should check to see if is maxed out
                this.setState({
                    currentPostIndex: this.state.currentPostIndex + 1
                });
                break;
        }
        //TODO: grab more posts if needed
    }

    private authorizeUser(user: string): void {
        this.setState({
           activeUser: user,
           isAuthenticated: true 
        });
    }

    render() {

        return (
        <div>
            <PageContainer>
                <div style={{height: '100%'}}>
                    {this.state.isAuthenticated &&
                    <div style={{height: '100%'}}>
                        <TopBar username={'username'} activeFilters={this.state.filters} removeFilter={this.removeFilter.bind(this)} />
                        <PostViewer 
                            postData={this.filteredPosts()[this.state.currentPostIndex]}
                            addFilter={this.addFilter.bind(this)}
                            updateIndex={this.updatePostIndex.bind(this)}
                        />
                    </div>
                    }
                    {!this.state.isAuthenticated &&
                        <AuthContainer authorizeUser={this.authorizeUser.bind(this)}/>
                    }`
                </div>
            </PageContainer>
            {/*<Footer />*/}
        </div>
        );
    }
}