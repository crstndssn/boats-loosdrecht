"use client"

import Header from '@/components/header';
import '../src/app/globals.css';

import Navigation from '../src/components/navigation'

// components/Contact.js

import Image from 'next/image';

const Contact = () => {
    return (
        <>
            <Navigation />

            <Header />
            <section id="contact" className="bg-[#FEFCF2] mt-0 mb-5 md:my-10 container mx-auto">
                <div className="min-h-screen flex items-center justify-center bg-[#FEFCF2]">
                    <div className="p-8 rounded-lg w-full">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Boek uw uitje</h2>
                        <form action="https://formspree.io/f/mwpepobj" method="POST" className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Vul hier uw naam in</label>
                                <input type="text" name="nombre" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Vul hier de datum in</label>
                                <input type="date" name="fecha" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Aantal volwassenen</label>
                                <input type="number" name="adultos" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Aantal kinderen</label>
                                <input type="number" name="ninos" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Vul hier uw straat en huisnummer in</label>
                                <input type="text" name="calle" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Vul hier uw postcode in</label>
                                <input type="text" name="codigo_postal" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Vul hier uw woonplaats in</label>
                                <input type="text" name="residencia" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Vul hier uw telefoonnummer in</label>
                                <input type="tel" name="telefono" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Vul hier uw emailadres</label>
                                <input type="email" name="correo_electronico" className="w-full p-2 border border-gray-300 rounded mt-1" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Uw vragen en/of opmerkingen</label>
                                <textarea name="comentarios" className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">Stuur</button>
                        </form>
                    </div>
                </div>

                <section className="border-t-2 border-[#1839AF]">
                    <div className="container mx-auto px-4 py-6 md:py-12">
                        <h2 className="text-5xl font-medium">Contact</h2>
                        <div>
                            <h3 className="text-xl my-2">Voor meer informatie neem gerust contact met ons op.</h3>
                            <p className="text-xl"><span className="font-medium">Telefoon<br /></span> +31 6 86 37 37 36</p>
                            <p className="text-xl"><span className="font-medium">E-mail<br /></span> lekkervarenloosdrecht@gmail.com</p>
                            <p className="text-xl"><span className="font-medium">Social Media<br /></span> Volg ons op <a href="https://www.instagram.com/lekkervarenloosdrecht?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="font-bold">Instagram</a></p>
                        </div>

                        <div className="mt-10 flex gap-5 flex-col md:flex-row">
                            <a href="https://www.instagram.com/lekkervarenloosdrecht" target="_blank" rel="noopener noreferrer" className="w-full text-xl text-[#1839AF] border-2 border-[#1839AF] px-10 py-2 rounded-full flex justify-center items-center gap-3">
                                Instagram
                                <Image unoptimized src="/instagram.svg" alt="" className="w-8" width={400} height={400} />
                            </a>
                            <a href="https://wa.link/8p7ed7" target="_blank" rel="noopener noreferrer" className="w-full text-xl text-[#1839AF] border-2 border-[#1839AF] px-10 py-2 rounded-full flex justify-center items-center gap-3">
                                Whatsapp
                                <Image unoptimized src="/whatsapp.svg" alt="" className="w-8" width={400} height={400} />
                            </a>
                        </div>
                    </div>
                </section>
            </section>
        </>

    );
};

export default Contact;
