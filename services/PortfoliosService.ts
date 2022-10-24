/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCustomFieldSettingRequest } from '../models/AddCustomFieldSettingRequest';
import type { AddMembersRequest } from '../models/AddMembersRequest';
import type { CustomFieldSettingResponse } from '../models/CustomFieldSettingResponse';
import type { EmptyResponse } from '../models/EmptyResponse';
import type { PortfolioAddItemRequest } from '../models/PortfolioAddItemRequest';
import type { PortfolioCompact } from '../models/PortfolioCompact';
import type { PortfolioRemoveItemRequest } from '../models/PortfolioRemoveItemRequest';
import type { PortfolioRequest } from '../models/PortfolioRequest';
import type { PortfolioResponse } from '../models/PortfolioResponse';
import type { ProjectCompact } from '../models/ProjectCompact';
import type { RemoveCustomFieldSettingRequest } from '../models/RemoveCustomFieldSettingRequest';
import type { RemoveMembersRequest } from '../models/RemoveMembersRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PortfoliosService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get multiple portfolios
     * Returns a list of the portfolios in compact representation that are owned by the current API user.
     * @returns any Successfully retrieved portfolios.
     * @throws ApiError
     */
    public getPortfolios({
        workspace,
        owner,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * The workspace or organization to filter portfolios on.
         */
        workspace: string,
        /**
         * The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own.
         */
        owner: string,
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
        data?: Array<PortfolioCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/portfolios',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
                'workspace': workspace,
                'owner': owner,
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
     * Create a portfolio
     * Creates a new portfolio in the given workspace with the supplied name.
     *
     * Note that portfolios created in the Asana UI may have some state
     * (like the “Priority” custom field) which is automatically added
     * to the portfolio when it is created. Portfolios created via our
     * API will *not* be created with the same initial state to allow
     * integrations to create their own starting state on a portfolio.
     * @returns any Successfully created portfolio.
     * @throws ApiError
     */
    public createPortfolio({
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The portfolio to create.
         */
        requestBody: {
            data?: PortfolioRequest;
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
        data?: PortfolioResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/portfolios',
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
     * Get a portfolio
     * Returns the complete portfolio record for a single portfolio.
     * @returns any Successfully retrieved the requested portfolio.
     * @throws ApiError
     */
    public getPortfolio({
        portfolioGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
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
        data?: PortfolioResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/portfolios/{portfolio_gid}',
            path: {
                'portfolio_gid': portfolioGid,
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
     * Update a portfolio
     * An existing portfolio can be updated by making a PUT request on the URL for
     * that portfolio. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated portfolio record.
     * @returns any Successfully updated the portfolio.
     * @throws ApiError
     */
    public updatePortfolio({
        portfolioGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
        /**
         * The updated fields for the portfolio.
         */
        requestBody: {
            data?: PortfolioRequest;
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
        data?: PortfolioResponse;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/portfolios/{portfolio_gid}',
            path: {
                'portfolio_gid': portfolioGid,
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
     * Delete a portfolio
     * An existing portfolio can be deleted by making a DELETE request on
     * the URL for that portfolio.
     *
     * Returns an empty data record.
     * @returns any Successfully deleted the specified portfolio.
     * @throws ApiError
     */
    public deletePortfolio({
        portfolioGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
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
            url: '/portfolios/{portfolio_gid}',
            path: {
                'portfolio_gid': portfolioGid,
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
     * Get portfolio items
     * Get a list of the items in compact form in a portfolio.
     * @returns any Successfully retrieved the requested portfolio's items.
     * @throws ApiError
     */
    public getItemsForPortfolio({
        portfolioGid,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
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
        data?: Array<ProjectCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/portfolios/{portfolio_gid}/items',
            path: {
                'portfolio_gid': portfolioGid,
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
     * Add a portfolio item
     * Add an item to a portfolio.
     * Returns an empty data block.
     * @returns any Successfully added the item to the portfolio.
     * @throws ApiError
     */
    public addItemForPortfolio({
        portfolioGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
        /**
         * Information about the item being inserted.
         */
        requestBody: {
            data?: PortfolioAddItemRequest;
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
            url: '/portfolios/{portfolio_gid}/addItem',
            path: {
                'portfolio_gid': portfolioGid,
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
     * Remove a portfolio item
     * Remove an item from a portfolio.
     * Returns an empty data block.
     * @returns any Successfully removed the item from the portfolio.
     * @throws ApiError
     */
    public removeItemForPortfolio({
        portfolioGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
        /**
         * Information about the item being removed.
         */
        requestBody: {
            data?: PortfolioRemoveItemRequest;
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
            url: '/portfolios/{portfolio_gid}/removeItem',
            path: {
                'portfolio_gid': portfolioGid,
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
     * Add a custom field to a portfolio
     * Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.
     * @returns any Successfully added the custom field to the portfolio.
     * @throws ApiError
     */
    public addCustomFieldSettingForPortfolio({
        portfolioGid,
        requestBody,
        optPretty,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
        /**
         * Information about the custom field setting.
         */
        requestBody: {
            data?: AddCustomFieldSettingRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
    }): CancelablePromise<{
        data?: CustomFieldSettingResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/portfolios/{portfolio_gid}/addCustomFieldSetting',
            path: {
                'portfolio_gid': portfolioGid,
            },
            query: {
                'opt_pretty': optPretty,
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
     * Remove a custom field from a portfolio
     * Removes a custom field setting from a portfolio.
     * @returns any Successfully removed the custom field from the portfolio.
     * @throws ApiError
     */
    public removeCustomFieldSettingForPortfolio({
        portfolioGid,
        requestBody,
        optPretty,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
        /**
         * Information about the custom field setting being removed.
         */
        requestBody: {
            data?: RemoveCustomFieldSettingRequest;
        },
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/portfolios/{portfolio_gid}/removeCustomFieldSetting',
            path: {
                'portfolio_gid': portfolioGid,
            },
            query: {
                'opt_pretty': optPretty,
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
     * Add users to a portfolio
     * Adds the specified list of users as members of the portfolio.
     * Returns the updated portfolio record.
     * @returns any Successfully added members to the portfolio.
     * @throws ApiError
     */
    public addMembersForPortfolio({
        portfolioGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
        /**
         * Information about the members being added.
         */
        requestBody: {
            data?: AddMembersRequest;
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
        data?: PortfolioResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/portfolios/{portfolio_gid}/addMembers',
            path: {
                'portfolio_gid': portfolioGid,
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
     * Remove users from a portfolio
     * Removes the specified list of users from members of the portfolio.
     * Returns the updated portfolio record.
     * @returns any Successfully removed the members from the portfolio.
     * @throws ApiError
     */
    public removeMembersForPortfolio({
        portfolioGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the portfolio.
         */
        portfolioGid: string,
        /**
         * Information about the members being removed.
         */
        requestBody: {
            data?: RemoveMembersRequest;
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
        data?: PortfolioResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/portfolios/{portfolio_gid}/removeMembers',
            path: {
                'portfolio_gid': portfolioGid,
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

}
