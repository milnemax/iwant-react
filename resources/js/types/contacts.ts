export type Contact = {
    id: number
    name: string
    email: string
    userId?: number
    unsubscribed: boolean
}

export type ListContact = {
    id: number
    name: string
    shared: boolean
    listLabel: string
    pivot: {
        code: string
    }
}

export type PaginationLink = {
    url: string | null
    label: string
    active: boolean
}

export type PaginatedContacts = {
    data: Contact[]
    links: PaginationLink[]
}