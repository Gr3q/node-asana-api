/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponse } from '../models/EmptyResponse';
import type { JobCompact } from '../models/JobCompact';
import type { ModifyDependenciesRequest } from '../models/ModifyDependenciesRequest';
import type { ModifyDependentsRequest } from '../models/ModifyDependentsRequest';
import type { TaskAddFollowersRequest } from '../models/TaskAddFollowersRequest';
import type { TaskAddProjectRequest } from '../models/TaskAddProjectRequest';
import type { TaskAddTagRequest } from '../models/TaskAddTagRequest';
import type { TaskCompact } from '../models/TaskCompact';
import type { TaskDuplicateRequest } from '../models/TaskDuplicateRequest';
import type { TaskRemoveFollowersRequest } from '../models/TaskRemoveFollowersRequest';
import type { TaskRemoveProjectRequest } from '../models/TaskRemoveProjectRequest';
import type { TaskRemoveTagRequest } from '../models/TaskRemoveTagRequest';
import type { TaskRequest } from '../models/TaskRequest';
import type { TaskResponse } from '../models/TaskResponse';
import type { TaskSetParentRequest } from '../models/TaskSetParentRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TasksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get multiple tasks
     * Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.
     *
     * For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/docs/search-tasks-in-a-workspace).
     * @returns any Successfully retrieved requested tasks.
     * @throws ApiError
     */
    public getTasks({
        optPretty,
        optFields,
        limit,
        offset,
        assignee,
        project,
        section,
        workspace,
        completedSince,
        modifiedSince,
    }: {
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
        /**
         * The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified.
         * *Note: If you specify `assignee`, you must also specify the `workspace` to filter on.*
         */
        assignee?: string,
        /**
         * The project to filter tasks on.
         */
        project?: string,
        /**
         * The section to filter tasks on.
         * *Note: Currently, this is only supported in board views.*
         */
        section?: string,
        /**
         * The workspace to filter tasks on.
         * *Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*
         */
        workspace?: string,
        /**
         * Only return tasks that are either incomplete or that have been completed since this time.
         */
        completedSince?: string,
        /**
         * Only return tasks that have been modified since the given time.
         *
         * *Note: A task is considered “modified” if any of its properties
         * change, or associations between it and other objects are modified
         * (e.g.  a task being added to a project). A task is not considered
         * modified just because another object it is associated with (e.g. a
         * subtask) is modified. Actions that count as modifying the task
         * include assigning, renaming, completing, and adding stories.*
         */
        modifiedSince?: string,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
                'assignee': assignee,
                'project': project,
                'section': section,
                'workspace': workspace,
                'completed_since': completedSince,
                'modified_since': modifiedSince,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Create a task
     * Creating a new task is as easy as POSTing to the `/tasks` endpoint with a
     * data block containing the fields you’d like to set on the task. Any
     * unspecified fields will take on default values.
     *
     * Every task is required to be created in a specific workspace, and this
     * workspace cannot be changed once set. The workspace need not be set
     * explicitly if you specify `projects` or a `parent` task instead.
     * @returns any Successfully created a new task.
     * @throws ApiError
     */
    public createTask({
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to create.
         */
        requestBody: {
            data?: TaskRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: TaskResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get a task
     * Returns the complete task record for a single task.
     * @returns any Successfully retrieved the specified task.
     * @throws ApiError
     */
    public getTask({
        taskGid,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: TaskResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks/{task_gid}',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Update a task
     * A specific, existing task can be updated by making a PUT request on the
     * URL for that task. Only the fields provided in the `data` block will be
     * updated; any unspecified fields will remain unchanged.
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the task.
     *
     * Returns the complete updated task record.
     * @returns any Successfully updated the specified task.
     * @throws ApiError
     */
    public updateTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The task to update.
         */
        requestBody: {
            data?: TaskRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: TaskResponse;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/tasks/{task_gid}',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Delete a task
     * A specific, existing task can be deleted by making a DELETE request on
     * the URL for that task. Deleted tasks go into the “trash” of the user
     * making the delete request. Tasks can be recovered from the trash within a
     * period of 30 days; afterward they are completely removed from the system.
     *
     * Returns an empty data record.
     * @returns any Successfully deleted the specified task.
     * @throws ApiError
     */
    public deleteTask({
        taskGid,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tasks/{task_gid}',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Duplicate a task
     * Creates and returns a job that will asynchronously handle the duplication.
     * @returns any Successfully created the job to handle duplication.
     * @throws ApiError
     */
    public duplicateTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * Describes the duplicate's name and the fields that will be duplicated.
         */
        requestBody: {
            data?: TaskDuplicateRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: JobCompact;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/duplicate',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get tasks from a project
     * Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.
     * @returns any Successfully retrieved the requested project's tasks.
     * @throws ApiError
     */
    public getTasksForProject({
        projectGid,
        completedSince,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * Globally unique identifier for the project.
         */
        projectGid: string,
        /**
         * Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
         *
         */
        completedSince?: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_gid}/tasks',
            path: {
                'project_gid': projectGid,
            },
            query: {
                'completed_since': completedSince,
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get tasks from a section
     * *Board view only*: Returns the compact section records for all tasks within the given section.
     * @returns any Successfully retrieved the section's tasks.
     * @throws ApiError
     */
    public getTasksForSection({
        sectionGid,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * The globally unique identifier for the section.
         */
        sectionGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sections/{section_gid}/tasks',
            path: {
                'section_gid': sectionGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get tasks from a tag
     * Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.
     * @returns any Successfully retrieved the tasks associated with the specified tag.
     * @throws ApiError
     */
    public getTasksForTag({
        tagGid,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * Globally unique identifier for the tag.
         */
        tagGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tags/{tag_gid}/tasks',
            path: {
                'tag_gid': tagGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get tasks from a user task list
     * Returns the compact list of tasks in a user’s My Tasks list.
     * *Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
     * *Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*
     * @returns any Successfully retrieved the user task list's tasks.
     * @throws ApiError
     */
    public getTasksForUserTaskList({
        userTaskListGid,
        completedSince,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * Globally unique identifier for the user task list.
         */
        userTaskListGid: string,
        /**
         * Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
         *
         */
        completedSince?: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_task_lists/{user_task_list_gid}/tasks',
            path: {
                'user_task_list_gid': userTaskListGid,
            },
            query: {
                'completed_since': completedSince,
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get subtasks from a task
     * Returns a compact representation of all of the subtasks of a task.
     * @returns any Successfully retrieved the specified task's subtasks.
     * @throws ApiError
     */
    public getSubtasksForTask({
        taskGid,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks/{task_gid}/subtasks',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Create a subtask
     * Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.
     * @returns any Successfully created the specified subtask.
     * @throws ApiError
     */
    public createSubtaskForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The new subtask to create.
         */
        requestBody: {
            data?: TaskRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: TaskResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/subtasks',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Set the parent of a task
     * parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.
     * @returns any Successfully changed the parent of the specified subtask.
     * @throws ApiError
     */
    public setParentForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The new parent of the subtask.
         */
        requestBody: {
            data?: TaskSetParentRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: TaskResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/setParent',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get dependencies from a task
     * Returns the compact representations of all of the dependencies of a task.
     * @returns any Successfully retrieved the specified task's dependencies.
     * @throws ApiError
     */
    public getDependenciesForTask({
        taskGid,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks/{task_gid}/dependencies',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Set dependencies for a task
     * Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.
     * @returns any Successfully set the specified dependencies on the task.
     * @throws ApiError
     */
    public addDependenciesForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The list of tasks to set as dependencies.
         */
        requestBody: {
            data?: ModifyDependenciesRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/addDependencies',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Unlink dependencies from a task
     * Unlinks a set of dependencies from this task.
     * @returns any Successfully unlinked the dependencies from the specified task.
     * @throws ApiError
     */
    public removeDependenciesForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The list of tasks to unlink as dependencies.
         */
        requestBody: {
            data?: ModifyDependenciesRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/removeDependencies',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get dependents from a task
     * Returns the compact representations of all of the dependents of a task.
     * @returns any Successfully retrieved the specified dependents of the task.
     * @throws ApiError
     */
    public getDependentsForTask({
        taskGid,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks/{task_gid}/dependents',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Set dependents for a task
     * Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.
     * @returns any Successfully set the specified dependents on the given task.
     * @throws ApiError
     */
    public addDependentsForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The list of tasks to add as dependents.
         */
        requestBody: {
            data?: ModifyDependentsRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/addDependents',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Unlink dependents from a task
     * Unlinks a set of dependents from this task.
     * @returns any Successfully unlinked the specified tasks as dependents.
     * @throws ApiError
     */
    public removeDependentsForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The list of tasks to remove as dependents.
         */
        requestBody: {
            data?: ModifyDependentsRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/removeDependents',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Add a project to a task
     * Adds the task to the specified project, in the optional location
     * specified. If no location arguments are given, the task will be added to
     * the end of the project.
     *
     * `addProject` can also be used to reorder a task within a project or
     * section that already contains it.
     *
     * At most one of `insert_before`, `insert_after`, or `section` should be
     * specified. Inserting into a section in an non-order-dependent way can be
     * done by specifying section, otherwise, to insert within a section in a
     * particular place, specify `insert_before` or `insert_after` and a task
     * within the section to anchor the position of this task.
     *
     * Returns an empty data block.
     * @returns any Successfully added the specified project to the task.
     * @throws ApiError
     */
    public addProjectForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The project to add the task to.
         */
        requestBody: {
            data?: TaskAddProjectRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/addProject',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Remove a project from a task
     * Removes the task from the specified project. The task will still exist in
     * the system, but it will not be in the project anymore.
     *
     * Returns an empty data block.
     * @returns any Successfully removed the specified project from the task.
     * @throws ApiError
     */
    public removeProjectForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The project to remove the task from.
         */
        requestBody: {
            data?: TaskRemoveProjectRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/removeProject',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Add a tag to a task
     * Adds a tag to a task. Returns an empty data block.
     * @returns any Successfully added the specified tag to the task.
     * @throws ApiError
     */
    public addTagForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The tag to add to the task.
         */
        requestBody: {
            data?: TaskAddTagRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/addTag',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Remove a tag from a task
     * Removes a tag from a task. Returns an empty data block.
     * @returns any Successfully removed the specified tag from the task.
     * @throws ApiError
     */
    public removeTagForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The tag to remove from the task.
         */
        requestBody: {
            data?: TaskRemoveTagRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/removeTag',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Add followers to a task
     * Adds followers to a task. Returns an empty data block.
     * Each task can be associated with zero or more followers in the system.
     * Requests to add/remove followers, if successful, will return the complete updated task record, described above.
     * @returns any Successfully added the specified followers to the task.
     * @throws ApiError
     */
    public addFollowersForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The followers to add to the task.
         */
        requestBody: {
            data?: TaskAddFollowersRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: TaskResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/addFollowers',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Remove followers from a task
     * Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.
     * @returns any Successfully removed the specified followers from the task.
     * @throws ApiError
     */
    public removeFollowerForTask({
        taskGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The task to operate on.
         */
        taskGid: string,
        /**
         * The followers to remove from the task.
         */
        requestBody: {
            data?: TaskRemoveFollowersRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: TaskResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks/{task_gid}/removeFollowers',
            path: {
                'task_gid': taskGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Search tasks in a workspace
     * To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
     * #### Premium access
     * Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:
     *
     * - The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace
     *
     * Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.
     * #### Pagination
     * Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.
     * #### Eventual consistency
     * Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
     * #### Rate limits
     * You may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits).
     * #### Custom field parameters
     * | Parameter name | Custom field type | Accepted type |
     * |---|---|---|
     * | custom_fields.{gid}.is_set | All | Boolean |
     * | custom_fields.{gid}.value | Text | String |
     * | custom_fields.{gid}.value | Number | Number |
     * | custom_fields.{gid}.value | Enum | Enum option ID |
     * | custom_fields.{gid}.starts_with | Text only | String |
     * | custom_fields.{gid}.ends_with | Text only | String |
     * | custom_fields.{gid}.contains | Text only | String |
     * | custom_fields.{gid}.less_than | Number only | Number |
     * | custom_fields.{gid}.greater_than | Number only | Number |
     *
     *
     * For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.
     *
     * **Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field
     *
     * *Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*
     * @returns any Successfully retrieved the section's tasks.
     * @throws ApiError
     */
    public searchTasksForWorkspace({
        workspaceGid,
        optPretty,
        optFields,
        text,
        resourceSubtype = 'milestone',
        assigneeAny,
        assigneeNot,
        portfoliosAny,
        projectsAny,
        projectsNot,
        projectsAll,
        sectionsAny,
        sectionsNot,
        sectionsAll,
        tagsAny,
        tagsNot,
        tagsAll,
        teamsAny,
        followersNot,
        createdByAny,
        createdByNot,
        assignedByAny,
        assignedByNot,
        likedByNot,
        commentedOnByNot,
        dueOnBefore,
        dueOnAfter,
        dueOn,
        dueAtBefore,
        dueAtAfter,
        startOnBefore,
        startOnAfter,
        startOn,
        createdOnBefore,
        createdOnAfter,
        createdOn,
        createdAtBefore,
        createdAtAfter,
        completedOnBefore,
        completedOnAfter,
        completedOn,
        completedAtBefore,
        completedAtAfter,
        modifiedOnBefore,
        modifiedOnAfter,
        modifiedOn,
        modifiedAtBefore,
        modifiedAtAfter,
        isBlocking,
        isBlocked,
        hasAttachment,
        completed,
        isSubtask,
        sortBy = 'modified_at',
        sortAscending = false,
    }: {
        /**
         * Globally unique identifier for the workspace or organization.
         */
        workspaceGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Performs full-text search on both task name and description
         */
        text?: string,
        /**
         * Filters results by the task's resource_subtype
         */
        resourceSubtype?: 'default_task' | 'milestone',
        /**
         * Comma-separated list of user identifiers
         */
        assigneeAny?: string,
        /**
         * Comma-separated list of user identifiers
         */
        assigneeNot?: string,
        /**
         * Comma-separated list of portfolio IDs
         */
        portfoliosAny?: string,
        /**
         * Comma-separated list of project IDs
         */
        projectsAny?: string,
        /**
         * Comma-separated list of project IDs
         */
        projectsNot?: string,
        /**
         * Comma-separated list of project IDs
         */
        projectsAll?: string,
        /**
         * Comma-separated list of section or column IDs
         */
        sectionsAny?: string,
        /**
         * Comma-separated list of section or column IDs
         */
        sectionsNot?: string,
        /**
         * Comma-separated list of section or column IDs
         */
        sectionsAll?: string,
        /**
         * Comma-separated list of tag IDs
         */
        tagsAny?: string,
        /**
         * Comma-separated list of tag IDs
         */
        tagsNot?: string,
        /**
         * Comma-separated list of tag IDs
         */
        tagsAll?: string,
        /**
         * Comma-separated list of team IDs
         */
        teamsAny?: string,
        /**
         * Comma-separated list of user identifiers
         */
        followersNot?: string,
        /**
         * Comma-separated list of user identifiers
         */
        createdByAny?: string,
        /**
         * Comma-separated list of user identifiers
         */
        createdByNot?: string,
        /**
         * Comma-separated list of user identifiers
         */
        assignedByAny?: string,
        /**
         * Comma-separated list of user identifiers
         */
        assignedByNot?: string,
        /**
         * Comma-separated list of user identifiers
         */
        likedByNot?: string,
        /**
         * Comma-separated list of user identifiers
         */
        commentedOnByNot?: string,
        /**
         * ISO 8601 date string
         */
        dueOnBefore?: string,
        /**
         * ISO 8601 date string
         */
        dueOnAfter?: string,
        /**
         * ISO 8601 date string or `null`
         */
        dueOn?: string | null,
        /**
         * ISO 8601 datetime string
         */
        dueAtBefore?: string,
        /**
         * ISO 8601 datetime string
         */
        dueAtAfter?: string,
        /**
         * ISO 8601 date string
         */
        startOnBefore?: string,
        /**
         * ISO 8601 date string
         */
        startOnAfter?: string,
        /**
         * ISO 8601 date string or `null`
         */
        startOn?: string | null,
        /**
         * ISO 8601 date string
         */
        createdOnBefore?: string,
        /**
         * ISO 8601 date string
         */
        createdOnAfter?: string,
        /**
         * ISO 8601 date string or `null`
         */
        createdOn?: string | null,
        /**
         * ISO 8601 datetime string
         */
        createdAtBefore?: string,
        /**
         * ISO 8601 datetime string
         */
        createdAtAfter?: string,
        /**
         * ISO 8601 date string
         */
        completedOnBefore?: string,
        /**
         * ISO 8601 date string
         */
        completedOnAfter?: string,
        /**
         * ISO 8601 date string or `null`
         */
        completedOn?: string | null,
        /**
         * ISO 8601 datetime string
         */
        completedAtBefore?: string,
        /**
         * ISO 8601 datetime string
         */
        completedAtAfter?: string,
        /**
         * ISO 8601 date string
         */
        modifiedOnBefore?: string,
        /**
         * ISO 8601 date string
         */
        modifiedOnAfter?: string,
        /**
         * ISO 8601 date string or `null`
         */
        modifiedOn?: string | null,
        /**
         * ISO 8601 datetime string
         */
        modifiedAtBefore?: string,
        /**
         * ISO 8601 datetime string
         */
        modifiedAtAfter?: string,
        /**
         * Filter to incomplete tasks with dependents
         */
        isBlocking?: boolean,
        /**
         * Filter to tasks with incomplete dependencies
         */
        isBlocked?: boolean,
        /**
         * Filter to tasks with attachments
         */
        hasAttachment?: boolean,
        /**
         * Filter to completed tasks
         */
        completed?: boolean,
        /**
         * Filter to subtasks
         */
        isSubtask?: boolean,
        /**
         * One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`
         */
        sortBy?: 'due_date' | 'created_at' | 'completed_at' | 'likes' | 'modified_at',
        /**
         * Default `false`
         */
        sortAscending?: boolean,
    }): CancelablePromise<{
        data?: Array<TaskCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_gid}/tasks/search',
            path: {
                'workspace_gid': workspaceGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'text': text,
                'resource_subtype': resourceSubtype,
                'assignee.any': assigneeAny,
                'assignee.not': assigneeNot,
                'portfolios.any': portfoliosAny,
                'projects.any': projectsAny,
                'projects.not': projectsNot,
                'projects.all': projectsAll,
                'sections.any': sectionsAny,
                'sections.not': sectionsNot,
                'sections.all': sectionsAll,
                'tags.any': tagsAny,
                'tags.not': tagsNot,
                'tags.all': tagsAll,
                'teams.any': teamsAny,
                'followers.not': followersNot,
                'created_by.any': createdByAny,
                'created_by.not': createdByNot,
                'assigned_by.any': assignedByAny,
                'assigned_by.not': assignedByNot,
                'liked_by.not': likedByNot,
                'commented_on_by.not': commentedOnByNot,
                'due_on.before': dueOnBefore,
                'due_on.after': dueOnAfter,
                'due_on': dueOn,
                'due_at.before': dueAtBefore,
                'due_at.after': dueAtAfter,
                'start_on.before': startOnBefore,
                'start_on.after': startOnAfter,
                'start_on': startOn,
                'created_on.before': createdOnBefore,
                'created_on.after': createdOnAfter,
                'created_on': createdOn,
                'created_at.before': createdAtBefore,
                'created_at.after': createdAtAfter,
                'completed_on.before': completedOnBefore,
                'completed_on.after': completedOnAfter,
                'completed_on': completedOn,
                'completed_at.before': completedAtBefore,
                'completed_at.after': completedAtAfter,
                'modified_on.before': modifiedOnBefore,
                'modified_on.after': modifiedOnAfter,
                'modified_on': modifiedOn,
                'modified_at.before': modifiedAtBefore,
                'modified_at.after': modifiedAtAfter,
                'is_blocking': isBlocking,
                'is_blocked': isBlocked,
                'has_attachment': hasAttachment,
                'completed': completed,
                'is_subtask': isSubtask,
                'sort_by': sortBy,
                'sort_ascending': sortAscending,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

}
