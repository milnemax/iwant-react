import {Head, usePage} from '@inertiajs/react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import DashboardCard from '@/components/cards/dashboard-card';
import { BookOpen, ClipboardList, ContactRound, ShoppingCart, User } from 'lucide-react'
import { contacts, details, lists, sharedLists, shoppingList } from '@/routes';
import type { DashboardProps } from '@/types';

export default function Dashboard() {
    const {
        auth,
        contactsCount,
        offerNotifications,
        privateListsCount,
        publishedListsCount,
        publishNotifications,
        sharedListsCount,
        shoppingItemsCount,
        toBuyItemsCount,
    } = usePage<DashboardProps>().props;

    return (
        <>
            <Head title="Dashboard">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-1 text-center">Welcome Back {auth.user.name}</h1>
                    <p className="mb-4 text-center">Manage all aspects of your account using the information and links below:</p>

                    <div className="w-full max-w-[335px] lg:max-w-4xl grid sm:grid-cols-2 gap-4 my-4">
                        <DashboardCard ctaText="Your Shopping List" icon={ShoppingCart} linkTarget={shoppingList()} linkTitle="Manage Your Shopping List">
                            <p>{shoppingItemsCount} Item{shoppingItemsCount === 1 ? '' : 's'}</p>
                            {toBuyItemsCount > 0 && (
                                <p className="text-red-700">{toBuyItemsCount} Item{toBuyItemsCount === 1 ? '' : 's'}</p>
                            )}
                        </DashboardCard>

                        <DashboardCard ctaText="Lists Shared With You" icon={BookOpen} linkTarget={sharedLists()} linkTitle="Lists Shared With You">
                            <p>{sharedListsCount} List{sharedListsCount === 1 ? '' : 's'}</p>
                        </DashboardCard>

                        <DashboardCard ctaText="Manage Your Lists" icon={ClipboardList} linkTarget={lists()} linkTitle="Manage Your Lists">
                            <p className="text-green-700">{publishedListsCount} Shared  List{publishedListsCount === 1 ? '' : 's'}</p>
                            <p className="text-red-700">{privateListsCount} Private List{privateListsCount === 1 ? '' : 's'}</p>
                        </DashboardCard>

                        <DashboardCard ctaText="Manage Your Contacts" icon={ContactRound} linkTarget={contacts()} linkTitle="Manage Your Contacts">
                            <p>{contactsCount} Contact{contactsCount === 1 ? '' : 's'}</p>
                        </DashboardCard>

                        <DashboardCard ctaText="Manage Your Details" icon={User} linkTarget={details()} linkTitle="Manage Your Details">
                            {publishNotifications ? (
                                <p className="text-green-700">Receive Publish Notifications</p>
                            ) : (
                                <p className="text-red-700">Do Not Receive Publish Notifications</p>
                            )}

                            {offerNotifications ? (
                                <p className="text-green-700">Receive Offer Notifications</p>
                            ) : (
                                <p className="text-red-700">Do Not Receive Offer Notifications</p>
                            )}
                        </DashboardCard>
                    </div>
                </main>

                <AppFooter />
            </div>
        </>
    );
}