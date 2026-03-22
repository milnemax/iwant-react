import {ListContact} from "@/types/contacts";
import {PaginationLink} from "@/types/index";

// All Lists
export type ListType = {
    id: number
    name: string
}

export type ListItemCategory = {
    id: number
    name: string
}

export type ListItemOffer = {
    name: string
    message: string
}


// Users List
export type List = {
    id: number
    name: string
    due_date: string
    list_type: ListType
}

export type PaginatedLists = {
    data: List[]
    links: PaginationLink[]
}


export type ListItem = {
    id: number
    wish_list_id: number
    name: string
    url: string
    description: string
    list_item_category: ListItemCategory
}

export type PaginatedListItems = {
    data: ListItem[]
    links: PaginationLink[]
}


// Users Shopping List
export type ShoppingList = {
    id: number
    name: string
    description: string
    items: ShoppingListItem[]
}

export type ShoppingListItem = {
    listItem: ListItem
    bought: boolean
    offers: ListItemOffer[]
}


// Shared Lists
export type SharedList = {
    id: number
    name: string
    owner: string
    due_date: string
    list_type: ListType
    contacts: ListContact[]
}

export type PaginatedSharedLists = {
    data: SharedList[]
    links: PaginationLink[]
}


export type SharedListItem = {
    listItem: ListItem
    claimedBy: number
    offerByViewer: boolean
    offers: ListItemOffer[]
}
