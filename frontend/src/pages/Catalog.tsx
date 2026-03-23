interface CatalogProps {
    language: 'en' | 'ar';
}

const Catalog = ({ language }: CatalogProps) => {
    const isAr = language === 'ar';

    const catalogs = [
        {
            titleAr: 'كتالوج الإنشاءات',
            titleEn: 'Construction Catalog',
            descAr: 'مشاريع المستشفيات، الفلل، المراكز التجارية',
            descEn: 'Hospital, Villa, and Commercial Center Projects',
            color: 'from-[#1B3A5C] to-[#2C5282]',
            icon: 'construction',
            img: '/images/catalog/construction.jpg',
            pdf: '/catalogs/BCL.pdf'
        },
        {
            titleAr: 'كتالوج الرافعات',
            titleEn: 'Crane Catalog',
            descAr: 'حلول الرافعات الصناعية من Özcanlar',
            descEn: 'Industrial Crane Solutions by Özcanlar',
            color: 'from-[#F5A623] to-[#E09615]',
            icon: 'crane',
            img: '/images/catalog/crane.jpg',
            pdf: '/catalogs/BCL.pdf'
        },
        {
            titleAr: 'كتالوج الماكينات',
            titleEn: 'Machinery Catalog',
            descAr: 'خطوط قطع البلازما CNC من Şahin CNC',
            descEn: 'CNC Plasma Cutting Lines by Şahin CNC',
            color: 'from-[#1B3A5C] to-[#F5A623]',
            icon: 'machinery',
            img: '/images/catalog/machinery.jpg',
            pdf: '/catalogs/BCL.pdf'
        },
        {
            titleAr: 'لوح حائط شرائحي',
            titleEn: 'Latt Wall Panel',
            descAr: 'ألواح حائط ديكورية عصرية من Tria',
            descEn: 'Modern decorative wall panels by Tria',
            color: 'from-gray-700 to-gray-900',
            icon: 'panel',
            img: '/images/catalog/wall-panel.jpg',
            pdf: '/catalogs/BCL.pdf'
        }
    ];

    const getIcon = (icon: string) => {
        switch (icon) {
            case 'construction': return '🏗';
            case 'crane': return '🏭';
            case 'machinery': return '⚙';
            case 'panel': return '🪵';
            default: return '';
        }
    };

    return (
        <div className="bg-gray-50 pb-20" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="bg-[#1B3A5C] text-white py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#F5A623]">
                        {isAr ? 'الكتالوج' : 'Product Catalog'}
                    </h1>
                    <p className="mt-4 text-xl opacity-90">
                        {isAr ? 'تصفح منتجاتنا وخدماتنا' : 'Browse our products and services'}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {catalogs.map((cat, i) => (
                        <div key={i} className={`bg-gradient-to-br ${cat.color} text-white rounded-lg shadow-lg overflow-hidden relative hover:shadow-xl transition`}>
                            {cat.img && (
                                <img src={cat.img} alt={cat.titleEn} className="w-full h-64 object-cover" />
                            )}
                            <div className="p-8">
                                <p className="text-5xl mb-4">{getIcon(cat.icon)}</p>
                                <h3 className="text-2xl font-bold mb-3">
                                    {isAr ? cat.titleAr : cat.titleEn}
                                </h3>
                                <p className="opacity-90 mb-6">
                                    {isAr ? cat.descAr : cat.descEn}
                                </p>
                                <a href={cat.pdf} download="BCL.pdf" className="inline-block bg-white text-[#1B3A5C] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition">
                                    {isAr ? 'تحميل الكتالوج' : 'Download Catalog'}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-[#1B3A5C] text-white p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#F5A623] mb-4">
                        {isAr ? 'هل تحتاج كتالوج مخصص؟' : 'Need a Custom Catalog?'}
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                        {isAr ? 'تواصل معنا وسنرسل لك الكتالوج المناسب' : 'Contact us and we will send you the appropriate catalog'}
                    </p>
                    <a href="/contact">
                        <button className="bg-[#F5A623] text-[#1B3A5C] px-8 py-3 rounded-lg font-bold hover:bg-[#E09615] transition">
                            {isAr ? 'تواصل معنا' : 'Contact Us'}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
