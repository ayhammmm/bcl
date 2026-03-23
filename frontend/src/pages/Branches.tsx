import { translations } from '../translations';
import { MapPin } from 'lucide-react';

interface BranchesProps {
    language: 'en' | 'ar';
}

const Branches = ({ language }: BranchesProps) => {
    const t = translations[language];
    const isAr = language === 'ar';

    const branches = [
        {
            country: t.branches.turkey,
            city: isAr ? 'إسطنبول' : 'Istanbul',
            address: isAr ? 'باشا شهير، إسطنبول' : 'Basaksehir, Istanbul',
            type: t.branches.hq
        },
        {
            country: t.branches.iraq,
            city: isAr ? 'بغداد' : 'Baghdad',
            address: isAr ? 'الكرادة، بغداد' : 'Karrada, Baghdad',
            type: isAr ? 'مكتب تمثيل' : 'Representative Office'
        },
        {
            country: t.branches.jordan,
            city: isAr ? 'عمان' : 'Amman',
            address: isAr ? 'العبدلي، عمان' : 'Al-Abdali, Amman',
            type: isAr ? 'مكتب تمثيل' : 'Representative Office'
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="bg-[#1B3A5C] text-white py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#F5A623]">{t.branches.title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {branches.map((branch, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-[#F5A623]">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-2xl font-bold text-[#1B3A5C]">{branch.country}</h3>
                                <MapPin className="text-[#F5A623] w-8 h-8 flex-shrink-0" />
                            </div>
                            <div className="space-y-2 text-gray-600">
                                <p className="font-semibold text-[#1B3A5C]">{branch.city}</p>
                                <p>{branch.address}</p>
                                <span className="inline-block bg-blue-100 text-[#1B3A5C] text-xs px-2 py-1 rounded-full mt-2">
                                    {branch.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-white p-4 rounded-lg shadow-lg">
                    <div className="bg-gray-200 h-96 w-full flex items-center justify-center rounded text-gray-400">
                        {isAr ? 'خريطة جوجل التفاعلية' : 'Interactive Google Map'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branches;