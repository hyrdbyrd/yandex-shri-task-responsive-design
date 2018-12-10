import * as React from 'react';

import './Content.sss';
import { cn, classnames } from '@bem-react/classname';

export interface IContentProps {
    children?: React.ReactChildren;
}

export class Content extends React.Component<IContentProps> {
    render() {
        const { children } = this.props;
        const cnContent = cn('Content');

        return <section className={classnames('Section', cnContent())}>
            <div className={classnames('Container', cnContent('Container'))}>
                { children }
            </div>
        </section>;
    }
}
