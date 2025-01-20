import React from 'react';

const HomePage = () => {
return (
<div className="bg-gray-900 text-white">
    {/* Navbar */}
    <nav className="bg-gray-800 py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
            <a href="#" className="text-2xl font-bold text-white">Wisata Semarang</a>
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

    {/* Header Section */}
    <header className="relative">
        <img src="/path/to/your/image.jpg" alt="Wisata Semarang" className="w-full h-96 object-cover opacity-80" />
        <div
            className="absolute top-0 left-0 w-full h-96 flex flex-col justify-center items-center bg-gradient-to-t from-black/50 to-transparent">
            <h1 className="text-5xl font-extrabold">WISATA SEMARANG</h1>
            <button
                className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg rounded-lg transition duration-300">Explore
                More</button>
        </div>
    </header>

    {/* About Section */}
    <section id="about" className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty and cultural heritage of Semarang with us. Discover hidden gems and top destinations to
            make your trip unforgettable.
        </p>
    </section>

    {/* Categories Section */}
    <section id="categories" className="py-12 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8">CATEGORIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div
                className="bg-red-500 text-center p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold">Culture</h3>
            </div>
            <div
                className="bg-yellow-500 text-center p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold">Nature</h3>
            </div>
            <div
                className="bg-green-500 text-center p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold">Food</h3>
            </div>
            <div
                className="bg-purple-500 text-center p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold">Landmarks</h3>
            </div>
        </div>
    </section>

    {/* Popular Section */}
    <section id="popular" className="py-12 bg-gray-700">
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
);
};

export default HomePage;
