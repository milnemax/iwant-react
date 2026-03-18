export type * from './admin';
export type * from './auth';
export type * from './navigation';
export type * from './contacts';
export type * from './lists';

import type { Auth } from './auth';

export type SharedData = {
    name: string;
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
};

export interface DashboardProps extends SharedData {
    contactsCount: number;
    offerNotifications: boolean;
    privateListsCount: number;
    publishedListsCount: number;
    publishNotifications: boolean;
    sharedListsCount: number;
    shoppingItemsCount: number;
    toBuyItemsCount: number;
};
