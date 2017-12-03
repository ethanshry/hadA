import * as React from "react";
import Logo from './Logo';
import PageContainer from './PageContainer';
import DraftPost from './DraftPost';
import FilterBar from './FilterBar';
import Post from './Post';
import Footer from './Footer';

import * as _ from 'lodash';

import DemoPosts from '../demoPosts';


export interface LayoutProps {
    compiler: string;
    framework: string;
}

export interface iLayoutState {
    filters: String[];
    currentPostIndex: number;
    // postsToRender: any[];
}

export class Layout extends React.Component<LayoutProps, iLayoutState> {

    // private filters: String[] = ['fish', 'whales', 'tomatoes', 'rhinos'];

    constructor(props: LayoutProps) {
        super(props);
        this.state = {
            filters: [],
            currentPostIndex: 0
            // postsToRender: DemoPosts
        };
    }

    private getHeaderBarStyles(): React.CSSProperties {
        return {
            display: 'flex',
            padding: 20
        };
    }

    private filteredPosts(): any[] {
        let posts = DemoPosts.slice(this.state.currentPostIndex, Math.min(DemoPosts.length, this.state.currentPostIndex + 10));
        // console.log(this.state.filters.length);
        console.log(this.state.currentPostIndex);
        console.log(posts.length);
        console.log("   ");
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
            /*this.setState({
               postsToRender: filteredPosts 
            });*/
        } else {/*
            this.setState({
                postsToRender: DemoPosts 
             });*/
             // console.log(this.state.postsToRender);
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
        console.log('adding ' + filter);
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

    render() {
        
        let postsToRender: JSX.Element[] = [];
        _.forEach(this.filteredPosts(), (post: any, index: number) => {
            postsToRender.push(
                <Post 
                    postBody={post.postContent}
                    username={post.user}
                    postCategory={post.postCategory}
                    zIndex={index}
                    addFilter={this.addFilter.bind(this)}
                    setPrimary={this.setPrimary.bind(this)}
                    key={index}
                />
            );
        });

        return (
        <div>
            <PageContainer>
                <div>
                    <div style={this.getHeaderBarStyles()}>
                        <DraftPost />
                        <FilterBar filters={this.state.filters} removeFilter={this.removeFilter.bind(this)}/>
                        <Logo />
                    </div>
                    <div>
                        {...postsToRender.reverse()}     
                    </div>
                </div>
            </PageContainer>
            {/*<Footer />*/}
        </div>
        );
    }
}

export interface iPostProps {
    postBody: String;
    username: String;
    postCategory: String;
    zIndex: number;
    // relativePosition: [number, number];
    addFilter(filter: String): void;
}