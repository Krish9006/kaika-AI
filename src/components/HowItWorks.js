export default function HowItWorks() {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 bg-slate-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">A simple path from confusion to clarity</h2>
                    <p className="text-slate-600 max-w-lg mx-auto text-lg font-medium">Guided reflection. Personalized synthesis. Practical action.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200" />

                    {[
                        { step: "01", title: "Reflect", icon: "🌱", desc: "Guided questions help you explore what you care about, what drains you, and what gives you energy — at your own pace." },
                        { step: "02", title: "Synthesize", icon: "✨", desc: "Kaika AI connects patterns across your reflections, values, strengths, and life context using the Ikigai framework." },
                        { step: "03", title: "Act", icon: "🚀", desc: "You receive small, practical actions to align your daily life with what truly matters — without overwhelm." }
                    ].map((item, i) => (
                        <div key={i} className="relative z-10 group text-center">
                            <div className="w-24 h-24 mx-auto bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center mb-8 shadow-sm group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative">
                                <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{item.icon}</span>
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-md">
                                    {item.step}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed px-4 text-base font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
