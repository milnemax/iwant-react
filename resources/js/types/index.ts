export type * from './admin';
export type * from './auth';
export type * from './contacts';
export type * from './lists';

import type { Auth } from './auth';
import {InertiaLinkProps} from "@inertiajs/react";
import type { LucideIcon } from 'lucide-react';

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

export type PaginationLink = {
    url: string | null
    label: string
    active: boolean
}

export type NavItem = {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
};
