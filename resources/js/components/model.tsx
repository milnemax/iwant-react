import { useEffect } from "react"

export default function Modal({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="w-full max-w-[335px] lg:max-w-4xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto">
                {children}
            </div>
        </div>
    )
}