import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[110vh] flex flex-col pt-20 pb-0 px-6 md:px-12 overflow-hidden bg-white/50 backdrop-blur-3xl">

            {/* Subtle Gradient Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-50/50 rounded-full blur-[100px]" />
            </div>

            {/* Navigation - Aligned with Content */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50 bg-white/70 backdrop-blur-xl rounded-full px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-sm border border-white/60">
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-black/5 shadow-sm">
                        <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900">Kaika AI</span>
                </div>

                <div className="hidden md:flex items-center gap-10 bg-slate-50/80 px-10 py-3 rounded-full border border-slate-200/50 backdrop-blur-md shadow-sm">
                    <a href="#how-it-works" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">How it Works</a>
                    <a href="#about" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">About</a>
                    <a href="#contact" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Contact</a>
                </div>

                <button className="bg-slate-900 text-white px-5 py-2.5 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95">
                    Get Started
                </button>
            </nav>

            <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 md:px-0 mt-8 mb-12 lg:mb-0">

                {/* Left: Typography */}
                <div className="pl-2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Early Access Open
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] lg:leading-[0.9] mb-6 text-balance">
                        <span className="text-slate-900">Find Your</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-amber-500">
                            True North.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-normal max-w-lg mx-auto lg:mx-0">
                        A deeper path to clarity. <br />
                        <span className="text-slate-900 font-semibold">Psychology meets purpose.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="h-14 px-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 active:scale-95">
                            Begin Journey
                        </button>
                        <button className="h-14 px-10 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-bold text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                            Our Philosophy
                        </button>
                    </div>
                </div>

                {/* Right: Illustration */}
                <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center perspective-[2000px] mt-10 lg:mt-0">
                    {/* Main 3D Illustration */}
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                        <Image
                            src="/hero-ill.png"
                            alt="Mental Clarity Illustration"
                            fill
                            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
