import { createContext } from 'react';

const SetFilterContext = createContext<Function | null>(null);

export default SetFilterContext;
