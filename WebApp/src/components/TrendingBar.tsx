//TODO: DO THIS
import * as React from "react";
import * as _ from 'lodash';
import TrendingItem, {TrendingItemProps} from './TrendingItem';

import globals from "../globals";

export interface TrendingBarProps {
    trendItems: TrendingItemProps[];
}

export default class TrendingBar extends React.Component<TrendingBarProps, {}> {

    private getTrendBarStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: globals.colors.light,
            color: globals.colors.gray1,
            borderRadius: 20
        };
    }

    private getTrendBarTitleStyle(): React.CSSProperties {
        return {
            fontSize: '1.3em',
            margin: 20,
            borderBottom: '1px solid ' + globals.colors.gray1
        };
    }

    private getTrendItemBarStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'column',
            margin: 20
        };
    }

    render() {
        let trendItems: JSX.Element[] = _.map(this.props.trendItems, (item: TrendingItemProps): JSX.Element => {
            return (<TrendingItem trendCategory={item.trendCategory} trendContent={item.trendContent} updateFilter={item.updateFilter.bind(this)} />);
        })
        // TODO: get icons for other two types of trends
        return (
            <div style={this.getTrendBarStyle()}>
                <div style={this.getTrendBarTitleStyle()}>
                    Trends
                </div>
                <div style={this.getTrendItemBarStyle()}>
                    {...trendItems}
                </div>
            </div>
        );
    }
}