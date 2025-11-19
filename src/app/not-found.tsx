import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center p-4 relative overflow-hidden">
                {/* Background decoration matching site theme */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] animate-blob" />
                </div>

                <div className="text-center space-y-8 max-w-2xl mx-auto relative z-10">
                    <div className="space-y-2">
                        <h1 className="text-9xl font-bold tracking-tighter text-brand/20 select-none">
                            404
                        </h1>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                            Page not found
                        </h2>
                        <p className="text-xl text-gray-600 max-w-md mx-auto">
                            The page you are looking for doesn't exist or has been moved.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-white font-medium hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:-translate-y-0.5"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Return Home
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
