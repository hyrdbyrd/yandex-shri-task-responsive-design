import { IClassNameProps } from '@bem-react/core';

export interface IDataButtons {
    buttons?: string[];
}

export interface IDataButtonsProps extends
    IDataButtons,
    IClassNameProps {
    type: string;
}
