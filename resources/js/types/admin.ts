import {PaginationLink} from "@/types/index";

export type GdprRecord = {
    identifier: string
    event: string
    created_at: string
}

export type PaginatedGdprRecords = {
    data: GdprRecord[]
    links: PaginationLink[]
}