// ─────────────────────────────────────────────────────────────────────────────
//  SALON SETTINGS
//  Everything specific to one salon lives in this file. Edit the values below,
//  replace the photos in public/img/, and the whole site updates.
//
//  After changing `name`, `seo` or `theme`, restart `npm run dev`
//  so the browser-tab title and icon pick up the change.
// ─────────────────────────────────────────────────────────────────────────────

const salon = {
  // Shown in the header, footer, browser tab and the text message.
  name: 'Hats Off Hair Design',

  // Two-line wordmark beside the hat logo in the header and footer.
  logo: { lead: 'Hats Off', sub: 'Hair Design' },

  // Big headline at the top. `accent` is shown in italics.
  heroTitle: { lead: 'Hats Off', accent: 'Hair Design' },

  // Small line above the headline.
  eyebrow: 'Hair salon · Sun City, CA',

  // One-sentence description under the headline.
  tagline:
    'Cuts, color and special-occasion styling in a cute, spotless little shop in Sun City, where clients stay for years.',

  // Short quote beside the hero photos (desktop only). Use a real review line.
  heroQuote: '“Strangers stop and ask me for my stylist. The cut does make a difference!”',

  phone: {
    display: '(951) 679-9388',
    // Same number in international format: + country code, then digits only.
    e164: '+19516799388',
  },

  address: {
    street: '27136 Shadel Rd',
    cityLine: 'Sun City, CA 92586',
    // Shorter version used in the hero facts row.
    short: '27136 Shadel Rd, Sun City',
  },

  // Hours aren't published, so every hours section is hidden. To show them, list
  // exactly 7 days, Monday first, marking closed days with `closed: true`, e.g.
  //   { day: 'Monday', time: '9am – 5pm' }, …, { day: 'Sunday', time: 'Closed', closed: true }
  // and fill in hoursSummary: { open: 'Mon–Sat 9am–5pm', closed: 'Sunday' }.
  hours: [],
  hoursSummary: null,

  // Browser tab title and Google description.
  seo: {
    title: 'Hats Off Hair Design · Hair Salon in Sun City, CA',
    description:
      'Hats Off Hair Design — friendly neighborhood hair salon in Sun City, CA offering haircuts, color, highlights and wedding & special-occasion styling.',
  },

  // Brand colors. `primary` is the dark background; `accent` is buttons and highlights.
  theme: {
    primary: '#3f1d2b', // mulberry
    accent: '#efc1b4', // blush rose
    accentHover: '#f6d4ca',
    accentDeep: '#9b4652', // darker accent for small labels on light backgrounds
  },

  // Photos live in public/img/. `position` is the focal point when a photo is cropped.
  images: {
    heroArch: {
      src: '/img/floral-updo.jpg',
      alt: 'Bridal updo with a crown of blush and burgundy roses',
      position: '50% 42%',
    },
    heroSide: {
      src: '/img/stylist-at-work.jpg',
      alt: 'Stylist pinning up a client’s hair in the salon',
      position: '50% 30%',
    },
  },

  // The gallery section is hidden while `items` is empty. Add photos here when you have them:
  //   { src: '/img/look-1.jpg', label: 'Soft highlights' }
  gallery: {
    note: 'Color, cuts and styling from our chairs.',
    items: [],
  },

  services: {
    note: "Not sure what to book? Text us a photo of what you have in mind and we'll point you to the right service.",
    groups: [
      {
        name: 'Cut & style',
        items: ['Haircut', 'Blowout & style', 'Updos', 'Wedding & special-occasion hair'],
      },
      {
        name: 'Color',
        items: ['All-over color', 'Highlights', 'Lightening', 'Root touch-up'],
      },
      {
        name: 'Nails',
        items: ['Manicure', 'Special-occasion nails'],
      },
    ],
  },

  reviews: {
    note: 'From Google reviews',
    items: [
      {
        name: 'Patty',
        when: 'a year ago',
        text: 'Today was my first day at Hats Off. Lina did my hair highlights, base, lift and haircut, and she did a fantastic job. I definitely give her five stars, and the salon, and I will be returning. Thank you so much!',
      },
      {
        name: 'Margaret “Peggy” Nightengale',
        when: '2 years ago',
        text: 'Janet (owner/operator) cuts my hair and does a beautiful job. Since her smiling self has been doing my hair, I have received multiple compliments, strangers stop and ask me for my stylist. The cut does make a difference!',
      },
      {
        name: 'Linda Gatewood',
        when: '4 years ago',
        text: 'Rose did an amazing job with what she had to work with! She kept me engaged in conversation, explained everything she was doing, everybody was very friendly and hospitable! I would highly recommend this salon, and will be a permanent client as long as I am living where I am!\nThank you so much Rose for making today a very enjoyable experience!',
      },
      {
        name: 'Cathy Maestas',
        when: '5 years ago',
        text: 'Janet is the owner and gives me the best haircuts I’ve had in 8 years. Not only is she affordable, she works with your schedule. It’s a cute shop and very clean. Give her a try!',
      },
      {
        name: 'Wendy Collison',
        when: '6 years ago',
        text: 'I was new to the area and this is very close to home. I got married Feb 2020 and I wanted my hair done for my wedding and they did an amazing job. I also got my nails done; they matched my dress perfectly. Thank you, ladies, for making my day very special.',
      },
    ],
  },

  booking: {
    notesPlaceholder: 'e.g. Wedding on June 12, want a soft updo with flowers',
  },
};

export default salon;

// ── Derived values (no need to edit) ─────────────────────────────────────────
export const mapsUrl =
  'https://maps.google.com/?q=' +
  encodeURIComponent(`${salon.address.street} ${salon.address.cityLine}`).replace(/%20/g, '+');

export const serviceOptions = ['Not sure yet', ...salon.services.groups.flatMap((g) => g.items)];

export const timesOfDay = ['Morning', 'Midday', 'Afternoon'];
