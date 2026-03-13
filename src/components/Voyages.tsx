/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '../i18n';

import thumbHaNoi from '../assets/ha-noi-01.jpg';
import thumbHaLong from '../assets/ha-long-01.jpg';
import thumbHoiAn from '../assets/hoi-an-01.jpg';
import thumbDaNang from '../assets/da-nang-01.jpg';
import thumbDaLat from '../assets/da-lat-01.jpg';
import thumbNhaTrang from '../assets/nha-trang-01.jpg';
import thumbCanTho from '../assets/can-tho-01.jpg';
import thumbSaigon from '../assets/saigon-01.jpg';
import thumbConDao from '../assets/con-dao-01.jpg';

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface TravelDestination {
  id: number;
  name: string;
  country: string;
  coordinates: [number, number];
  description: string;
  descriptionEn: string;
  date: string;
  slug?: string;
  thumbnail?: string;
  image?: string;
}

const destinations: TravelDestination[] = [
  {
    id: 1,
    name: "Hà Nội",
    country: "Vietnam",
    coordinates: [21.0285, 105.8542],
    description: "La capitale millénaire, entre vieille ville et lacs paisibles 🏛️",
    descriptionEn: "The millennial capital, between the old town and peaceful lakes 🏛️",
    date: "2025",
    slug: "ha-noi",
    thumbnail: thumbHaNoi,
  },
  {
    id: 2,
    name: "Hạ Long",
    country: "Vietnam",
    coordinates: [20.9101, 107.1839],
    description: "Les majestueuses baies de calcaire au milieu de l'eau émeraude ⛵",
    descriptionEn: "Majestic limestone bays surrounded by emerald waters ⛵",
    date: "2025",
    slug: "ha-long",
    thumbnail: thumbHaLong,
  },
  {
    id: 3,
    name: "Hội An",
    country: "Vietnam",
    coordinates: [15.8800, 108.3380],
    description: "La ville aux lanternes, un charme hors du temps 🏮",
    descriptionEn: "The lantern town, a timeless charm 🏮",
    date: "2025",
    slug: "hoi-an",
    thumbnail: thumbHoiAn,
  },
  {
    id: 4,
    name: "Đà Nẵng",
    country: "Vietnam",
    coordinates: [16.0544, 108.2022],
    description: "Plages superbes et pont du Dragon, entre mer et montagne 🌊",
    descriptionEn: "Stunning beaches and the Dragon Bridge, between sea and mountains 🌊",
    date: "2025",
    slug: "da-nang",
    thumbnail: thumbDaNang,
  },
  {
    id: 5,
    name: "Đà Lạt",
    country: "Vietnam",
    coordinates: [11.9404, 108.4583],
    description: "La ville des fleurs et de la brume, fraîcheur en altitude 🌸",
    descriptionEn: "The city of flowers and mist, cool mountain air 🌸",
    date: "2025",
    slug: "da-lat",
    thumbnail: thumbDaLat,
  },
  {
    id: 6,
    name: "Nha Trang",
    country: "Vietnam",
    coordinates: [12.2388, 109.1967],
    description: "Mer cristalline et vie balnéaire animée 🏖️",
    descriptionEn: "Crystal-clear sea and lively beach life 🏖️",
    date: "2025",
    slug: "nha-trang",
    thumbnail: thumbNhaTrang,
  },
  {
    id: 7,
    name: "Cần Thơ",
    country: "Vietnam",
    coordinates: [10.0452, 105.7469],
    description: "Le cœur du delta du Mékong et ses marchés flottants 🚤",
    descriptionEn: "The heart of the Mekong Delta and its floating markets 🚤",
    date: "2025",
    slug: "can-tho",
    thumbnail: thumbCanTho,
  },
  {
    id: 8,
    name: "Saigon",
    country: "Vietnam",
    coordinates: [10.8231, 106.6297],
    description: "L'énergie folle de la mégapole du Sud, toujours en mouvement 🛵",
    descriptionEn: "The wild energy of the southern megacity, always on the move 🛵",
    date: "2025",
    slug: "saigon",
    thumbnail: thumbSaigon,
  },
  {
    id: 9,
    name: "Côn Đảo",
    country: "Vietnam",
    coordinates: [8.6833, 106.6167],
    description: "Un archipel préservé, plages désertes et nature sauvage 🌴",
    descriptionEn: "A preserved archipelago, deserted beaches and wild nature 🌴",
    date: "2025",
    slug: "con-dao",
    thumbnail: thumbConDao,
  },
];

export default function Voyages() {
  const { lang, t } = useLanguage();
  const v = t.voyages;

  return (
    <main className="flex-grow pt-28">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-travel-blue to-stone-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-stone-800">
              {v.heroTitle}
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              {v.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 bg-stone-50 border-b">
              <h2 className="text-3xl font-serif font-bold text-center mb-4">{v.mapTitle}</h2>
              <p className="text-stone-600 text-center">{v.mapDesc}</p>
            </div>

            <div className="h-[400px] relative">
              <MapContainer
                center={[16, 106]}
                zoom={6}
                style={{ height: '100%', width: '100%' }}
                className="z-10"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {destinations.map((destination) => (
                  <Marker
                    key={destination.id}
                    position={destination.coordinates}
                    icon={customIcon}
                  >
                    <Popup className="custom-popup">
                      <div className="max-w-[200px]">
                        {destination.thumbnail && destination.slug && (
                          <Link to={`/voyages/${destination.slug}`}>
                            <img
                              src={destination.thumbnail}
                              alt={destination.name}
                              className="w-full h-28 object-cover rounded-t-lg"
                            />
                          </Link>
                        )}
                        <div className="p-2">
                          <h3 className="font-bold text-base mb-1">
                            {destination.name}, {destination.country}
                          </h3>
                          <p className="text-xs text-stone-600 mb-1">{destination.date}</p>
                          <p className="text-xs leading-relaxed">
                            {lang === 'fr' ? destination.description : destination.descriptionEn}
                          </p>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">{v.gridTitle}</h2>
            <p className="text-xl text-stone-600">{v.gridDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => {
              const card = (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {destination.image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <span className="text-sm text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
                        {destination.date}
                      </span>
                    </div>
                    <p className="text-stone-600 mb-2 font-medium">{destination.country}</p>
                    <p className="text-stone-700 leading-relaxed">
                      {lang === 'fr' ? destination.description : destination.descriptionEn}
                    </p>
                    {destination.slug && (
                      <span className="mt-4 inline-block text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
                        {v.seePhotos}
                      </span>
                    )}
                  </div>
                </motion.div>
              );

              return destination.slug ? (
                <Link key={destination.id} to={`/voyages/${destination.slug}`}>
                  {card}
                </Link>
              ) : (
                <React.Fragment key={destination.id}>{card}</React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-stone-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{v.ctaTitle}</h2>
              <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">{v.ctaDesc}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/tonton__francky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-stone-100 transition-colors"
              >
                {v.ctaBtn}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
