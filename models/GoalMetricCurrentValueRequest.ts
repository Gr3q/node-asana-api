/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type GoalMetricCurrentValueRequest = (AsanaResource & {
    /**
     * *Conditional*. This number is the current value of a goal metric of type number.
     */
    current_number_value?: number;
});

