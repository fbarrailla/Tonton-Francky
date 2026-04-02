/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import thumbSiemReap from '../assets/siem-reap-01.jpg';

export interface TravelDestination {
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

export const destinations: TravelDestination[] = [
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
    id: 23,
    name: "Siem Reap",
    country: "Cambodge",
    coordinates: [13.3633, 103.8564],
    description: "La porte d'Angkor, temples millénaires surgis de la jungle 🛕",
    descriptionEn: "The gateway to Angkor, thousand-year-old temples rising from the jungle 🛕",
    date: "2026",
    slug: "siem-reap",
    thumbnail: thumbSiemReap,
  },
];
