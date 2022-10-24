/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export type AsanaResource = {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    readonly gid?: string;
    /**
     * The base type of this resource.
     */
    readonly resource_type?: string;
};

