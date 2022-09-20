import { createContext, useContext } from 'react';

export const ShortcodeConfig = createContext(null);

export const useShortcodes = () => useContext(ShortcodeConfig);
