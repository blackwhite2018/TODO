import { createContext } from 'react';

const CompletedTaskContext = createContext<((id_: string | null) => void) | null>(null);

export default CompletedTaskContext;
