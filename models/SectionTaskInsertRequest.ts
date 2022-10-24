/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SectionTaskInsertRequest = {
    /**
     * The task to add to this section.
     */
    task: string;
    /**
     * An existing task within this section before which the added task should be inserted. Cannot be provided together with insert_after.
     */
    insert_before?: string;
    /**
     * An existing task within this section after which the added task should be inserted. Cannot be provided together with insert_before.
     */
    insert_after?: string;
};

