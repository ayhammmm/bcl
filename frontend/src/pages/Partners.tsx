interface PartnersProps {
    language: 'en' | 'ar';
}

const Partners = ({ language }: PartnersProps) => {
    const isAr = language === 'ar';

    const partners = [
        {
            name: 'Mertsan Global',
            src: '/images/partners/mertsan.png',
            descAr: 'شركة رائدة في مجال الإنشاءات والمقاولات',
            descEn: 'Leading company in construction and contracting'
        },
        {
            name: 'Özcanlar Vinç Makine',
            src: '/images/partners/ozcanlar.png',
            descAr: 'متخصصة في حلول الرافعات والمعدات الثقيلة',
            descEn: 'Specialized in crane solutions and heavy equipment'
        },
        {
            name: 'Şahin CNC',
            src: '/images/partners/sahin-cnc.png',
            descAr: 'تصنيع ماكينات قطع البلازما CNC المتطورة',
            descEn: 'Manufacturing advanced CNC plasma cutting machines'
        },
        {
            name: 'Tria',
            src: '/images/partners/tria.png',
            descAr: 'ألواح حائط شرائحية ومنتجات ديكورية عصرية',
            descEn: 'Slatted wall panels and modern decorative products'
        }
    ];

    return (
        <div className="bg-white pb-20">
            <div className="bg-[#1B3A5C] text-white py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#F5A623]">
                        {isAr ? 'شركاؤنا' : 'Our Partners'}
                    </h1>
                    <p className="mt-4 text-xl opacity-90">
                        {isAr ? 'نعمل مع أفضل الشركات العالمية' : 'We work with the best global companies'}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {partners.map((partner, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 hover:border-[#F5A623] group">
                            <img
                                src={partner.src}
                                alt={partner.name}
                                className="w-full h-24 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                            />
                            <p className="mt-4 text-sm font-semibold text-[#1B3A5C] text-center">
                                {partner.name}
                            </p>
                            <p className="mt-1 text-xs text-gray-500 text-center">
                                {isAr ? partner.descAr : partner.descEn}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-gray-50 p-12 rounded-lg">
                    <h3 className="text-3xl font-bold text-[#1B3A5C] mb-4">
                        {isAr ? 'هل تريد أن تكون شريكاً؟' : 'Want to become a partner?'}
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        {isAr
                            ? 'نعتز بشراكتنا مع كبرى الشركات العالمية والمحلية. تواصل معنا لمناقشة فرص الشراكة.'
                            : 'We pride ourselves on partnerships with leading global and local companies. Contact us to discuss partnership opportunities.'
                        }
                    </p>
                    <a href="/contact">
                        <button className="bg-[#F5A623] text-[#1B3A5C] px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#E09615] transition">
                            {isAr ? 'تواصل معنا' : 'Contact Us'}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Partners;