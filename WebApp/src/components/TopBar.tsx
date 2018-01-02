import * as React from "react";
import Logo from './Logo';
import DraftPost, {DraftPostProps} from './DraftPost';
import FilterBar from './FilterBar';

import global from '../globals';


export interface TopBarProps {
    removeFilter(filter: String): void;
    activeFilters: String[];
    username: String;
}

export default class TopBar extends React.Component<TopBarProps> {

    private getHeaderBarStyles(): React.CSSProperties {
        return {
            display: 'flex',
            padding: 20,
            borderBottom: '1px solid ' + global.colors.gray1,
            height: '7vh'
        };
    }

    render() {
        return (
        <div>
            <div style={this.getHeaderBarStyles()}>
                <DraftPost username={this.props.username}/>
                <FilterBar filters={this.props.activeFilters} removeFilter={this.props.removeFilter.bind(this)}/>
                <Logo username={this.props.username}/>
            </div>
        </div>
        );
    }
}