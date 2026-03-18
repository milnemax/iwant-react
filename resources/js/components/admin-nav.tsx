import { Link } from '@inertiajs/react';
import { admin, adminGdpr } from '@/routes';

export default function AdminNav() {
    return (
        <div className="mb-6 mx-auto gap-4 flex">
            <Link
                href={admin()}
                className="text-white border border-[#336b87] bg-[#336b87] py-2 px-3 rounded cursor-pointer"
            >
                Statistics
            </Link>
            <Link
                href={adminGdpr()}
                className="text-white border border-[#336b87] bg-[#336b87] py-2 px-3 rounded cursor-pointer"
            >
                GDPR Logs
            </Link>
        </div>
    );
}
