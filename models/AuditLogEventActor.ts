/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The entity that triggered the event. Will typically be a user.
 */
export type AuditLogEventActor = {
    /**
     * The type of actor.
     * Can be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.
     */
    actor_type?: AuditLogEventActor.actor_type;
    /**
     * Globally unique identifier of the actor, if it is a user.
     */
    gid?: string;
    /**
     * The name of the actor, if it is a user.
     */
    name?: string;
    /**
     * The email of the actor, if it is a user.
     */
    email?: string;
};

export namespace AuditLogEventActor {

    /**
     * The type of actor.
     * Can be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.
     */
    export enum actor_type {
        USER = 'user',
        ASANA = 'asana',
        ASANA_SUPPORT = 'asana_support',
        ANONYMOUS = 'anonymous',
        EXTERNAL_ADMINISTRATOR = 'external_administrator',
    }


}

