/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BatchRequestAction } from './BatchRequestAction';

/**
 * A request object for use in a batch request.
 */
export type BatchRequest = {
    actions?: Array<BatchRequestAction>;
};

