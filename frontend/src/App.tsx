import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Catalog from './pages/Catalog'
import Branches from './pages/Branches'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

function App() {
    const [language, setLanguage] = useState<'en' | 'ar'>('ar')

    const navLinks = language === 'ar' ? {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        catalog: 'الكتالوج',
        branches: 'الأفرع',
        partners: 'الشركاء',
        contact: 'تواصل معنا'
    } : {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        catalog: 'Catalog',
        branches: 'Branches',
        partners: 'Partners',
        contact: 'Contact'
    }

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en')
    }

    return (
        <Router>
            <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
                <nav className="bg-[#1B3A5C] text-white shadow-lg sticky top-0 z-50">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                            <Link to="/" className="flex items-center gap-4">
                                <img src="/images/logo/logo.png" alt="BCL Logo" className="h-12" />
                                <span className="text-xl font-bold text-[#F5A623]">BCL GROUP</span>
                            </Link>

                            <div className="hidden md:flex gap-6 items-center">
                                <Link to="/" className="hover:text-[#F5A623] transition font-medium">{navLinks.home}</Link>
                                <Link to="/about" className="hover:text-[#F5A623] transition font-medium">{navLinks.about}</Link>
                                <Link to="/services" className="hover:text-[#F5A623] transition font-medium">{navLinks.services}</Link>
                                <Link to="/catalog" className="hover:text-[#F5A623] transition font-medium">{navLinks.catalog}</Link>
                                <Link to="/branches" className="hover:text-[#F5A623] transition font-medium">{navLinks.branches}</Link>
                                <Link to="/partners" className="hover:text-[#F5A623] transition font-medium">{navLinks.partners}</Link>
                                <Link to="/contact" className="hover:text-[#F5A623] transition font-medium">{navLinks.contact}</Link>
                            </div>

                            <button
                                onClick={toggleLanguage}
                                className="bg-[#F5A623] text-[#1B3A5C] px-4 py-2 rounded-lg font-bold hover:bg-[#E09615] transition"
                            >
                                {language === 'en' ? 'العربية' : 'English'}
                            </button>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home language={language} />} />
                    <Route path="/about" element={<About language={language} />} />
                    <Route path="/services" element={<Services language={language} />} />
                    <Route path="/catalog" element={<Catalog language={language} />} />
                    <Route path="/branches" element={<Branches language={language} />} />
                    <Route path="/partners" element={<Partners language={language} />} />
                    <Route path="/contact" element={<Contact language={language} />} />
                </Routes>

                <footer className="bg-[#0F2137] text-white py-8 mt-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#F5A623] mb-4">BCL GROUP</h3>
                                <p className="text-gray-300">
                                    {language === 'ar'
                                        ? 'حلول هندسية وصناعية متكاملة من التصميم للتنفيذ'
                                        : 'Integrated engineering and industrial solutions from design to execution'
                                    }
                                </p>
                                <p className="text-gray-400 text-sm mt-2">
                                    {language === 'ar' ? 'شركة صناعية' : 'Industrial Company'}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#F5A623] mb-4">
                                    {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                                </h3>
                                <div className="space-y-2">
                                    <Link to="/about" className="block hover:text-[#F5A623] transition">{navLinks.about}</Link>
                                    <Link to="/services" className="block hover:text-[#F5A623] transition">{navLinks.services}</Link>
                                    <Link to="/contact" className="block hover:text-[#F5A623] transition">{navLinks.contact}</Link>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#F5A623] mb-4">
                                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                                </h3>
                                <div className="space-y-2 text-gray-300">
                                    <p dir="ltr">🇹🇷 TR: 00905365077134</p>
                                    <p dir="ltr">🇮🇶 IQ: 009647744207771</p>
                                    <p dir="ltr">🇯🇴 JO: +962 7 8972 0533</p>
                                    <p>📧 info@bclgroups.com</p>
                                    <p>🌐 bclgroupp</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center border-t border-gray-700 pt-6">
                            <p>&copy; 2026 BCL GROUP. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}</p>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    )
}

export default App