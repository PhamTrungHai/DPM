import * as BaseApi from 'dpm-shared/api';
import { Identifiable } from 'dpm-shared/types';

export type Workflow = {
    index?: number;
    description?: string;
    title?: string;
    titleEn?: string;
} & Identifiable;

type GetAllResponse = {
    data: {
        items: Workflow[];
    };
};

const BASE_API_URL = '/workflows/v1/WorkflowStatuses';

export async function getAll(
    params?: Record<string, unknown>,
    signal?: AbortSignal
): Promise<GetAllResponse> {
    return BaseApi.get<GetAllResponse>(BASE_API_URL, params, signal);
}
export async function getOne(id: Workflow['id'], signal?: AbortSignal): Promise<Workflow> {
    return BaseApi.get<Workflow>(`${BASE_API_URL}/${id}`, undefined, signal);
}
export async function createOne(
    data: Omit<Workflow, 'id'>,
    signal?: AbortSignal
): Promise<Workflow> {
    return BaseApi.post<Workflow, Omit<Workflow, 'id'>>(BASE_API_URL, data, signal);
}
export async function updateOne(
    id: Workflow['id'],
    data: Partial<Omit<Workflow, 'id'>>,
    signal?: AbortSignal
): Promise<Workflow> {
    return BaseApi.put<Workflow, Partial<Omit<Workflow, 'id'>>>(
        `${BASE_API_URL}/${id}`,
        data,
        signal
    );
}
export async function deleteOne(id: Workflow['id'], signal?: AbortSignal): Promise<void> {
    return BaseApi.del<void>(`${BASE_API_URL}/${id}`, signal);
}
