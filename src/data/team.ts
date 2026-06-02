export interface TeamMember {
  id: string;
  name: string;
  roleFr: string;
  roleEn: string;
  /** Sort key — lower comes first. Mirrors hierarchy on the careers page. */
  group: number;
  photo: string | null;
  initials: string;
}

export const team: TeamMember[] = [
  // Leadership
  { id: '1d6ae8ea-f720-4fc6-ab62-ee295366771b', name: 'Francky', roleFr: 'CEO', roleEn: 'CEO', group: 0,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/f6875784-0f4f-4516-9529-25dcf52e430d.jpg', initials: 'F' },
  { id: 'b98474d8-013f-4181-b4dc-c169f67c7caf', name: 'Mirna', roleFr: 'Chief Growth Officer', roleEn: 'Chief Growth Officer', group: 0,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/238157c0-65e4-4ba5-96be-5035023e295b.jpeg', initials: 'M' },
  { id: '696a2b7e-177b-4ec0-8a63-2861c2a9c988', name: 'Jatin', roleFr: 'Agent', roleEn: 'Agent', group: 0,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/6f28ecdf-d50a-4bb7-aa06-f5646e4c6b00.jpeg', initials: 'J' },
  { id: '96e277c6-4d4e-43bd-bb08-a9602d85c340', name: 'Nicolas', roleFr: 'Agent', roleEn: 'Agent', group: 0,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/e39990fc-4d1f-4910-8baa-3acfaefc0e5a.jpeg', initials: 'N' },

  // Tech
  { id: 'cd94cfd3-2d8b-4e6a-a74c-2bcd4b62c844', name: 'Gugum Gumelar', roleFr: 'Webmaster', roleEn: 'Webmaster', group: 1,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/9a6c4652-c2d5-4450-9401-491a7a3980e9.jpg', initials: 'GG' },
  { id: '5767e145-875b-42ff-b24c-79678201b76e', name: 'Punit', roleFr: 'Webmaster', roleEn: 'Webmaster', group: 1,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/f71ada28-0d58-44c5-b72c-ed40de9ae12b.jpeg', initials: 'P' },

  // Marketing & content
  { id: '68f2d091-4c62-4cd6-aecc-c96c8893290d', name: 'Avinda Marianaa', roleFr: 'Spécialiste marketing', roleEn: 'Marketing specialist', group: 2,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/7bae90f2-3176-436c-85c7-b40829f413ca.jpeg', initials: 'AM' },
  { id: '98c83d64-987b-4917-97e0-491d1f4e0724', name: 'Setiawan', roleFr: 'Spécialiste marketing', roleEn: 'Marketing specialist', group: 2,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/b9fc9a5b-9cdd-4bfb-a71f-511e8c206bed.jpg', initials: 'S' },
  { id: 'be18972a-3010-4f5f-bac4-dfff56e0aeb0', name: 'Abriel Zildan Al Fajri', roleFr: 'Rédacteur', roleEn: 'Copywriter', group: 2,
    photo: null, initials: 'AZ' },
  { id: '4f28385f-fc8f-48af-a87f-bfe13f2df386', name: 'Lolly Gita Febriani', roleFr: 'Vidéaste', roleEn: 'Video maker', group: 2,
    photo: null, initials: 'LG' },
  { id: '2a44c713-6c12-4544-a82d-906356b5de2f', name: 'Uswatun Hasanah', roleFr: 'Vidéaste', roleEn: 'Video maker', group: 2,
    photo: null, initials: 'UH' },

  // Community
  { id: '5718f799-3667-4aaa-8934-6e6b2f247934', name: 'Her Vinna', roleFr: 'Community manager', roleEn: 'Community manager', group: 3,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/552144f4-b289-41b0-b637-8adda23c32d3.jpg', initials: 'HV' },
  { id: '3151ee67-9d01-46de-bb33-acbacd7c1477', name: 'Inanta Febby A', roleFr: 'Community manager', roleEn: 'Community manager', group: 3,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/527a297b-e065-469b-ba8c-56e0a8474e14.jpeg', initials: 'IF' },
  { id: '2dee1852-9b6a-431f-aa4a-b3012f0e93dc', name: 'Novita', roleFr: 'Community manager', roleEn: 'Community manager', group: 3,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/acffd681-fa04-4d8a-962c-22c4918ee465.jpg', initials: 'N' },
  { id: '0b6ea1ab-a7d9-4177-8040-3369d1886d60', name: 'Siti Hanfia', roleFr: 'Community manager', roleEn: 'Community manager', group: 3,
    photo: null, initials: 'SH' },
  { id: '28137c75-0325-45fa-88b4-2efe493369f6', name: 'Suryani', roleFr: 'Community manager', roleEn: 'Community manager', group: 3,
    photo: null, initials: 'S' },

  // Twitch moderation
  { id: '96a9d54a-044d-4a0b-a52e-6f6828ccf55d', name: 'Diyan Novianti', roleFr: 'Modératrice Twitch', roleEn: 'Twitch moderator', group: 4,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/043f57b1-9801-4dea-8745-4311167fc80d.jpg', initials: 'DN' },
  { id: '77d3d29d-46c5-427d-91bf-f7d715d45454', name: 'Erna Wati', roleFr: 'Modératrice Twitch', roleEn: 'Twitch moderator', group: 4,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/333a9bdc-30c1-4ae2-8cce-1a109530af75.png', initials: 'EW' },
  { id: 'a8b30b3a-3347-4194-b671-8b59c9bcc187', name: 'Nengsih', roleFr: 'Modératrice Twitch', roleEn: 'Twitch moderator', group: 4,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/84bf53d3-80e8-4ca7-bbfc-57286e511690.png', initials: 'N' },
  { id: '58013cd8-3fd8-41a6-89c3-2afb315f612e', name: 'Rochmah Miya', roleFr: 'Modératrice Twitch', roleEn: 'Twitch moderator', group: 4,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/9d9ea7f8-ed15-4e81-a1b2-72e1e91cc0b8.png', initials: 'RM' },
  { id: '5d07f344-1d59-43ba-9373-babebe445780', name: 'Selly', roleFr: 'Modératrice Twitch', roleEn: 'Twitch moderator', group: 4,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/a0faa60e-8244-457f-a2f3-5924d1011fe1.jpg', initials: 'S' },
  { id: '1fb863aa-34e7-417f-af50-c5735d9c5df6', name: 'Victoria Salazar', roleFr: 'Modératrice Twitch', roleEn: 'Twitch moderator', group: 4,
    photo: null, initials: 'VS' },

  // Operations / account administration
  { id: '98e2e338-2905-4d54-972e-43618a605e47', name: "Guh I'ryadi", roleFr: 'Administrateur de compte', roleEn: 'Account administrator', group: 5,
    photo: null, initials: 'GI' },
  { id: '458b0a56-c736-4070-9cd9-c07645d0d17f', name: 'Krisno Vauzi', roleFr: 'Administrateur de compte', roleEn: 'Account administrator', group: 5,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/954667a4-2efc-49b4-9c44-12c029b7768f.jpeg', initials: 'KV' },
  { id: 'f6b037c8-5e5c-4d4e-b3ef-0d2281babdb8', name: 'Kurnia Rahayu', roleFr: 'Administratrice de compte', roleEn: 'Account administrator', group: 5,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/6495ff6f-e4dd-4b20-b449-f5171513a23c.png', initials: 'KR' },
  { id: '8484eb14-a489-4bf4-b9cf-4dabd78fcc7c', name: 'Mutaharoh Nurharina', roleFr: 'Administratrice de compte', roleEn: 'Account administrator', group: 5,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/78f65eb3-2fdf-4644-bd28-ff68df7ff173.webp', initials: 'MN' },
  { id: '3c393d9f-277b-4a7f-84c7-cce3b204d25a', name: 'Rahmat', roleFr: 'Administrateur de compte', roleEn: 'Account administrator', group: 5,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/d40c49fb-73d3-4dd2-b5c0-126ce725f060.jpg', initials: 'R' },
  { id: 'fd3b2a8d-e3ea-43e0-ad9f-90ff385484ad', name: 'Salimah Alfiyah', roleFr: 'Administratrice de compte', roleEn: 'Account administrator', group: 5,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/0c5f7aaf-ba7e-42b5-bf73-3461641a8ad1.jpg', initials: 'SA' },
  { id: 'ac08a995-835f-4ddb-a44b-f26a47adccfd', name: 'Yati Ramada Sari', roleFr: 'Administratrice de compte', roleEn: 'Account administrator', group: 5,
    photo: 'https://bcjjofdnyotmfhsuvkut.supabase.co/storage/v1/object/public/avatars/07d3bc53-a03e-4eaa-a15a-332f84f16284.jpg', initials: 'YR' },

  // Interns
  { id: 'ec8e0133-0fc2-4f1a-ba29-1a76ad32bb2f', name: 'Ara Azzahra', roleFr: 'Stagiaire', roleEn: 'Intern', group: 6,
    photo: null, initials: 'AA' },
];
