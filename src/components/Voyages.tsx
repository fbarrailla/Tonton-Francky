/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { useLanguage } from '../i18n';

import { destinations, type TravelDestination } from '../data/voyages';

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


const EUROPEAN_COUNTRIES = ['France', 'Irlande', 'République Tchèque', 'Italie', 'Espagne', 'Portugal', 'Allemagne', 'Belgique'];
const regionColor = (country: string) =>
  EUROPEAN_COUNTRIES.includes(country) ? 'text-indigo-700' : 'text-amber-700';

export default function Voyages() {
  const { lang, t } = useLanguage();
  const v = t.voyages;

  useEffect(() => {
    const saved = sessionStorage.getItem('voyages-scroll');
    if (saved) {
      window.scrollTo({ top: parseInt(saved, 10), behavior: 'instant' });
      sessionStorage.removeItem('voyages-scroll');
    }
  }, []);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => {
              const card = (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.1, 0.5), duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  {destination.thumbnail && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={destination.thumbnail}
                        alt={destination.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                <Link
                  key={destination.id}
                  to={`/voyages/${destination.slug}`}
                  onClick={() => sessionStorage.setItem('voyages-scroll', String(window.scrollY))}
                >
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
