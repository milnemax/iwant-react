import { Link, usePage } from '@inertiajs/react';
import {useState} from "react";

import { admin, contacts, dashboard, details, home, lists, login, logout, register, privacy } from '@/routes';

import { Menu } from 'lucide-react'

import type { NavItem, SharedData } from '@/types';

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
                    <Menu className="mx-auto h-8 w-8 text-white hover:text-gray-300" />
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
