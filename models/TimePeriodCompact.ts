/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type TimePeriodCompact = (AsanaResource & {
    /**
     * The localized end date of the time period in `YYYY-MM-DD` format.
     */
    end_on?: string;
    /**
     * The localized start date of the time period in `YYYY-MM-DD` format.
     */
    start_on?: string;
    /**
     * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
     */
    period?: TimePeriodCompact.period;
    /**
     * A string representing the cadence code and the fiscal year.
     */
    display_name?: string;
});

export namespace TimePeriodCompact {

    /**
     * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
     */
    export enum period {
        FY = 'FY',
        H1 = 'H1',
        H2 = 'H2',
        Q1 = 'Q1',
        Q2 = 'Q2',
        Q3 = 'Q3',
        Q4 = 'Q4',
    }


}

