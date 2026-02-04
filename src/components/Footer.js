import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 text-center md:text-left bg-slate-50 p-6 md:p-10 rounded-[2.5rem]">
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4 opacity-50">
                            <span className="font-bold text-lg tracking-tight text-slate-900">Kaika AI</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                            Ready to find your clarity?
                        </h2>
                        <p className="text-base md:text-lg text-slate-500 font-medium">
                            Join the waitlist for tools that respect your mind.
                        </p>
                    </div>
                    <button className="shrink-0 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 active:scale-95">
                        Join Early Access
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-400">
                    <p>© 2026 Kaika AI. All rights reserved.</p>

                    <div className="flex gap-8">
                        <a href="#" className="hover:text-slate-900 transition-colors">Philosophy</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">How it Works</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
