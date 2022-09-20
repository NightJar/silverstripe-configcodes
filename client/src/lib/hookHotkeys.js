import { createContext, useContext } from 'react';

export const HotKeyRegistrar = createContext(null);

export const useHotKey = () => useContext(HotKeyRegistrar);
