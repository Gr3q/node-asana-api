/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { NodeHttpRequest } from './core/NodeHttpRequest';

import { AttachmentsService } from './services/AttachmentsService';
import { AuditLogApiService } from './services/AuditLogApiService';
import { BatchApiService } from './services/BatchApiService';
import { CustomFieldsService } from './services/CustomFieldsService';
import { CustomFieldSettingsService } from './services/CustomFieldSettingsService';
import { EventsService } from './services/EventsService';
import { GoalRelationshipsService } from './services/GoalRelationshipsService';
import { GoalsService } from './services/GoalsService';
import { JobsService } from './services/JobsService';
import { OrganizationExportsService } from './services/OrganizationExportsService';
import { PortfolioMembershipsService } from './services/PortfolioMembershipsService';
import { PortfoliosService } from './services/PortfoliosService';
import { ProjectBriefsService } from './services/ProjectBriefsService';
import { ProjectMembershipsService } from './services/ProjectMembershipsService';
import { ProjectsService } from './services/ProjectsService';
import { ProjectStatusesService } from './services/ProjectStatusesService';
import { ProjectTemplatesService } from './services/ProjectTemplatesService';
import { SectionsService } from './services/SectionsService';
import { StatusUpdatesService } from './services/StatusUpdatesService';
import { StoriesService } from './services/StoriesService';
import { TagsService } from './services/TagsService';
import { TasksService } from './services/TasksService';
import { TeamMembershipsService } from './services/TeamMembershipsService';
import { TeamsService } from './services/TeamsService';
import { TimePeriodsService } from './services/TimePeriodsService';
import { TypeaheadService } from './services/TypeaheadService';
import { UsersService } from './services/UsersService';
import { UserTaskListsService } from './services/UserTaskListsService';
import { WebhooksService } from './services/WebhooksService';
import { WorkspaceMembershipsService } from './services/WorkspaceMembershipsService';
import { WorkspacesService } from './services/WorkspacesService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class AsanaApi {

    public readonly attachments: AttachmentsService;
    public readonly auditLogApi: AuditLogApiService;
    public readonly batchApi: BatchApiService;
    public readonly customFields: CustomFieldsService;
    public readonly customFieldSettings: CustomFieldSettingsService;
    public readonly events: EventsService;
    public readonly goalRelationships: GoalRelationshipsService;
    public readonly goals: GoalsService;
    public readonly jobs: JobsService;
    public readonly organizationExports: OrganizationExportsService;
    public readonly portfolioMemberships: PortfolioMembershipsService;
    public readonly portfolios: PortfoliosService;
    public readonly projectBriefs: ProjectBriefsService;
    public readonly projectMemberships: ProjectMembershipsService;
    public readonly projects: ProjectsService;
    public readonly projectStatuses: ProjectStatusesService;
    public readonly projectTemplates: ProjectTemplatesService;
    public readonly sections: SectionsService;
    public readonly statusUpdates: StatusUpdatesService;
    public readonly stories: StoriesService;
    public readonly tags: TagsService;
    public readonly tasks: TasksService;
    public readonly teamMemberships: TeamMembershipsService;
    public readonly teams: TeamsService;
    public readonly timePeriods: TimePeriodsService;
    public readonly typeahead: TypeaheadService;
    public readonly users: UsersService;
    public readonly userTaskLists: UserTaskListsService;
    public readonly webhooks: WebhooksService;
    public readonly workspaceMemberships: WorkspaceMembershipsService;
    public readonly workspaces: WorkspacesService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = NodeHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://app.asana.com/api/1.0',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.attachments = new AttachmentsService(this.request);
        this.auditLogApi = new AuditLogApiService(this.request);
        this.batchApi = new BatchApiService(this.request);
        this.customFields = new CustomFieldsService(this.request);
        this.customFieldSettings = new CustomFieldSettingsService(this.request);
        this.events = new EventsService(this.request);
        this.goalRelationships = new GoalRelationshipsService(this.request);
        this.goals = new GoalsService(this.request);
        this.jobs = new JobsService(this.request);
        this.organizationExports = new OrganizationExportsService(this.request);
        this.portfolioMemberships = new PortfolioMembershipsService(this.request);
        this.portfolios = new PortfoliosService(this.request);
        this.projectBriefs = new ProjectBriefsService(this.request);
        this.projectMemberships = new ProjectMembershipsService(this.request);
        this.projects = new ProjectsService(this.request);
        this.projectStatuses = new ProjectStatusesService(this.request);
        this.projectTemplates = new ProjectTemplatesService(this.request);
        this.sections = new SectionsService(this.request);
        this.statusUpdates = new StatusUpdatesService(this.request);
        this.stories = new StoriesService(this.request);
        this.tags = new TagsService(this.request);
        this.tasks = new TasksService(this.request);
        this.teamMemberships = new TeamMembershipsService(this.request);
        this.teams = new TeamsService(this.request);
        this.timePeriods = new TimePeriodsService(this.request);
        this.typeahead = new TypeaheadService(this.request);
        this.users = new UsersService(this.request);
        this.userTaskLists = new UserTaskListsService(this.request);
        this.webhooks = new WebhooksService(this.request);
        this.workspaceMemberships = new WorkspaceMembershipsService(this.request);
        this.workspaces = new WorkspacesService(this.request);
    }
}

