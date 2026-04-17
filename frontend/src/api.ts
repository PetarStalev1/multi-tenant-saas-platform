import { Note } from "@common/types/Note"
import {ReportData} from "@common/types/ReportData"
import {TenantUser} from "@common/types/TenantUser"

const apiUrl = `https://${import.meta.env.VITE_DOMAIN_NAME}`;

async function get<T>(path:string)
{
    const response = await fetch(`${apiUrl}${path}`,{
        method: 'GET'
    });
    if(!response.ok)
    {
        throw new Error(`Failed to GET from ${path}`);
    }
    return await response.json() as T;
}

async function send<T>(path: string, body: T, method: 'PUT' | 'POST' = 'POST')
{
    const response = await fetch(`${apiUrl}${path}`,{
        method,
        body: JSON.stringify(body)
    });
    if(!response.ok)
    {
        throw new Error(`Failed to ${method} to ${path}`);
    }

}
