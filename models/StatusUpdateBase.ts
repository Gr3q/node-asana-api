/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StatusUpdateCompact } from './StatusUpdateCompact';

export type StatusUpdateBase = (StatusUpdateCompact & {
    /**
     * The text content of the status update.
     */
    text: string;
    /**
     * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
     */
    html_text?: string;
    /**
     * The type associated with the status update. This represents the current state of the object this object is on.
     */
    status_type: StatusUpdateBase.status_type;
});

export namespace StatusUpdateBase {

    /**
     * The type associated with the status update. This represents the current state of the object this object is on.
     */
    export enum status_type {
        ON_TRACK = 'on_track',
        AT_RISK = 'at_risk',
        OFF_TRACK = 'off_track',
        ON_HOLD = 'on_hold',
        COMPLETE = 'complete',
        ACHIEVED = 'achieved',
        PARTIAL = 'partial',
        MISSED = 'missed',
        DROPPED = 'dropped',
    }


}

