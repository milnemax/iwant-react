export type GdprRecord = {
    identifier: string
    event: string
    created_at: string
}

export type PaginationLink = {
    url: string | null
    label: string
    active: boolean
}

export type PaginatedGdprRecords = {
    data: GdprRecord[]
    links: PaginationLink[]
}