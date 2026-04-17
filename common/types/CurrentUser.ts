import { TenantUser } from "./TenantUser"


export type CurrentUser = TenantUser & {
    accessToken: string,
    tenantId?: string
}