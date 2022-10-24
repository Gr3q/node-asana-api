/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectDuplicateRequest = {
    /**
     * The name of the new project.
     */
    name: string;
    /**
     * Sets the team of the new project. If team is not defined, the new project will be in the same team as the the original project.
     */
    team?: string;
    /**
     * The elements that will be duplicated to the new project. Tasks are always included.
     */
    include?: ProjectDuplicateRequest.include;
    /**
     * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.
     */
    schedule_dates?: {
        /**
         * Determines if the auto-shifted dates should skip weekends.
         */
        should_skip_weekends: boolean;
        /**
         * Sets the last due date in the duplicated project to the given date. The rest of the due dates will be offset by the same amount as the due dates in the original project.
         */
        due_on?: string;
        /**
         * Sets the first start date in the duplicated project to the given date. The rest of the start dates will be offset by the same amount as the start dates in the original project.
         */
        start_on?: string;
    };
};

export namespace ProjectDuplicateRequest {

    /**
     * The elements that will be duplicated to the new project. Tasks are always included.
     */
    export enum include {
        MEMBERS = 'members',
        NOTES = 'notes',
        FORMS = 'forms',
        TASK_NOTES = 'task_notes',
        TASK_ASSIGNEE = 'task_assignee',
        TASK_SUBTASKS = 'task_subtasks',
        TASK_ATTACHMENTS = 'task_attachments',
        TASK_DATES = 'task_dates',
        TASK_DEPENDENCIES = 'task_dependencies',
        TASK_FOLLOWERS = 'task_followers',
        TASK_TAGS = 'task_tags',
        TASK_PROJECTS = 'task_projects',
    }


}

