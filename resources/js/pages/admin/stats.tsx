import {Head, usePage} from '@inertiajs/react';

import AdminNav from '@/components/admin-nav';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

type PageProps = {
    stats: Record<string, string | number>
}

export default function Stats() {
    const { stats } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Contacts">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-4 text-center">Admin - Statistics</h1>
                    <AdminNav />

                    <table className="table-auto w-full max-w-[335px] lg:max-w-4xl">
                        <thead>
                            <tr>
                                <th className="text-left">Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Object.entries(stats).map(([statName, statValue]) => (
                            statValue === 'spacer' ? (
                                <tr key={statName}>
                                    <td colSpan={2} className="py-2">
                                        <hr className="border-[#336b87]" />
                                    </td>
                                </tr>
                            ) : (
                                <tr key={statName}>
                                    <td className="pt-1">{statName}</td>
                                    <td className="text-center pt-1">{statValue}</td>
                                </tr>
                            )
                        ))}
                        </tbody>
                    </table>
                </main>

                <AppFooter />
            </div>
        </>
    );
}