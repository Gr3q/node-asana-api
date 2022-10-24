/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuditLogEventActor } from './AuditLogEventActor';
import type { AuditLogEventContext } from './AuditLogEventContext';
import type { AuditLogEventDetails } from './AuditLogEventDetails';
import type { AuditLogEventResource } from './AuditLogEventResource';

/**
 * An object representing a single event within an Asana domain.
 *
 * Every audit log event is comprised of an `event_type`, `actor`, `resource`, and `context`. Some events will include additional metadata about the event under `details`. See our [currently supported list of events](/docs/supported-auditlogevents) for more details.
 */
export type AuditLogEvent = {
    /**
     * Globally unique identifier of the `AuditLogEvent`, as a string.
     */
    gid?: string;
    /**
     * The time the event was created.
     */
    created_at?: string;
    /**
     * The type of the event.
     */
    event_type?: string;
    /**
     * The category that this `event_type` belongs to.
     */
    event_category?: string;
    actor?: AuditLogEventActor;
    resource?: AuditLogEventResource;
    details?: AuditLogEventDetails;
    context?: AuditLogEventContext;
};

