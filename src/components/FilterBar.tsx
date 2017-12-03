import * as React from "react";

import globals from "../globals";
import * as _ from 'lodash';

export interface iFilterBarProps {
    filters: String[],
    removeFilter(filter: String): void
}

export default class FilterBar extends React.Component<iFilterBarProps, {}> {

    private getBarStyle(): React.CSSProperties {
        return {
            fontSize: globals.typeface.logo.fontSize,
            fontFamily: globals.typeface.logo.fontFamily,
            color: globals.colors.accent1,
            display: 'flex',
            flex: '2',
            flexDirection: 'row',
            justifyContent: 'center'
        };
    }

    private getFilterItemStyle(): React.CSSProperties {
        return {
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            backgroundColor: globals.colors.gray2,
            color: globals.colors.light,
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: '.4em'
        };
    }

    render() {

        let filterItems: JSX.Element[] = [] as JSX.Element[];
        _.forEach(this.props.filters, (filter: String, index: number) => {
            console.log(index);
        filterItems.push(<div key={index} style={this.getFilterItemStyle()} onClick={this.props.removeFilter.bind(this, filter)}> {filter} </div>);
        });
        console.log(filterItems);
        return (
            <div style={this.getBarStyle()}>
                {...filterItems}
            </div>
        );
    }
}