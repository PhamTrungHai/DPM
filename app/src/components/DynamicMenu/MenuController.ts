import * as BaseApi from 'dpm-shared/api';
import { Identifiable } from 'dpm-shared/types';

type Menu = {
    order: number;
    title: string;
    classIcon: string;
    refUrl: string;
} & Identifiable;

export class MenuController {
    async getAll(params?: Record<string, unknown>): Promise<Menu> {
        return BaseApi.get<Menu>('/menu', params);
    }
    async getOne(id: Menu['id']): Promise<Menu> {
        return BaseApi.get<Menu>(`/menu/${id}`);
    }
    async createOne(data: Omit<Menu, 'id'>): Promise<Menu> {
        return BaseApi.post<Menu, Omit<Menu, 'id'>>('/menu', data);
    }
    async updateOne(id: Menu['id'], data: Partial<Omit<Menu, 'id'>>): Promise<Menu> {
        return BaseApi.put<Menu, Partial<Omit<Menu, 'id'>>>(`/menu/${id}`, data);
    }
    async deleteOne(id: Menu['id']): Promise<void> {
        return BaseApi.del<void>(`/menu/${id}`);
    }
}
