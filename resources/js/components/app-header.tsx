import { Link, usePage } from '@inertiajs/react';
import { admin, contacts, dashboard, details, home, lists, login, logout, register, privacy } from '@/routes';
import type { NavItem, SharedData } from '@/types';

import {useState} from "react";

const guestNavItems: NavItem[] = [
    {
        title: 'Login',
        href: login(),
    },
    {
        title: 'Register',
        href: register(),
    },
    {
        title: 'Privacy',
        href: privacy(),
    },
];

const userNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
    {
        title: 'Your Lists',
        href: lists(),
    },
    {
        title: 'Your Contacts',
        href: contacts(),
    },
    {
        title: 'Your Details',
        href: details(),
    },
    {
        title: 'Logout',
        href: logout(),
    },
    {
        title: 'Privacy',
        href: privacy(),
    },
];

const adminNavItems: NavItem[] = [
    {
        title: 'Admin',
        href: admin(),
    },
];

export default function AppHeader() {
    const { auth } = usePage<SharedData>().props;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#336b87] fixed top-0 right-0 left-0 z-10">
            <nav className="flex items-center justify-between gap-4 p-6 w-full">
                <Link
                    href={home()}
                    className="text-white text-3xl mr-auto"
                >
                    iWantiWant
                </Link>

                <div className="items-center justify-end gap-4 hidden md:flex">
                    {auth.user ? (
                        <>
                            {userNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-white hover:text-gray-300 cursor-pointer"
                                >
                                    {item.title}
                                </Link>
                            ))}
                            {auth.user.is_admin && (
                                <>
                                    {adminNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="text-white hover:text-gray-300 cursor-pointer"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {guestNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-white hover:text-gray-300 cursor-pointer"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </>
                    )}
                </div>

                <button
                    className="md:hidden cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="h-8 w-8 fill-white hover:fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path className="hidden" fillRule="evenodd" clipRule="evenodd"
                              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"></path>
                        <path fillRule="evenodd"
                              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>
            </nav>
            {menuOpen && (
                <div className="flex flex-col md:hidden w-full bg-white text-center">
                    {auth.user ? (
                        <>
                            {userNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-[#336b87] p-4 w-full hover:bg-gray-300 cursor-pointer"
                                >
                                    {item.title}
                                </Link>
                            ))}
                            {auth.user.is_admin && (
                                <>
                                    {adminNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="text-[#336b87] p-4 w-full hover:bg-gray-300 cursor-pointer"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {guestNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-[#336b87] p-4 w-full hover:bg-gray-300 cursor-pointer"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </>
                    )}
                </div>
            )}
        </header>
    );
}
