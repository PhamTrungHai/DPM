import { BaseApi } from 'dpm-shared/api';
import { Identifiable } from 'dpm-shared/types';

type Menu = {
    order: number;
    title: string;
    classIcon: string;
    refUrl: string;
} & Identifiable;

export class MenuController extends BaseApi<Menu> {
    constructor(signal: AbortSignal) {
        super('/menu', 1, signal);
    }
    async getAll(params?: Record<string, unknown>): Promise<Menu> {
        return this.get<Menu>('/', params);
    }
    async getOne(id: Menu['id']): Promise<Menu> {
        return this.get<Menu>(`/${id}`);
    }
    async createOne(data: Omit<Menu, 'id'>): Promise<Menu> {
        return this.post<Menu, Omit<Menu, 'id'>>('/', data);
    }
    async updateOne(id: Menu['id'], data: Partial<Omit<Menu, 'id'>>): Promise<Menu> {
        return this.put<Menu, Partial<Omit<Menu, 'id'>>>(`/${id}`, data);
    }
    async deleteOne(id: Menu['id']): Promise<void> {
        return this.delete<void>(`/${id}`);
    }
}
