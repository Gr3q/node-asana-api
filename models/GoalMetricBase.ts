/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type GoalMetricBase = (AsanaResource & {
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    readonly resource_subtype?: GoalMetricBase.resource_subtype;
    /**
     * *Conditional*. Only relevant for goal metrics of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.
     * For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.
     */
    precision?: number;
    /**
     * A supported unit of measure for the goal metric, or none.
     */
    unit?: GoalMetricBase.unit;
    /**
     * ISO 4217 currency code to format this custom field. This will be null if the `unit` is not `currency`.
     */
    currency_code?: string | null;
    /**
     * This number is the start value of a goal metric of type number.
     */
    initial_number_value?: number;
    /**
     * This number is the end value of a goal metric of type number. This number cannot equal `initial_number_value`.
     */
    target_number_value?: number;
    /**
     * This number is the current value of a goal metric of type number.
     */
    current_number_value?: number;
    /**
     * This string is the current value of a goal metric of type string.
     */
    readonly current_display_value?: string;
    /**
     * This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, or calculated automatically from contributing subgoals or projects.
     */
    progress_source?: GoalMetricBase.progress_source;
});

export namespace GoalMetricBase {

    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    export enum resource_subtype {
        NUMBER = 'number',
    }

    /**
     * A supported unit of measure for the goal metric, or none.
     */
    export enum unit {
        NONE = 'none',
        CURRENCY = 'currency',
        PERCENTAGE = 'percentage',
    }

    /**
     * This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, or calculated automatically from contributing subgoals or projects.
     */
    export enum progress_source {
        MANUAL = 'manual',
        SUBGOAL_PROGRESS = 'subgoal_progress',
        PROJECT_TASK_COMPLETION = 'project_task_completion',
        PROJECT_MILESTONE_COMPLETION = 'project_milestone_completion',
    }


}

