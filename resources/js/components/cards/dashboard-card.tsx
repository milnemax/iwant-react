import type { ReactNode } from "react";

import type { LucideIcon } from "lucide-react";
import { Link } from "@inertiajs/react";

interface DashboardCardProps {
    children: ReactNode,
    ctaText: string,
    icon: LucideIcon,
    linkTarget: RouteLocation,
    linkTitle: string,
}

export default function DashboardCard({ children, ctaText, icon: Icon, linkTarget, linkTitle }: DashboardCardProps) {
    return (
        <Link href={linkTarget} title={linkTitle}
           className="group bg-white shadow-lg rounded-lg flex flex-col cursor-pointer hover:bg-gray-100">
            <Icon className="mx-auto h-32 w-32 text-gray-300 mt-4" />
            <div className="flex-grow text-center p-2">
                {children}
            </div>
            <p className="text-center text-white rounded-b-lg border border-[#336b87] bg-[#336b87] py-2 px-3 group-hover:text-gray-300">{ctaText}</p>
        </Link>
    );
}


