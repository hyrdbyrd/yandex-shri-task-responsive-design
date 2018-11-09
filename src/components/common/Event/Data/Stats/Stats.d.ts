export interface IDataGraph {
    type?: string;
    values?: {
        water?: (string | number)[][];
        gas?: (string | number)[][];
        electricity?: (string | number)[][];
    }[];
}
