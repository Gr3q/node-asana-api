/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StatusUpdateBase } from './StatusUpdateBase';

export type StatusUpdateRequest = (StatusUpdateBase & {
    parent: string;
});

