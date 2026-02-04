export default function Trust() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50/50 via-white to-white pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900 tracking-tight">A Companion, Not a Replacement.</h2>

                <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
                    {/* LEFT CARD */}
                    <div className="bg-red-50/30 p-6 md:p-10 rounded-[2.5rem] border border-red-100/50 hover:border-red-200 transition-all hover:shadow-lg group">
                        <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 text-xl font-bold mb-6">✕</div>
                        <h3 className="font-bold text-xl md:text-2xl mb-6 text-slate-900">What Kaika AI is NOT</h3>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> A replacement for therapists</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> A medical diagnosis tool</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> A quick-fix solution</li>
                        </ul>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-indigo-50/30 p-6 md:p-10 rounded-[2.5rem] border border-indigo-100/50 hover:border-indigo-200 transition-all hover:shadow-lg group">
                        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-xl font-bold mb-6">✓</div>
                        <h3 className="font-bold text-xl md:text-2xl mb-6 text-slate-900">What Kaika AI IS</h3>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> A reflective companion</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> A guide for deeper questions</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> A bridge to meaning</li>
                        </ul>
                    </div>
                </div>

                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
                    <span className="text-slate-900 font-semibold">"This is about technology serving humanity—not the other way around."</span> <br />
                    We envision AI that learns ethically, always supervised, and built with human dignity at its core.
                </p>
            </div>
        </section>
    );
}
