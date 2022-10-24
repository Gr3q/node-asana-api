/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSectionInsertRequest = {
    /**
     * The project in which to reorder the given section.
     */
    project: string;
    /**
     * The section to reorder.
     */
    section: string;
    /**
     * Insert the given section immediately before the section specified by this parameter.
     */
    before_section?: string;
    /**
     * Insert the given section immediately after the section specified by this parameter.
     */
    after_section?: string;
};

