import { useEffect } from 'react';
import { Counter } from 'dpm-shared/components';
import { useIndexedDB } from 'dpm-shared/indexed-db';
import './App.css';
import { useWorkflow } from './modules/workflow/hook';
import { Workflow } from './modules/workflow/api';

function App() {
    const { data } = useWorkflow();
    const { setItem, getItem, getAllKeys } = useIndexedDB<Workflow>('todoApp', 'todos', {
        version: 2,
    });

    const addWorkflow = async (data: Workflow) => {
        await setItem(data.id, data);
    };

    const loadWorkflows = async () => {
        const keys = await getAllKeys();
        const todos = await Promise.all(keys.map((key) => getItem(key)));
        console.log('From IndexedDB:', todos.filter(Boolean) as Workflow[]);
    };

    useEffect(() => {
        if (data?.data.items) {
            data.data.items.forEach(async (workflow) => {
                await addWorkflow(workflow);
            });
        }
    }, [data?.data.items, addWorkflow]);

    return (
        <>
            <h1>Vite + React</h1>
            <Counter />
            <div className="card">
                <button onClick={() => loadWorkflows()}>Load Workflow</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>

            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
