// Central business details. Edit this file to update contact info site-wide.

export const SITE = {
  name: 'Fomin Windows & Doors',
  shortName: 'Fomin',
  domain: 'fominwindowsdoors.com',
  url: 'https://fominwindowsdoors.com',
  phoneDisplay: '(503) 583-7956',
  phoneHref: 'tel:+15035837956',
  email: 'fominwindowsanddoors@gmail.com',
  emailHref: 'mailto:fominwindowsanddoors@gmail.com',
  homeBase: 'Salem, OR',
  serviceRadiusMiles: 40,

  // ---- OPTIONAL DETAILS -----------------------------------------------------
  // Leave a value as `null` until you have the real information. Anything that
  // is null is simply left off the site and out of structured data.
  ccbLicense: '253708' as string | null, // Oregon CCB number — required by Oregon law in advertising
  streetAddress: null as string | null,
  businessHours: null as string | null, // e.g. 'Mon–Fri 8am–5pm'
  yearFounded: null as string | null,
  ownerName: null as string | null,
  socialLinks: [] as { label: string; href: string }[],
};

export const ESTIMATE_HREF = '/contact/#estimate';

export const estimateMailto = (() => {
  const subject = 'Free estimate request';
  const body = [
    'Hi Fomin Windows & Doors,',
    '',
    "I'd like a free estimate.",
    '',
    'Name:',
    'Phone:',
    'Project address / city:',
    'What I need (windows, doors, dry rot, trim, waterproofing):',
    'Approximate number of windows/doors:',
    'Best time to reach me:',
    '',
    'Thank you!',
  ].join('\n');
  return `${SITE.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
})();
