import { useQuery, useMutation } from '@tanstack/react-query';
import { createOne, getAll, Workflow } from './api';
import { queryClient } from '@/api/queryClient';
import { HttpError } from 'dpm-shared/api';

export function useWorkflow() {
    return useQuery({
        queryKey: ['workflows/v1'],
        queryFn: ({ signal }) => getAll(undefined, signal),
    });
}

export function useCreateWorkflow() {
    return useMutation({
        mutationFn: (data: Omit<Workflow, 'id'>) => createOne(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['workflows/v1'] });
        },
        onError: (error: HttpError) => {
            console.error('Error creating workflow:', error);
        },
    });
}
