import * as React from 'react';

import './Content@simple.sss';

export interface IContentProps {
    children?: React.ReactChildren;
}

export class Content extends React.Component<IContentProps> {
    render() {
        const { children } = this.props;

        return <section className="content section">
            <div className="container content__container">
                { children }
            </div>
        </section>;
    }
}
