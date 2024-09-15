"use client"

import Image from "next/image";
import { useState } from 'react';

// components/MySwiper.js
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FEFCF2] min-h-screen">

      {/* navigation */}
      <nav className="container mx-auto flex justify-between items-center py-3 fixed bg-[#FEFCF2] z-10 px-4 border-b-2 border-blue-800">
        <Image unoptimized src="/logo.jpg" alt="Boat" className="w-20 md:w-32" width={200} height={200} />
        <div className="md:hidden z-20"> {/* Asegura que el botón esté sobre otros elementos */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 hover:text-blue-700 focus:outline-none focus:text-blue-700">
            {isOpen ? (
              <svg className="w-10 h-10 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg> // Cambio de color aquí
            ) : (
              <svg className="w-10 h-10 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} flex justify-center flex-col md:flex-row md:flex items-center absolute bg-blue-900 shadow-md w-full h-screen top-0 left-0 md:static md:bg-transparent md:shadow-none md:h-auto transition-all duration-500 ease-in-out`}>
          <ul className="flex flex-col md:flex-row md:space-x-10 md:text-lg md:font-medium w-full justify-around text-white">
            <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-1">
              <a href="#trips" className="block text-white py-2 px-4 hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-3xl" onClick={() => setIsOpen(false)}>Trips</a>
            </li>
            <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-1">
              <a href="#menu" className="block text-white py-2 px-4 hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-3xl" onClick={() => setIsOpen(false)}>Menu</a>
            </li>
            <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-1">
              <a href="#contact" className="block text-white py-2 px-4 hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-3xl" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <a href="#contact" className="text-xl text-blue-900 border-2 border-blue-900 px-10 py-2 rounded-full">Book Now</a>
        </div>
      </nav>


      <Swiper
        slidesPerView={1.5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3.5,
          }
        }}

        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image unoptimized src="/1.jpg" alt="" className="w-full" width={1000} height={1000} />
        </SwiperSlide>
        <SwiperSlide>
          <Image unoptimized src="/7.jpg" alt="" className="w-full" width={1000} height={1000} />
        </SwiperSlide>
        <SwiperSlide>
          <Image unoptimized src="/3.jpg" alt="" className="w-full" width={1000} height={1000} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image src="/4.jpg" alt="" className="w-full" width={1000} height={1000} />
        </SwiperSlide> */}
        <SwiperSlide>
          <Image unoptimized src="/5.jpg" alt="" className="w-full" width={1000} height={1000} />
        </SwiperSlide>
        <SwiperSlide>
          <Image unoptimized src="/8.jpg" alt="" className="w-full" width={1000} height={1000} />
        </SwiperSlide>
      </Swiper>


      {/* header */}

      <header className="container mx-auto mt-10 text-center md:text-left px-4 md:px-0">
        <p className="text-[#1839AF] text-xl">
          Beleef de prachtige Loosdrechtse Plassen vanaf het water vanuit het comfort van onze luxe boten voor maximaal 12 personen. Altijd met een privé kapitein. Onze boten zijn ideaal voor bedrijfsuitjes, verjaardagen, speciale jubilea of gewoon voor een heerlijk dagje op het water met vrienden of familie. Wij hebben de perfecte vaart voor u. </p>
        <p className="mt-4 text-[#1839AF] text-xl">
          Er zijn vele opties mogelijk met keuzes uit verschillende arrangementen: van brunch, lunch, BBQ, kaasplankje tot high tea. Wilt u liever zelf uw eigen eten regelen? Bij ons is dat ook geen probleem.
        </p>

      </header>

      <section className="">

        <div className="border-y-2 border-[#1839AF] py-5 mt-7 text-center">
          <h2 className="text-5xl font-medium">Onze Diensten</h2>
        </div>

        {/* trip 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3">

          <div className="container mx-auto flex justify-start items-center flex-col gap-10 p-8 border-b md:border-b-0 md:border-r border-[#1839AF]">
            <Swiper
              className="w-full"
              spaceBetween={50}
              slidesPerView={1}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
            >
              <SwiperSlide>
                <Image src="/4.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={500} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/2.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={500} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/5.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={500} />
              </SwiperSlide>
            </Swiper>

            <div className="w-full text-center">
              <h3 className="text-4xl font-semibold">Privé Rondvaart</h3>
              <p className="text-2xl font-medium">Duur: Op aanvraag</p>
              <p className="font-2xl mt-2">Perfect voor speciale gelegenheden zoals verjaardagen, jubilea of bedrijfsevenementen. U heeft de boot helemaal voor uzelf en kunt de route en duur van de rondvaart aanpassen aan uw wensen.</p>
            </div>

          </div>

          <div className="container mx-auto flex justify-start items-center flex-col gap-10 p-8 border-b md:border-b-0 md:border-r border-[#1839AF]">
            <Swiper
              className="w-full"
              spaceBetween={50}
              slidesPerView={1}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
            >
              <SwiperSlide>
                <Image src="/7.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={1000} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/8.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={1000} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/9.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={1000} />
              </SwiperSlide>
            </Swiper>

            <div className="w-full text-center">
              <h3 className="text-4xl font-semibold">Standaard vaart</h3>
              <p className="text-2xl font-medium">Duur: 2 uur</p>
              <p className="font-2xl mt-2">Verken de prachtige Loosdrechtse Plassen en geniet van het uitzicht op de natuur en pittoreske huisjes. Onze deskundige gidsen vertellen u alles over de geschiedenis en het ecosysteem van dit unieke gebied.</p>
            </div>

          </div>

          <div className="container mx-auto flex justify-start items-center flex-col gap-10 p-8 border-r border-[#1839AF]">

            <Swiper
              className="w-full"
              spaceBetween={50}
              slidesPerView={1}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
            >
              <SwiperSlide>
                <Image src="/10.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={1000} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/11.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={1000} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/12.jpg" alt="" className="object-cover h-[350px] min-h-[350px] w-full rounded-xl" width={1000} height={1000} />
              </SwiperSlide>
            </Swiper>

            <div className="w-full text-center">
              <h3 className="text-4xl font-semibold">Avondrondvaart</h3>
              <p className="text-2xl font-medium">Duur: 2,5 uur </p>
              <p className="font-2xl mt-2">Geniet van de rust en schoonheid van de plassen bij zonsondergang. Deze vaart biedt een romantische setting en de mogelijkheid om te ontspannen terwijl de zon ondergaat.</p>
            </div>

          </div>

        </div>
      </section>


      <section className="">

        <div className="border-y-2 border-[#1839AF] py-5 text-center">
          <h2 className="text-5xl font-medium">Praktische Informatie</h2>
        </div>

        <div className="container mx-auto px-4 md:px-0 py-7 md:py-12">

          <p className="text-xl my-3"><span className="font-semibold">Vertreklocatie:</span>  Porseleinhaven in Oud Loosdrecht. In overleg, op andere locaties ook mogelijk.</p>

          <p className="text-xl my-3"><span className="font-semibold">Tijden:</span>  Vaarten vertrekken tussen 10:00 en 18:00 uur.
            Avondrondvaarten beginnen om 20:00 uur.
          </p>

          <p className="text-xl my-3"><span className="font-semibold">Reserveringen:</span> Wij raden aan om van tevoren te reserveren, vooral in het hoogseizoen.</p>

          <p className="text-xl my-3"><span className="font-semibold">Toegankelijkheid:</span> Onze boten zijn toegankelijk voor rolstoelgebruikers. Neem contact met ons op voor speciale verzoeken.</p>

          <p className="text-xl my-3">Neem aan boord altijd warme kleding mee. </p>

        </div>

      </section>

      <section className="text-center bg-[#1839AF] py-12">
        <h2 className="text-6xl md:text-5xl font-medium text-[#FEFCF2]">Klaar om de Loosdrechtse Plassen te verkennen?</h2>
        <p className="mt-7 px-8 md:px-0 text-2xl md:text-3xl font-regular text-[#FEFCF2]">We kijken ernaar uit u aan boord te verwelkomen!</p>
        <p className="text-2xl px-8 md:px-0  md:text-3xl font-regular text-[#FEFCF2]">Vul ons aanvraagformulier dan nu in</p>
      </section>


      <section id="contact" className="bg-[#FEFCF2] my-10 container mx-auto">
        <div className="min-h-screen flex items-center justify-center bg-[#FEFCF2]">
          <div className=" p-8 rounded-lg w-full">
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
      </section>



      <section className="border-t-2 border-[#1839AF]">

        <div className="container mx-auto px-4 py-6 md:py-12">
          <h2 className="text-5xl font-medium">Contact</h2>
          <div className="">
            <h3 className="text-xl my-2">Voor meer informatie neem gerust contact met ons op.</h3>
            <p className="text-xl"><span className="font-medium">Telefoon<br /></span> +31 6 86 37 37 36</p>
            <p className="text-xl"><span className="font-medium">E-mail<br /></span> lekkervarenloosdrecht@gmail.com</p>
            <p className="text-xl"><span className="font-medium">Social Media<br /></span> Volg ons op <a href="https://www.instagram.com/lekkervarenloosdrecht?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="font-bold">Instagram</a></p>
          </div>

          <div className="mt-10 flex gap-5 flex-col md:flex-row">
            <a href="https://www.instagram.com/lekkervarenloosdrecht" target="_blank" className="w-full text-xl text-[#1839AF] border-2 border-[#1839AF] px-10 py-2 rounded-full flex justify-center items-center gap-3">
              Instagram
              <Image unoptimized src="/instagram.svg" alt="" className="w-8" width={400} height={400} />
            </a>
            <a href="https://wa.link/8p7ed7" target="_blank" className="w-full text-xl text-[#1839AF] border-2 border-[#1839AF] px-10 py-2 rounded-full flex justify-center items-center gap-3">
              Whatsapp
              <Image unoptimized src="/whatsapp.svg" alt="" className="w-8" width={400} height={400} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
