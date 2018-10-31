import * as React from 'react';

export function Content(props: { children: any, title: string }) {
    const { children, title } = props;

    return <section className="content section">
        <div className="container content__container">
            <div className="content__title">
                { title }
            </div>
            { children }
        </div>
    </section>;
}
