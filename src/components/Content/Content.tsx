import * as React from 'react';

import './Content@simple.sss';

export class Content extends React.Component<{ children?: React.ReactChildren, title?: string }> {
    render() {
        const { children, title } = this.props;

        return <section className="content section">
            <div className="container content__container">
                <div className="content__title">
                    { title || 'Yandex Дом' }
                </div>
                { children }
            </div>
        </section>;
    }
}
