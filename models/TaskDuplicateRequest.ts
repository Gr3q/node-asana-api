/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskDuplicateRequest = {
    /**
     * The name of the new task.
     */
    name?: string;
    /**
     * The fields that will be duplicated to the new task.
     */
    include?: TaskDuplicateRequest.include;
};

export namespace TaskDuplicateRequest {

    /**
     * The fields that will be duplicated to the new task.
     */
    export enum include {
        NOTES = 'notes',
        ASSIGNEE = 'assignee',
        SUBTASKS = 'subtasks',
        ATTACHMENTS = 'attachments',
        TAGS = 'tags',
        FOLLOWERS = 'followers',
        PROJECTS = 'projects',
        DATES = 'dates',
        DEPENDENCIES = 'dependencies',
        PARENT = 'parent',
    }


}

