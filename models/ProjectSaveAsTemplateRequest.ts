/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSaveAsTemplateRequest = {
    /**
     * The name of the new project template.
     */
    name: string;
    /**
     * Sets the team of the new project template. If the project exists in an organization, specify team and not workspace.
     */
    team?: string;
    /**
     * Sets the workspace of the new project template. Only specify workspace if the project exists in a workspace.
     */
    workspace?: string;
    /**
     * Sets the project template to public to its team.
     */
    public: boolean;
};

