export type List = {
    id: number
    name: string
    due_date: string
    list_type: ListType
}

export type ListType = {
    id: number
    name: string
}

export type PaginationLink = {
    url: string | null
    label: string
    active: boolean
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

export type ListItemCategory = {
    id: number
    name: string
}

export type PaginatedListItems = {
    data: ListItem[]
    links: PaginationLink[]
}