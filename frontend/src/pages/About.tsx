interface AboutProps {
    language: 'en' | 'ar';
}

const About = ({ language }: AboutProps) => {
    const isAr = language === 'ar';

    return (
        <div className="bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-[#1B3A5C] text-white py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#F5A623] mb-4">
                        {isAr ? 'من نحن' : 'About Us'}
                    </h1>
                    <p className="text-xl opacity-90 max-w-4xl mx-auto">
                        {isAr
                            ? 'حلول هندسية وصناعية متكاملة من التصميم للتنفيذ. نرتقي بمشاريعكم بقوة الابتكار، جودة التصنيع، ودعم لا يتوقف.'
                            : 'Integrated engineering and industrial solutions from design to execution. We elevate your projects with the power of innovation, manufacturing excellence, and continuous support.'
                        }
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Main Content - النص يمين والصور يسار بالعربي، والعكس بالإنجليزي */}
                <div className={`grid md:grid-cols-2 gap-12 items-start mb-16 ${isAr ? 'direction-rtl' : ''}`}>
                    
                    {/* النص */}
                    <div className={`space-y-6 text-gray-700 leading-relaxed text-lg ${isAr ? 'order-2 text-right' : 'order-1 text-left'}`}>
                        <p>
                            {isAr
                                ? 'تسير BCL GROUP برؤية طموحة تُجسّد معنى التميّز في عالم الإنشاءات والصناعة، حيث تأسست المجموعة لتكون منصة متكاملة تجمع تحت مظلتها شركات رائدة تقدم حلولاً عالية المستوى في مختلف القطاعات الهندسية والصناعية.'
                                : 'BCL GROUP operates with an ambitious vision that embodies true excellence in the construction and industrial sectors. The group was established as an integrated platform that unites leading companies under one umbrella, delivering high-level solutions across various engineering and industrial fields.'
                            }
                        </p>
                        <p>
                            {isAr
                                ? 'نؤمن بأن قوة المستقبل تُبنى عبر الابتكار والجودة والموثوقية، ولذلك نعمل على تطوير وتنفيذ مشاريع ترتقي بمعايير الأداء وتفتح آفاقًا جديدة في البناء وتطوير الصناعات.'
                                : 'We believe that the strength of the future is built through innovation, quality, and reliability. For that reason, we focus on developing and executing projects that elevate performance standards and open new horizons in construction and industrial development.'
                            }
                        </p>
                        <p>
                            {isAr
                                ? 'تقدم BCL GROUP مجموعة واسعة من الخدمات تشمل مشاريع الإنشاءات والبنية التحتية، بالإضافة إلى تصميم وتصنيع المعدات الصناعية والآلات المتقدمة وخطوط الإنتاج، مستندة إلى خبرة تقنية عميقة وفريق متخصص يضمن أعلى مستويات الدقة والاحتراف.'
                                : 'BCL GROUP offers a wide range of services, including construction and infrastructure projects, as well as the design and manufacturing of advanced industrial equipment, machinery, and production lines, supported by deep technical expertise and a specialized team committed to precision and professionalism.'
                            }
                        </p>
                    </div>

                    {/* الصور */}
                    <div className={`grid grid-cols-2 gap-4 ${isAr ? 'order-1' : 'order-2'}`}>
                        <img src="/images/about/project1.jpg" alt="Project 1" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                        <img src="/images/about/project2.jpg" alt="Project 2" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                        <img src="/images/about/project3.jpg" alt="Project 3" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                        <img src="/images/about/project4.jpg" alt="Project 4" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                    </div>
                </div>

                {/* Additional Content */}
                <div className={`bg-white p-8 rounded-lg shadow-lg space-y-6 text-gray-700 leading-relaxed text-lg mb-16 ${isAr ? 'text-right' : 'text-left'}`}>
                    <p>
                        {isAr
                            ? 'وبفضل حضورنا الفعّال في تركيا والعراق والأردن، تمكّنّا من بناء شبكة أعمال قوية قادرة على تلبية احتياجات عملائنا عبر حلول شاملة تبدأ من دراسة المشروع، مرورًا بإدارته وتنفيذه، وصولاً إلى خدمات ما بعد البيع التي تشمل التنصيب والصيانة والدعم الفني المستمر.'
                            : 'With a strong presence in Turkey, Iraq, and Jordan, we have established a solid business network capable of meeting client needs through comprehensive solutions—starting from project assessment, followed by management and execution, and extending to after-sales services such as installation, maintenance, and ongoing technical support.'
                        }
                    </p>
                    <p>
                        {isAr
                            ? 'تعمل BCL GROUP بروح التوسع والنمو، مع الاستعداد الدائم لضم شركات جديدة إلى منظومتها، مما يعزز قدرتها على توفير خدمات متكاملة تحت علامة تجارية واحدة تتميز بالقوة، الثقة، والرؤية المستقبلية.'
                            : 'BCL GROUP continues to expand and grow, always ready to integrate new companies into its ecosystem. This strengthens its ability to provide fully integrated services under a single brand defined by strength, trust, and a forward-looking vision.'
                        }
                    </p>
                    <p className="font-semibold text-[#1B3A5C] text-xl">
                        {isAr
                            ? 'بجودة تُرى… وابتكار يُلمس… وشراكات تُثمر، تواصل BCL GROUP ترسيخ مكانتها كخيار أول للمشاريع التي تتطلب أعلى مستويات الاحتراف والتميز.'
                            : 'With quality you can see, innovation you can feel, and partnerships that deliver results, BCL GROUP remains a leading choice for projects that demand the highest levels of professionalism and excellence.'
                        }
                    </p>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className={`bg-[#1B3A5C] text-white p-8 rounded-lg shadow-lg ${isAr ? 'text-right' : 'text-left'}`}>
                        <h3 className="text-3xl font-bold text-[#F5A623] mb-4">
                            {isAr ? 'رؤيتنا' : 'Our Vision'}
                        </h3>
                        <p className="text-lg leading-relaxed">
                            {isAr
                                ? 'أن نكون الخيار الأول في تقديم حلول هندسية وصناعية متكاملة تجمع بين الابتكار والجودة والموثوقية'
                                : 'To be the first choice in providing integrated engineering and industrial solutions that combine innovation, quality, and reliability'
                            }
                        </p>
                    </div>
                    <div className={`bg-[#F5A623] text-white p-8 rounded-lg shadow-lg ${isAr ? 'text-right' : 'text-left'}`}>
                        <h3 className="text-3xl font-bold mb-4">
                            {isAr ? 'مهمتنا' : 'Our Mission'}
                        </h3>
                        <p className="text-lg leading-relaxed">
                            {isAr
                                ? 'تطوير وتنفيذ مشاريع ترتقي بمعايير الأداء وتفتح آفاقاً جديدة في البناء وتطوير الصناعات'
                                : 'Developing and implementing projects that elevate performance standards and open new horizons in construction and industrial development'
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;