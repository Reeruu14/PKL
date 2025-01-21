import React, { useState, useEffect } from 'react';

const HomePage = () => {
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 50);
};

window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
<div className="bg-gray-900 text-white">
    {/* Navbar */}
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${ isScrolled
        ? 'bg-gray-800/80 backdrop-blur-sm shadow-lg' : 'bg-gray-800' }`}>
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <a href="#" className="text-2xl font-bold text-white">Wisata Kota Semarang</a>
            <ul className="flex space-x-6">
                <li><a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a></li>
                <li><a href="#categories"
                        className="text-gray-300 hover:text-white transition duration-300">Categories</a></li>
                <li><a href="#popular" className="text-gray-300 hover:text-white transition duration-300">Popular</a>
                </li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    {/* Add padding to account for fixed navbar */}
    <div className="pt-16">
        {/* Header Section */}
        <header className="relative">
            <img src="/path/to/your/image.jpg" alt="Wisata Semarang" className="w-full h-96 object-cover opacity-80" />
            <div
                className="absolute top-0 left-0 w-full h-96 flex flex-col justify-center items-center bg-gradient-to-t from-black/50 to-transparent">
                <h1 className="text-5xl font-extrabold">WISATA SEMARANG</h1>
                <button
                    className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg rounded-lg transition duration-300">
                    Explore More
                </button>
            </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-12 text-center">
            <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Website Info Wisata Kota Semarang adalah portal online yang menyediakan panduan lengkap tentang
                destinasi wisata di Kota Semarang,
                meliputi landmark terkenal, wisata alam, kegiatan budaya, serta ulasan terkini dari para pelancong.
                Dengan navigasi yang mudah dan konten yang selalu diperbarui,
                platform ini bertujuan menjadi sumber informasi utama bagi wisatawan untuk menjelajahi keindahan,
                sejarah, dan budaya Kota Semarang.
            </p>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-12 bg-gray-700">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">CATEGORIES</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                {/* Hotel Category */}
                <div
                    className="text-center p-6 rounded-2xl bg-red-400 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <div className="text-white mb-2 bg-red-500 p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-white">Hotel</h3>
                        <p className="text-xs text-gray-100">Hotel di Semarang</p>
                    </div>
                </div>

                {/* Culinary Category */}
                <div
                    className="text-center p-6 rounded-2xl bg-blue-400 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <div className="text-white mb-2 bg-blue-500 p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-white">Culinary</h3>
                        <p className="text-xs text-gray-100">Tempat kuliner di daerah Semarang</p>
                    </div>
                </div>

                {/* Gift Category */}
                <div
                    className="text-center p-6 rounded-2xl bg-green-400 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <div className="text-white mb-2 bg-green-500 p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-white">Gift</h3>
                        <p className="text-xs text-gray-100">Oleh - oleh khas daerah Semarang</p>
                    </div>
                </div>

                {/* Entertainment Category */}
                <div
                    className="text-center p-6 rounded-2xl bg-purple-800 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <div className="text-white mb-2 bg-purple-500 p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-white">Entertainment</h3>
                        <p className="text-xs text-gray-100">Tempat Hiburan di Semarang</p>
                    </div>
                </div>

                {/* Tourist Attraction Category */}
                <div
                    className="text-center p-6 rounded-2xl bg-purple-400 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <div className="text-white mb-2 bg-purple-500 p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-white">Tourist Attraction</h3>
                        <p className="text-xs text-gray-100">Tempat Wisata di Semarang</p>
                    </div>
                </div>

                {/* Tour Guide Category */}
                <div
                    className="text-center p-6 rounded-2xl bg-yellow-400 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <div className="text-white mb-2 bg-yellow-500 p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-white">Tour Guide</h3>
                        <p className="text-xs text-gray-100">Pemandu Wisata Kota Semarang</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Popular Section */}
        <section id="populer" className="py-12 bg-gray-900">
            <h2 className="text-4xl font-bold text-center mb-8">POPULAR</h2>
            <div
                className="flex space-x-6 overflow-x-auto px-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
                <div
                    className="bg-white text-black w-72 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img src="/path/to/image1.jpg" alt="Popular 1" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-2xl mt-4 font-bold">Lawang Sewu</h3>
                </div>
                <div
                    className="bg-white text-black w-72 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img src="/path/to/image2.jpg" alt="Popular 2" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-2xl mt-4 font-bold">Sam Poo Kong</h3>
                </div>
                <div
                    className="bg-white text-black w-72 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img src="/path/to/image3.jpg" alt="Popular 3" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-2xl mt-4 font-bold">Brown Canyon</h3>
                </div>
            </div>
        </section>
        
        {/* Footer */}
        <footer id="contact" className="py-8 bg-gray-800 text-center">
            <p className="text-gray-400">Copyright © 2025 Wisata Semarang. All Rights Reserved.</p>
        </footer>
    </div>
</div>
);
};

export default HomePage;
