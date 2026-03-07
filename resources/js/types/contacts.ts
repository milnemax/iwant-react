export type Contact = {
    id: number
    name: string
    email: string
    unsubscribed: boolean
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