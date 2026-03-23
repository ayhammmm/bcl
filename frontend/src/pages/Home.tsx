interface HomeProps {
    language: 'en' | 'ar';
}

const Home = ({ language }: HomeProps) => {
    const isAr = language === 'ar';

    return (
        <div dir={isAr ? 'rtl' : 'ltr'}>
            {/* Hero Section - بدون لوجو، خلفية صورة */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image - حطي صورة هنا */}
                <div className="absolute inset-0">
                    <img
                        src="/images/hero/cityscape.jpg"
                        alt="BCL Background"
                        className="w-full h-full object-cover"
                    />
                    {/* طبقة زرقاء شفافة فوق الصورة */}
                    <div className="absolute inset-0 bg-[#1B3A5C] opacity-70"></div>
                </div>

                {/* Diagonal stripes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5A623] opacity-10 transform skew-x-12"></div>
                </div>

                {/* Content - بدون لوجو */}
                <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#F5A623]">
                        BCL GROUP
                    </h1>
                    <p className="text-2xl md:text-3xl mb-4 font-light">
                        {isAr
                            ? 'حلول هندسية وصناعية متكاملة من التصميم للتنفيذ'
                            : 'Integrated engineering and industrial solutions from design to execution'
                        }
                    </p>
                    <p className="text-lg md:text-xl opacity-80 mb-10">
                        {isAr
                            ? 'نرتقي بمشاريعكم بقوة الابتكار، جودة التصنيع، ودعم لا يتوقف'
                            : 'We elevate your projects with the power of innovation, manufacturing excellence, and continuous support'
                        }
                    </p>
                    <a href="/contact">
                        <button className="bg-[#F5A623] text-[#1B3A5C] px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#E09615] transition">
                            {isAr ? 'تواصل معنا' : 'Contact Us'}
                        </button>
                    </a>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#F5A623] py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-8 text-center text-[#1B3A5C]">
                        <div>
                            <p className="text-5xl font-bold">3</p>
                            <p className="text-xl font-semibold mt-2">
                                {isAr ? 'دول' : 'Countries'}
                            </p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">+20</p>
                            <p className="text-xl font-semibold mt-2">
                                {isAr ? 'مشروع منجز' : 'Projects Completed'}
                            </p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">4</p>
                            <p className="text-xl font-semibold mt-2">
                                {isAr ? 'شركات شريكة' : 'Partner Companies'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - نص يمين صور يسار بالعربي، عكسه بالإنجليزي */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className={`grid md:grid-cols-2 gap-12 items-center ${isAr ? 'flex-row-reverse' : ''}`}>

                        {/* النص - يمين بالعربي، يسار بالإنجليزي */}
                        <div className={isAr ? 'order-2 md:order-1' : 'order-1'}>
                            <h2 className="text-4xl font-bold text-[#1B3A5C] mb-6">BCL GROUP</h2>
                            <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                {isAr
                                    ? 'تسير BCL GROUP برؤية طموحة تُجسّد معنى التميّز في عالم الإنشاءات والصناعة، حيث تأسست المجموعة لتكون منصة متكاملة تجمع تحت مظلتها شركات رائدة تقدم حلولاً عالية المستوى في مختلف القطاعات الهندسية والصناعية.'
                                    : 'BCL GROUP operates with an ambitious vision that embodies true excellence in the construction and industrial sectors. The group was established as an integrated platform that unites leading companies under one umbrella, delivering high-level solutions across various engineering and industrial fields.'
                                }
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                {isAr
                                    ? 'وبفضل حضورنا الفعّال في تركيا والعراق والأردن، تمكّنّا من بناء شبكة أعمال قوية قادرة على تلبية احتياجات عملائنا عبر حلول شاملة.'
                                    : 'With a strong presence in Turkey, Iraq, and Jordan, we have established a solid business network capable of meeting client needs through comprehensive solutions.'
                                }
                            </p>
                            <a href="/about">
                                <button className="bg-[#1B3A5C] text-white px-8 py-3 rounded-lg hover:bg-[#2C5282] transition font-bold">
                                    {isAr ? 'اقرأ أكثر' : 'Read More'}
                                </button>
                            </a>
                        </div>

                        {/* الصور - يسار بالعربي، يمين بالإنجليزي */}
                        <div className={`grid grid-cols-2 gap-4 ${isAr ? 'order-1 md:order-2' : 'order-2'}`}>
                            <img src="/images/about/project1.jpg" alt="Project 1" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                            <img src="/images/about/project2.jpg" alt="Project 2" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                            <img src="/images/about/project3.jpg" alt="Project 3" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                            <img src="/images/about/project4.jpg" alt="Project 4" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#1B3A5C] text-center mb-4">
                        {isAr ? 'خدماتنا' : 'Our Services'}
                    </h2>
                    <div className="w-24 h-1 bg-[#F5A623] mx-auto mb-12"></div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Construction */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
                            <div className="relative overflow-hidden h-56">
                                <img src="/images/construction/medical-park.jpg" alt="Construction" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                <div className="absolute inset-0 bg-[#1B3A5C] opacity-40"></div>
                                <span className="absolute bottom-4 left-4 text-4xl">🏗️</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#1B3A5C] mb-3">
                                    {isAr ? 'مجال الإنشاءات' : 'Construction Field'}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {isAr
                                        ? 'مشاريع إنشائية متكاملة: مستشفيات، فلل، مراكز تجارية في تركيا والعراق'
                                        : 'Comprehensive construction projects: hospitals, villas, commercial centers in Turkey and Iraq'
                                    }
                                </p>
                                <a href="/services" className="text-[#F5A623] font-bold hover:text-[#1B3A5C] transition">
                                    {isAr ? 'اعرف أكثر ←' : 'Learn More →'}
                                </a>
                            </div>
                        </div>

                        {/* Cranes */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
                            <div className="relative overflow-hidden h-56">
                                <img src="/images/cranes/crane1.jpg" alt="Cranes" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                <div className="absolute inset-0 bg-[#1B3A5C] opacity-40"></div>
                                <span className="absolute bottom-4 left-4 text-4xl">🏭</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#1B3A5C] mb-3">
                                    {isAr ? 'مجال الرافعات' : 'Crane Field'}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {isAr
                                        ? 'حلول رافعات صناعية عالية الجودة من 1 طن حتى 10 أطنان'
                                        : 'High-quality industrial crane solutions from 1 to 10 tons'
                                    }
                                </p>
                                <a href="/services" className="text-[#F5A623] font-bold hover:text-[#1B3A5C] transition">
                                    {isAr ? 'اعرف أكثر ←' : 'Learn More →'}
                                </a>
                            </div>
                        </div>

                        {/* Machinery */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
                            <div className="relative overflow-hidden h-56">
                                <img src="/images/machinery/plasma-pi.jpg" alt="Machinery" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                <div className="absolute inset-0 bg-[#1B3A5C] opacity-40"></div>
                                <span className="absolute bottom-4 left-4 text-4xl">⚙️</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#1B3A5C] mb-3">
                                    {isAr ? 'الماكينات الصناعية' : 'Industrial Machinery'}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {isAr
                                        ? 'خطوط قطع البلازما CNC المتطورة لقطع الفولاذ والألمنيوم بدقة عالية'
                                        : 'Advanced CNC plasma cutting lines for cutting steel and aluminum with high precision'
                                    }
                                </p>
                                <a href="/services" className="text-[#F5A623] font-bold hover:text-[#1B3A5C] transition">
                                    {isAr ? 'اعرف أكثر ←' : 'Learn More →'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-[#1B3A5C] text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4 text-[#F5A623]">
                        {isAr ? 'أبرز مشاريعنا' : 'Featured Projects'}
                    </h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { img: '/images/construction/medical-park.jpg', nameAr: 'مستشفى ميديكال بارك بنديك', nameEn: 'Medical Park Pendik Hospital', locAr: 'إسطنبول، تركيا', locEn: 'Istanbul, Turkey' },
                            { img: '/images/construction/imam-zain.jpg', nameAr: 'مستشفى الإمام زين العابدين', nameEn: 'Imam Zain El Abidine Hospital', locAr: 'كربلاء، العراق', locEn: 'Karbala, Iraq' },
                            { img: '/images/construction/queen-villas.jpg', nameAr: 'فلل كوين', nameEn: 'Queen Villas', locAr: 'إسطنبول، تركيا', locEn: 'Istanbul, Turkey' }
                        ].map((p, i) => (
                            <div key={i} className="rounded-lg overflow-hidden hover:scale-105 transition duration-300">
                                <img src={p.img} alt={p.nameEn} className="w-full h-48 object-cover" />
                                <div className="p-4 bg-[#2C5282]">
                                    <h3 className="font-bold text-lg text-[#F5A623]">{isAr ? p.nameAr : p.nameEn}</h3>
                                    <p className="text-gray-300 text-sm">📍 {isAr ? p.locAr : p.locEn}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#1B3A5C] text-center mb-4">
                        {isAr ? 'شركاؤنا' : 'Our Partners'}
                    </h2>
                    <div className="w-24 h-1 bg-[#F5A623] mx-auto mb-12"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { src: '/images/partners/mertsan.png', name: 'Mertsan Global' },
                            { src: '/images/partners/ozcanlar.png', name: 'Özcanlar' },
                            { src: '/images/partners/sahin-cnc.png', name: 'Şahin CNC' },
                            { src: '/images/partners/tria.png', name: 'Tria' }
                        ].map((p, i) => (
                            <div key={i} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
                                <img src={p.src} alt={p.name} className="h-20 object-contain grayscale hover:grayscale-0 transition" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#F5A623]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-[#1B3A5C] mb-6">
                        {isAr ? 'هل لديك مشروع؟' : 'Have a Project?'}
                    </h2>
                    <p className="text-xl text-[#1B3A5C] mb-8 max-w-2xl mx-auto">
                        {isAr
                            ? 'تواصل معنا الآن ونحن سنساعدك في تحقيق مشروعك بأعلى معايير الجودة'
                            : 'Contact us now and we will help you achieve your project with the highest quality standards'
                        }
                    </p>
                    <a href="/contact">
                        <button className="bg-[#1B3A5C] text-white px-10 py-4 rounded-lg hover:bg-[#2C5282] transition font-bold text-xl">
                            {isAr ? 'تواصل معنا' : 'Contact Us'}
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;