//TODO: DO THIS
import * as React from "react";
import * as _ from 'lodash';
import TrendingItem, {TrendingItemProps} from './TrendingItem';

import globals from "../globals";

export interface TrendingBarProps {
    trendItems: TrendingItemProps[];
    updateFilter(filter: String): void
}

export default class TrendingBar extends React.Component<TrendingBarProps, {}> {

    private getTrendBarStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: globals.colors.gray1,
            color: globals.colors.light,
            height: '15vh'
        };
    }

    private getTrendBarTitleStyle(): React.CSSProperties {
        return {
            fontSize: '1.3em',
            margin: 20,
            borderRight: '1px solid ' + globals.colors.light,
            fontFamily: globals.typeface.logo.fontFamily,
            paddingRight: 20,
            display: 'flex',
            alignItems: "center"
        };
    }

    private getTrendItemBarStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'row',
            margin: 20,
            width: '100%',
            justifyContent: 'space-around',
            overflowY: 'auto',
            fontFamily: globals.typeface.body.fontFamily,
            alignItems: 'center'
        };
    }

    render() {
        let trendItems: JSX.Element[] = _.map(this.props.trendItems, (item: TrendingItemProps, index: number): JSX.Element => {
            return (<TrendingItem key={index} trendCategory={item.trendCategory} trendContent={item.trendContent} updateFilter={this.props.updateFilter.bind(this)} />);
        })
        // TODO: get icons for other two types of trends
        return (
            <div style={this.getTrendBarStyle()}>
                <div style={this.getTrendBarTitleStyle()}>
                    Trending:
                </div>
                <div style={this.getTrendItemBarStyle()}>
                    {...trendItems}
                </div>
            </div>
        );
    }
}