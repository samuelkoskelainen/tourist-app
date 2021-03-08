import { createContext, useContext } from 'react';
import EventStore from './eventStore';

export const store = {
  eventStore: new EventStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
