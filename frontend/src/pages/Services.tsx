interface ServicesProps {
    language: 'en' | 'ar';
}

const Services = ({ language }: ServicesProps) => {
    const isAr = language === 'ar';

    return (
        <div className="bg-gray-50 pb-20" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="bg-[#1B3A5C] text-white py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#F5A623]">
                        {isAr ? 'خدماتنا' : 'Our Services'}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 space-y-20">

                {/* Construction */}
                <section>
                    <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 border-b-4 border-[#F5A623] pb-2 inline-block">
                        {isAr ? 'مجال الإنشاءات' : 'Construction Field'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { img: '/images/construction/medical-park.jpg', nameAr: 'مستشفى ميديكال بارك بنديك', nameEn: 'Medical Park Pendik Hospital', locAr: 'إسطنبول / تركيا', locEn: 'Istanbul / Turkey', serviceAr: 'أعمال التركيبات الميكانيكية', serviceEn: 'Mechanical Installation' },
                            { img: '/images/construction/imam-zain.jpg', nameAr: 'مستشفى الإمام زين العابدين', nameEn: 'Imam Zain El Abidine Hospital', locAr: 'كربلاء / العراق', locEn: 'Karbala / Iraq', serviceAr: 'إنشاءات – ميكانيك – كهرباء – تجهيزات طبية', serviceEn: 'Construction - Mechanic - Electric - Medical' },
                            { img: '/images/construction/queen-villas.jpg', nameAr: 'فلل كوين', nameEn: 'Queen Villas', locAr: 'إسطنبول / تركيا', locEn: 'Istanbul / Turkey', serviceAr: 'إنشاءات – ميكانيك – كهرباء', serviceEn: 'Construction - Mechanic - Electric' },
                            { img: '/images/construction/cevahir.jpg', nameAr: 'مول جواهر', nameEn: 'Cevahir AVM', locAr: 'إسطنبول / تركيا', locEn: 'Istanbul / Turkey', serviceAr: 'أعمال التركيبات الميكانيكية', serviceEn: 'Mechanical Installation' },
                            { img: '/images/construction/mercedes.jpg', nameAr: 'مرسيدس بنز وادي إسطنبول', nameEn: 'Mercedes Benz Vadi Istanbul', locAr: 'إسطنبول / تركيا', locEn: 'Istanbul / Turkey', serviceAr: 'أعمال التركيبات الميكانيكية', serviceEn: 'Mechanical Installation' },
                            { img: '/images/construction/biofarma.jpg', nameAr: 'مصنع بيوفارما للأدوية', nameEn: 'Biofarma Pharma', locAr: 'إسطنبول / تركيا', locEn: 'Istanbul / Turkey', serviceAr: 'إنشاءات – ميكانيك – كهرباء – تجهيزات طبية', serviceEn: 'Construction - Mechanic - Electric - Medical' }
                        ].map((project, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                                <img src={project.img} alt={project.nameEn} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">{isAr ? project.nameAr : project.nameEn}</h3>
                                    <p className="text-gray-600 mb-1">📍 {isAr ? project.locAr : project.locEn}</p>
                                    <p className="text-sm text-gray-500">🔧 {isAr ? project.serviceAr : project.serviceEn}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cranes */}
                <section>
                    <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 border-b-4 border-[#F5A623] pb-2 inline-block">
                        {isAr ? 'مجال الرافعات' : 'Crane Field'}
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {isAr
                                ? 'شركة Özcanlar Vinç Makine متخصصة في تقديم حلول الرافعات والمعدات الثقيلة عالية الجودة. تتميز الشركة بتوفير منتجات مبتكرة وخدمات متكاملة تلبي احتياجات العملاء في مجالات البناء والصناعة والنقل.'
                                : 'Özcanlar Vinç Makine is a specialized company providing high-quality crane solutions and heavy equipment. The company offers innovative products and comprehensive services designed to meet the needs of the construction, industrial, and transportation sectors.'
                            }
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { img: '/images/cranes/crane1.jpg', nameAr: 'مديرية المياه الحكومية', nameEn: 'State Hydraulic Works', locAr: 'أنطاليا', locEn: 'Antalya', work: '5 tons / 8 m' },
                            { img: '/images/cranes/crane2.jpg', nameAr: 'شركة سوليون للبطاريات', nameEn: 'Solion Battery Inc', locAr: 'أنطاليا', locEn: 'Antalya', work: '1 ton / 5 m' },
                            { img: '/images/cranes/crane3.jpg', nameAr: 'بروسيس لأنظمة التكييف', nameEn: 'Proses Air Conditioning', locAr: 'أنطاليا', locEn: 'Antalya', work: '5 tons / 7.5 m' },
                            { img: '/images/cranes/crane4.jpg', nameAr: 'مي-تي لقص المعادن', nameEn: 'Me-te Guillotine Metal', locAr: 'أنطاليا', locEn: 'Antalya', work: '10 tons / 12 m' },
                            { img: '/images/cranes/crane5.jpg', nameAr: 'أوتو دوغو للبلاستيك', nameEn: 'OtoDogu Plastic', locAr: 'أنطاليا', locEn: 'Antalya', work: '3 tons / 24 m' },
                            { img: '/images/cranes/crane6.jpg', nameAr: 'ميكوسير سيستم', nameEn: 'Mekoser System', locAr: 'أنطاليا', locEn: 'Antalya', work: '10 tons / 16 m' },
                        ].map((project, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                                <img src={project.img} alt={project.nameEn} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">{isAr ? project.nameAr : project.nameEn}</h3>
                                    <p className="text-gray-600 mb-1">📍 {isAr ? project.locAr : project.locEn}</p>
                                    <p className="text-sm text-gray-500">⚖️ {project.work}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Machinery */}
                <section>
                    <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 border-b-4 border-[#F5A623] pb-2 inline-block">
                        {isAr ? 'مجال الماكينات الصناعية' : 'Industrial Machinery Field'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="/images/machinery/plasma-pi.jpg" alt="PI Plasma" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#1B3A5C] mb-4">PI Plasma Profile Cutting Line</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {isAr
                                        ? 'خط قص صناعي متطور يعتمد تكنولوجيا البلازما عالية الدقة لتشكيل وقطع الصفائح المعدنية بمختلف سماكاتها. يقدم الخط منظومة متكاملة تشمل طاولة قطع CNC، نظام تحكم ذكي، رأس قطع بلازمي عالي الطاقة.'
                                        : 'An advanced industrial cutting line that relies on high-precision plasma technology for shaping and cutting metal sheets of various thicknesses. The line offers an integrated system including a CNC cutting table, intelligent control system, and high-power plasma cutting head.'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="/images/machinery/plasma-po.jpg" alt="PO CNC" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#1B3A5C] mb-4">PO CNC Plasma Cutting Machine</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {isAr
                                        ? 'ماكينة قص احترافية تعتمد تكنولوجيا البلازما المتقدمة لإجراء عمليات قطع دقيقة وسريعة على مختلف أنواع الصفائح المعدنية. تتميز بنظام تحكم رقمي CNC عالي الكفاءة وجودة قطع استثنائية.'
                                        : 'A professional cutting machine that relies on advanced plasma technology to perform precise and fast cutting operations on various types of metal sheets, featuring a high-efficiency CNC digital control system and exceptional cutting quality.'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Services;