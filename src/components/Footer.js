import Image from "next/image";

export default function Footer({ onOpenModal }) {
    return (
        <footer className="bg-white border-t border-slate-100 py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 text-center md:text-left bg-slate-50 p-6 md:p-8 rounded-[2rem]">
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2 opacity-50">
                            <span className="font-bold text-lg tracking-tight text-slate-900">Kaika AI</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                            Help shape Kaika AI from the beginning.
                        </h2>
                        <ul className="text-sm md:text-base text-slate-600 font-medium space-y-1 mb-2">
                            <li>✨ Test Kaika AI before public launch</li>
                            <li>🧭 Influence features and direction</li>
                            <li>💡 Receive exclusive insights on purpose and alignment</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2 shrink-0">
                        <button
                            onClick={onOpenModal}
                            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-sm md:text-base shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 active:scale-95"
                        >
                            Join Early Access
                        </button>
                        <span className="text-xs text-slate-400 font-medium tracking-wide">No spam. Leave anytime.</span>
                    </div>
                </div>

                {/* Org Teaser */}
                <div className="text-center mb-8 px-4">
                    {/* (Optional spacer or decoration can go here if needed, or remove this wrapper if unused) */}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Organization?</span>
                        <span>Want to bring Kaika to your team?</span>
                        <a href="/b2b" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors flex items-center gap-1">
                            Launch a Pilot <span className="text-xs">→</span>
                        </a>
                    </div>
                    <div className="text-xs text-slate-400">
                        © 2024 Kaika AI. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}
