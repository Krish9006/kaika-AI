import Image from "next/image";

export default function Differentiation() {
    return (
        <section className="py-6 md:py-16 px-6 md:px-12 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* Left: Content */}
                <div className="mb-12 lg:mb-0 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-slate-900 tracking-tight leading-tight">
                        This isn't another <br />
                        <span className="text-indigo-600">productivity tool.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-medium max-w-2xl mx-auto lg:mx-0">
                        Kaika AI helps you <strong className="text-slate-900">understand yourself</strong>, not optimize your output. Through reflective journaling and psychology-backed AI, we guide you toward clarity and purpose—not just another to-do list.
                    </p>

                    <ul className="space-y-6 text-left max-w-lg mx-auto lg:mx-0">
                        {[
                            { title: "Not Just Clinical", desc: "The missing piece isn't always treatment; sometimes it's the absence of meaning.", color: "bg-blue-500" },
                            { title: "Ikigai as Healing", desc: "Finding your reason for being is essential to wellbeing—a practical path, not spiritual fluff.", color: "bg-amber-500" },
                            { title: "Human Centered", desc: "Technology serving humanity, looking inward to reconnect with your 'Why'.", color: "bg-green-500" }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 group">
                                {/* Explicit Dot Container */}
                                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <div className={`w-3 h-3 rounded-full ${item.color} shadow-sm`} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-0.5">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Illustration Area */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center group shadow-2xl delay-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-pink-50/50" />

                    <div className="relative z-10 w-full h-full p-8 md:p-12 flex items-center justify-center">
                        <div className="relative w-full h-full max-w-sm max-h-sm flex items-center justify-center">
                            <Image
                                src="/bloom-ill.png"
                                alt="Kaika Blooming"
                                fill
                                className="object-contain drop-shadow-xl"
                            />

                        </div>
                    </div>

                    <div className="absolute bottom-16 left-0 right-0 text-center">
                        <p className="text-lg lg:text-xl font-serif font-medium text-slate-900 drop-shadow-sm bg-white/60 px-6 py-2 rounded-full inline-block backdrop-blur-sm border border-white/40">"A slow, deliberate blooming."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
