interface ContactProps {
    language: 'en' | 'ar';
}

const Contact = ({ language }: ContactProps) => {
    const isAr = language === 'ar';

    return (
        <div className="bg-gray-50 pb-20">
            <div className="bg-[#1B3A5C] text-white py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#F5A623]">
                        {isAr ? 'تواصل معنا' : 'Contact Us'}
                    </h1>
                    <p className="mt-4 text-xl opacity-90">
                        {isAr ? 'نحن هنا لخدمتك' : 'We are here to serve you'}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-[#1B3A5C] text-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#F5A623] mb-8">
                            {isAr ? 'معلومات الاتصال' : 'Contact Information'}
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="font-bold text-[#F5A623]">{isAr ? 'تركيا' : 'Turkey'}</p>
                                    <p dir="ltr">+90 555 123 4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="font-bold text-[#F5A623]">{isAr ? 'العراق' : 'Iraq'}</p>
                                    <p dir="ltr">+964 770 123 4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="font-bold text-[#F5A623]">{isAr ? 'الأردن' : 'Jordan'}</p>
                                    {/* <p dir="ltr">+962 79 123 4567</p> */}
                                    <a dir="ltr" href="tel:+962 7 9798 7548"></a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <p className="font-bold text-[#F5A623]">{isAr ? 'البريد الإلكتروني' : 'Email'}</p>
                                    <p>info@bclgroup.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <p className="font-bold text-[#F5A623]">{isAr ? 'المقر الرئيسي' : 'Headquarters'}</p>
                                    <p>{isAr ? 'إسطنبول، تركيا' : 'Istanbul, Turkey'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">🕐</span>
                                <div>
                                    <p className="font-bold text-[#F5A623]">{isAr ? 'ساعات العمل' : 'Working Hours'}</p>
                                    <p>{isAr ? 'الاثنين - الجمعة: 9 صباحاً - 6 مساءً' : 'Mon - Fri: 9 AM - 6 PM'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#1B3A5C] mb-8">
                            {isAr ? 'أرسل لنا رسالة' : 'Send us a message'}
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {isAr ? 'الاسم' : 'Name'}
                                </label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B3A5C] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {isAr ? 'البريد الإلكتروني' : 'Email'}
                                </label>
                                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B3A5C] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {isAr ? 'الموضوع' : 'Subject'}
                                </label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B3A5C] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {isAr ? 'الرسالة' : 'Message'}
                                </label>
                                <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B3A5C] outline-none"></textarea>
                            </div>
                            <button className="w-full bg-[#1B3A5C] text-white py-3 rounded-lg font-bold hover:bg-[#2C5282] transition text-lg" >
                                {isAr ? 'إرسال' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;