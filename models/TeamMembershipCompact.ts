/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { TeamCompact } from './TeamCompact';
import type { UserCompact } from './UserCompact';

export type TeamMembershipCompact = (AsanaResource & {
    user?: UserCompact;
    team?: TeamCompact;
    /**
     * Describes if the user is a guest in the team.
     */
    is_guest?: boolean;
});

