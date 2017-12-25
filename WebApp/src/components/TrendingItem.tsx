import * as React from "react";

import globals from "../globals";

let UserIcon = require("react-icons/lib/md/person");

export interface TrendingItemProps {
    trendCategory: String;
    trendContent: String;
    updateFilter(filter: String): void; //TODO: Implement removal of trend once selected in filter?
}

export default class TrendingItem extends React.Component<TrendingItemProps, {}> {

    private getTrendItemStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: globals.colors.light,
            color: globals.colors.gray1,
            borderRadius: 20
        };
    }

    render() {
        // TODO: get icons for other two types of trends
        return (
            <div style={this.getTrendItemStyle()}>
                {this.props.trendCategory.toLowerCase() == "user" &&
                    <UserIcon />
                }
                {this.props.trendCategory.toLowerCase() == "category" &&
                    <div>Category</div>
                }
                {this.props.trendCategory.toLowerCase() == "topic" &&
                    <div>Topic</div>
                }
                <div onClick={this.props.updateFilter.bind(this, this.props.trendContent)}>
                    {this.props.trendContent}
                </div>
            </div>
        );
    }
}