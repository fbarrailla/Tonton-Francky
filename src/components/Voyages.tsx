/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
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
import thumbDakLak from '../assets/dak-lak-01.jpg';
import thumbBordeaux from '../assets/bordeaux-01.jpg';
import thumbParis from '../assets/paris-01.jpg';
import thumbVenice from '../assets/venice-01.jpg';
import thumbPrague from '../assets/prague-01.jpg';
import thumbCork from '../assets/cork-01.jpg';
import thumbPenang from '../assets/penang-01.jpg';
import thumbKohRong from '../assets/koh-rong-01.jpg';
import thumbTaipei from '../assets/taipei-01.jpg';
import thumbBienHoa from '../assets/bien-hoa-01.jpg';
import thumbPhanThiet from '../assets/phan-thiet-01.jpg';
import thumbTamDao from '../assets/tam-dao-01.jpg';
import thumbChangMai from '../assets/chang-mai-01.jpg';

// Custom SVG pin marker
const customIcon = L.divIcon({
  className: '',
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#00000040"/>
    </filter>
    <path d="M14 0C6.27 0 0 6.27 0 14c0 9.625 14 22 14 22s14-12.375 14-22C28 6.27 21.73 0 14 0z"
      fill="#9A6320" filter="url(#shadow)"/>
    <circle cx="14" cy="14" r="6" fill="#FFF8E7"/>
  </svg>`,
  iconSize: [28, 36],
  iconAnchor: [14, 36],
  popupAnchor: [0, -38],
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
  {
    id: 10,
    name: "Đắk Lắk",
    country: "Vietnam",
    coordinates: [12.6667, 108.0500],
    description: "Les hauts plateaux du Centre, café robusta et éléphants sauvages 🐘",
    descriptionEn: "The Central Highlands, robusta coffee and wild elephants 🐘",
    date: "2025",
    slug: "dak-lak",
    thumbnail: thumbDakLak,
  },
  {
    id: 11,
    name: "Bordeaux",
    country: "France",
    coordinates: [44.8378, -0.5792],
    description: "La belle endormie éveillée, vins de légende et architecture classée 🍷",
    descriptionEn: "The awakened sleeping beauty, legendary wines and listed architecture 🍷",
    date: "2025",
    slug: "bordeaux",
    thumbnail: thumbBordeaux,
  },
  {
    id: 22,
    name: "Chang Mai",
    country: "Thaïlande",
    coordinates: [18.7883, 98.9853],
    description: "La rose du Nord, temples bouddhistes, éléphants et marchés nocturnes 🌸",
    descriptionEn: "The Rose of the North, Buddhist temples, elephants and night markets 🌸",
    date: "2026",
    slug: "chang-mai",
    thumbnail: thumbChangMai,
  },
  {
    id: 21,
    name: "Tam Đảo",
    country: "Vietnam",
    coordinates: [21.4667, 105.6500],
    description: "Station de montagne mystérieuse perchée dans les nuages, à 85 km de Hanoï 🌫️",
    descriptionEn: "A mysterious mountain resort nestled in the clouds, 85 km from Hanoi 🌫️",
    date: "2026",
    slug: "tam-dao",
    thumbnail: thumbTamDao,
  },
  {
    id: 20,
    name: "Phan Thiết",
    country: "Vietnam",
    coordinates: [10.9289, 108.1022],
    description: "Dunes de sable rouge, plages sauvages et sauce de poisson légendaire 🏜️",
    descriptionEn: "Red sand dunes, wild beaches and legendary fish sauce 🏜️",
    date: "2026",
    slug: "phan-thiet",
    thumbnail: thumbPhanThiet,
  },
  {
    id: 19,
    name: "Biên Hòa",
    country: "Vietnam",
    coordinates: [10.9574, 106.8426],
    description: "La ville industrielle aux mille visages, à deux pas de Saigon 🏙️",
    descriptionEn: "The city of a thousand faces, just a stone's throw from Saigon 🏙️",
    date: "2026",
    slug: "bien-hoa",
    thumbnail: thumbBienHoa,
  },
  {
    id: 18,
    name: "Taipei",
    country: "Taïwan",
    coordinates: [25.0330, 121.5654],
    description: "La ville où la modernité rencontre la tradition, street food et temples 🏯",
    descriptionEn: "The city where modernity meets tradition, street food and temples 🏯",
    date: "2026",
    slug: "taipei",
    thumbnail: thumbTaipei,
  },
  {
    id: 17,
    name: "Koh Rong",
    country: "Cambodge",
    coordinates: [10.6167, 103.2333],
    description: "Un paradis sauvage aux eaux turquoise, loin des foules et du bruit 🌴",
    descriptionEn: "A wild paradise with turquoise waters, far from the crowds and noise 🌴",
    date: "2026",
    slug: "koh-rong",
    thumbnail: thumbKohRong,
  },
  {
    id: 16,
    name: "Penang",
    country: "Malaisie",
    coordinates: [5.4141, 100.3288],
    description: "L'île des saveurs, capitale de la street food asiatique et de l'art de rue 🍜",
    descriptionEn: "The island of flavors, capital of Asian street food and street art 🍜",
    date: "2026",
    slug: "penang",
    thumbnail: thumbPenang,
  },
  {
    id: 15,
    name: "Cork",
    country: "Irlande",
    coordinates: [51.8985, -8.4756],
    description: "La vraie capitale irlandaise, pubs chaleureux et accents chantants 🍀",
    descriptionEn: "The real Irish capital, cozy pubs and singing accents 🍀",
    date: "2026",
    slug: "cork",
    thumbnail: thumbCork,
  },
  {
    id: 14,
    name: "Prague",
    country: "République Tchèque",
    coordinates: [50.0755, 14.4378],
    description: "La ville aux cent clochers, magie médiévale et bière dorée 🍺",
    descriptionEn: "The city of a hundred spires, medieval magic and golden beer 🍺",
    date: "2026",
    slug: "prague",
    thumbnail: thumbPrague,
  },
  {
    id: 13,
    name: "Venise",
    country: "Italie",
    coordinates: [45.4408, 12.3155],
    description: "La Sérénissime, canaux dorés et palais suspendus sur l'eau 🚣",
    descriptionEn: "La Serenissima, golden canals and palaces suspended on water 🚣",
    date: "2026",
    slug: "venice",
    thumbnail: thumbVenice,
  },
  {
    id: 12,
    name: "Paris",
    country: "France",
    coordinates: [48.8566, 2.3522],
    description: "La Ville Lumière, capitale de l'art, de la mode et de la gastronomie ✨",
    descriptionEn: "The City of Light, capital of art, fashion and gastronomy ✨",
    date: "2025",
    slug: "paris",
    thumbnail: thumbParis,
  },
];

const EUROPEAN_COUNTRIES = ['France', 'Irlande', 'République Tchèque', 'Italie', 'Espagne', 'Portugal', 'Allemagne', 'Belgique'];
const regionColor = (country: string) =>
  EUROPEAN_COUNTRIES.includes(country) ? 'text-indigo-700' : 'text-amber-700';

export default function Voyages() {
  const { lang, t } = useLanguage();
  const v = t.voyages;

  return (
    <main className="flex-grow pt-10">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-travel-blue to-stone-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-stone-800">
              {v.heroTitle}
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              {v.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6">
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
                center={[35, 50]}
                zoom={3}
                style={{ height: '100%', width: '100%' }}
                className="z-10"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                <MarkerClusterGroup>
                  {destinations.map((destination) => (
                    <Marker
                      key={destination.id}
                      position={destination.coordinates}
                      icon={customIcon}
                    >
                      <Popup className="custom-popup" minWidth={220} maxWidth={220}>
                        <div style={{ margin: '-13px -20px -15px', borderRadius: '12px', overflow: 'hidden', fontFamily: 'inherit' }}>
                          {destination.thumbnail && destination.slug && (
                            <Link to={`/voyages/${destination.slug}`}>
                              <img
                                src={destination.thumbnail}
                                alt={destination.name}
                                loading="lazy"
                                decoding="async"
                                style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block' }}
                              />
                            </Link>
                          )}
                          <div style={{ padding: '10px 12px 12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                              <span style={{ fontSize: '13px', fontWeight: 700, color: '#1c1917' }}>{destination.name}</span>
                              <span style={{ fontSize: '11px', color: '#78716c', background: '#f5f5f4', padding: '1px 6px', borderRadius: '999px' }}>{destination.date}</span>
                            </div>
                            <p style={{ fontSize: '11px', color: '#57534e', margin: 0, lineHeight: '1.5' }}>
                              {lang === 'fr' ? destination.description : destination.descriptionEn}
                            </p>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MarkerClusterGroup>
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">{v.gridTitle}</h2>
            <p className="text-xl text-stone-600">{v.gridDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {destinations.map((destination, index) => {
              const isFeatured = index === 0;
              const card = (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.1, 0.5), duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {destination.thumbnail && (
                    <div className="overflow-hidden">
                      <img
                        src={destination.thumbnail}
                        alt={destination.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <span className="text-sm text-stone-600 bg-stone-100 px-2 py-1 rounded-full">
                        {destination.date}
                      </span>
                    </div>
                    <p className={`mb-2 font-medium ${regionColor(destination.country)}`}>{destination.country}</p>
                    <p className="text-stone-700 leading-relaxed">
                      {lang === 'fr' ? destination.description : destination.descriptionEn}
                    </p>
                    {destination.slug && (
                      <span className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-900 transition-colors">
                        {v.seePhotos}
                      </span>
                    )}
                  </div>
                </motion.div>
              );

              return destination.slug ? (
                <Link key={destination.id} to={`/voyages/${destination.slug}`} className={isFeatured ? 'lg:col-span-2' : undefined}>
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
