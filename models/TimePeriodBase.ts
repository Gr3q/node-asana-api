/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimePeriodCompact } from './TimePeriodCompact';

export type TimePeriodBase = (TimePeriodCompact & {
    parent?: TimePeriodCompact;
});

