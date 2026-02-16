export default function Loading() {
    return (
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center gap-4">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="text-white font-medium animate-pulse">Chargement...</p>
        </div>
    )
}
