/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The context from which this event originated.
 */
export type AuditLogEventContext = {
    /**
     * The type of context.
     * Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`, or `api`.
     */
    context_type?: AuditLogEventContext.context_type;
    /**
     * The authentication method used in the context of an API request.
     * Only present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.
     */
    api_authentication_method?: AuditLogEventContext.api_authentication_method;
    /**
     * The IP address of the client that initiated the event, if applicable.
     */
    client_ip_address?: string;
    /**
     * The user agent of the client that initiated the event, if applicable.
     */
    user_agent?: string;
    /**
     * The name of the OAuth App that initiated the event.
     * Only present if the `api_authentication_method` is `oauth`.
     */
    oauth_app_name?: string;
};

export namespace AuditLogEventContext {

    /**
     * The type of context.
     * Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`, or `api`.
     */
    export enum context_type {
        WEB = 'web',
        DESKTOP = 'desktop',
        MOBILE = 'mobile',
        ASANA_SUPPORT = 'asana_support',
        ASANA = 'asana',
        EMAIL = 'email',
        API = 'api',
    }

    /**
     * The authentication method used in the context of an API request.
     * Only present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.
     */
    export enum api_authentication_method {
        COOKIE = 'cookie',
        OAUTH = 'oauth',
        PERSONAL_ACCESS_TOKEN = 'personal_access_token',
        SERVICE_ACCOUNT = 'service_account',
    }


}

