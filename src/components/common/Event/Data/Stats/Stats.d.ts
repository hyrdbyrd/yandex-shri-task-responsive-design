import { IClassNameProps } from '@bem-react/core';

export interface IDataGraph {
    values?: {
        water?: (string | number)[][];
        gas?: (string | number)[][];
        electricity?: (string | number)[][];
    }[];
}

export interface IDataGraphProps extends
    IDataGraph,
    IClassNameProps {
    type: string
}
