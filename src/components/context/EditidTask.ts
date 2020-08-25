import { createContext } from 'react';

const EditidTask = createContext<((id: string | null, value: string) => void) | null>(null);

export default EditidTask;
