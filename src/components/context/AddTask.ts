import { createContext } from 'react';

const AddTask = createContext<((value: string) => void) | null>(null);

export default AddTask;
