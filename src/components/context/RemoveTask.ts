import { createContext } from 'react';

const RemoveTaskContext = createContext<((id: string | null) => void) | null>(null);

export default RemoveTaskContext;
