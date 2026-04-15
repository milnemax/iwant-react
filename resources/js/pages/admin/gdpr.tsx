import {Head, usePage} from '@inertiajs/react';

import type { PaginatedGdprRecords } from '@/types';

import AdminNav from '@/components/admin-nav';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import GdprSearchForm from '@/components/forms/admin/gdpr-search-form';
import Pagination from '@/components/pagination';

import { formatDate } from '@/lib/utils';

type PageProps = {
    results: PaginatedGdprRecords,
}

export default function Gdpr() {
    const { results } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Contacts">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-4 text-center">Admin - GDPR Logs</h1>
                    <AdminNav />

                    <GdprSearchForm />

                    <table class="table-auto w-full max-w-[335px] lg:max-w-4xl mb-2">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Identifier</th>
                                <th colSpan="2">Event</th>
                            </tr>
                        </thead>
                        <tbody>
                        {results.data.map((gdprRecord, index) => (
                            <tr key={index}>
                                <td className="text-center pt-1">{formatDate(gdprRecord.created_at)}</td>
                                <td className="pt-1">{gdprRecord.identifier.substring(0, 8) + '...'}</td>
                                <td className="pt-1" colSpan="2">{gdprRecord.event}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <Pagination links={results.links} />
                </main>

                <AppFooter />
            </div>
        </>
    );
}