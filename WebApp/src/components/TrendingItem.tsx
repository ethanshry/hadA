import * as React from "react";

import globals from "../globals";

let UserIcon = require("react-icons/lib/md/person");
let TopicIcon = require("react-icons/lib/md/text-fields");
let CategoryIcon = require("react-icons/lib/md/list");

export interface TrendingItemProps {
    trendCategory: String;
    trendContent: String;
    updateFilter(filter: String): void; //TODO: Implement removal of trend once selected in filter?
}

export default class TrendingItem extends React.Component<TrendingItemProps, {}> {

    private getIconStyle(): React.CSSProperties {
        return {
            fontSize: 40,
            width: '100%'
        }
    }

    private getTrendItemStyle(): React.CSSProperties {
        return {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: globals.colors.light,
            color: globals.colors.gray1,
            borderRadius: 30,
            height: '10vh',
            width: '10vh',
            alignItems: 'center',
            justifyContent: 'space-around'
        };
    }

    render() {
        // TODO: get icons for other two types of trends
        return (
            <div style={this.getTrendItemStyle()}>
                <div>
                    {this.props.trendCategory.toLowerCase() == "user" &&
                        <UserIcon  style={this.getIconStyle()}/>
                    }
                    {this.props.trendCategory.toLowerCase() == "category" &&
                        <CategoryIcon  style={this.getIconStyle()}/>
                    }
                    {this.props.trendCategory.toLowerCase() == "topic" &&
                        <TopicIcon  style={this.getIconStyle()}/>
                    }
                    <div style={{width: '100%', textAlign: 'center'}} onClick={this.props.updateFilter.bind(this, this.props.trendContent)}>
                        {this.props.trendContent}
                    </div>
                </div>
            </div>
        );
    }
}