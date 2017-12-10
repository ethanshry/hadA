import * as React from "react";

export default class PageContainer extends React.Component<{children: JSX.Element}, {}> {

    private getPageContainerStyle(): React.CSSProperties {
        return {
            width: '100vw',
            height: '100vh',
            overflowX: 'hidden',
            overflowY: 'hidden',
            padding: '8px auto'
        };
    }

    render() {
        return <div style={this.getPageContainerStyle()}>
                <div style={{height: '100%'}}>{this.props.children}</div>
            </div>;
    }
}