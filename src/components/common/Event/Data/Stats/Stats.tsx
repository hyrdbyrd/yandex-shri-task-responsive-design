import * as React from 'react';
import { ModBody } from '@bem-react/core';

import { IDataGraphProps } from './Stats.d';

export type GraphType = ModBody<IDataGraphProps>;
export const Stats: GraphType = (Base, { className }) => <img className={className} src='assets/Richdata.svg' />;
