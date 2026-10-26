// Branch locations. Each entry generates a page at /locations/<slug>/.
//
// status:
//   'active'      – currently serving customers from this branch
//   'coming-soon' – branch page is live but the branch is not yet open
//
// To open a branch, change its status to 'active' and fill in its details.
// California branches must not be switched to 'active' until a California
// CSLB contractor license is in place (see README).

export interface Location {
  slug: string;
  city: string;
  state: 'OR' | 'CA';
  stateName: string;
  status: 'active' | 'coming-soon';
  headline: string;
  description: string;
  intro: string[];
  areas: { name: string; miles?: number }[];
  areasNote: string;
  climateNotes: { title: string; text: string }[];
  licenseNote: string;
}

export const locations: Location[] = [
  {
    slug: 'salem-or',
    city: 'Salem',
    state: 'OR',
    stateName: 'Oregon',
    status: 'active',
    headline: 'Window & door replacement in Salem, Oregon',
    description:
      'Fomin Windows & Doors serves Salem, OR and communities within about 40 miles, including Keizer, Albany, McMinnville, Woodburn, Silverton, Dallas and Corvallis.',
    intro: [
      'Salem is our home base and our first branch. We serve homeowners across Marion, Polk, Yamhill, Linn, Benton, Clackamas and Washington counties — anywhere within roughly 40 miles of Salem.',
      'If you do not see your community listed, call or email us. We are happy to tell you whether your home is in our service area.',
    ],
    areas: [
      { name: 'Salem', miles: 0 },
      { name: 'Keizer', miles: 3 },
      { name: 'Turner', miles: 8 },
      { name: 'Brooks', miles: 8 },
      { name: 'Rickreall', miles: 9 },
      { name: 'Independence', miles: 10 },
      { name: 'Aumsville', miles: 11 },
      { name: 'Monmouth', miles: 12 },
      { name: 'Silverton', miles: 13 },
      { name: 'Gervais', miles: 13 },
      { name: 'Dallas', miles: 14 },
      { name: 'Sublimity', miles: 14 },
      { name: 'Mount Angel', miles: 14 },
      { name: 'Amity', miles: 15 },
      { name: 'Stayton', miles: 15 },
      { name: 'Jefferson', miles: 16 },
      { name: 'Woodburn', miles: 16 },
      { name: 'Millersburg', miles: 18 },
      { name: 'Scio', miles: 19 },
      { name: 'St. Paul', miles: 19 },
      { name: 'Dayton', miles: 19 },
      { name: 'Hubbard', miles: 20 },
      { name: 'McMinnville', miles: 20 },
      { name: 'Falls City', miles: 20 },
      { name: 'Sheridan', miles: 21 },
      { name: 'Lafayette', miles: 21 },
      { name: 'Albany', miles: 22 },
      { name: 'Donald', miles: 22 },
      { name: 'Mehama', miles: 23 },
      { name: 'Dundee', miles: 23 },
      { name: 'Lyons', miles: 24 },
      { name: 'Willamina', miles: 24 },
      { name: 'Aurora', miles: 24 },
      { name: 'Newberg', miles: 25 },
      { name: 'Carlton', miles: 25 },
      { name: 'Molalla', miles: 27 },
      { name: 'Canby', miles: 28 },
      { name: 'Wilsonville', miles: 28 },
      { name: 'Tangent', miles: 28 },
      { name: 'Corvallis', miles: 28 },
      { name: 'Yamhill', miles: 29 },
      { name: 'Lebanon', miles: 29 },
      { name: 'Sherwood', miles: 30 },
      { name: 'Mill City', miles: 30 },
      { name: 'Philomath', miles: 32 },
      { name: 'Gates', miles: 33 },
      { name: 'Tualatin', miles: 33 },
      { name: 'Gaston', miles: 35 },
      { name: 'Oregon City', miles: 35 },
      { name: 'West Linn', miles: 36 },
      { name: 'Tigard', miles: 36 },
      { name: 'Gladstone', miles: 37 },
      { name: 'Lake Oswego', miles: 38 },
      { name: 'Brownsville', miles: 38 },
      { name: 'Halsey', miles: 39 },
      { name: 'Beaverton', miles: 39 },
      { name: 'Milwaukie', miles: 40 },
    ],
    areasNote:
      'Distances are approximate straight-line miles from downtown Salem. Driving distances are longer.',
    climateNotes: [
      { title: 'Long rainy season', text: 'Months of rain make flashing and water management around openings especially important.' },
      { title: 'Dry rot is common', text: 'Older Willamette Valley homes often hide rot under window sills and door thresholds.' },
      { title: 'Comfort year-round', text: 'Efficient windows help with damp winters and warm, dry summers.' },
    ],
    licenseNote: 'Oregon CCB license number',
  },
  {
    slug: 'portland-or',
    city: 'Portland',
    state: 'OR',
    stateName: 'Oregon',
    status: 'coming-soon',
    headline: 'Fomin Windows & Doors — Portland branch',
    description:
      'The Portland, OR branch of Fomin Windows & Doors: window and door replacement, dry rot repair and waterproofing for the Portland metro area.',
    intro: [
      'Fomin Windows & Doors is growing as a multi-branch company, and Portland is our next Oregon branch. The Portland branch will bring the same certified installation, dry rot repair and waterproofing services to the Portland metro area.',
      'Several south-metro communities — including Wilsonville, Tualatin, Tigard, Lake Oswego, West Linn and Oregon City — are already within our Salem service area. Call or email us to check your address.',
    ],
    areas: [
      { name: 'Portland' },
      { name: 'Beaverton' },
      { name: 'Hillsboro' },
      { name: 'Tigard' },
      { name: 'Tualatin' },
      { name: 'Lake Oswego' },
      { name: 'West Linn' },
      { name: 'Oregon City' },
      { name: 'Milwaukie' },
      { name: 'Happy Valley' },
      { name: 'Gladstone' },
      { name: 'Gresham' },
      { name: 'Troutdale' },
      { name: 'Fairview' },
      { name: 'Sherwood' },
      { name: 'Forest Grove' },
    ],
    areasNote: 'Planned Portland-branch service area. Final coverage will be announced when the branch opens.',
    climateNotes: [
      { title: 'Wet winters', text: 'Wind-driven rain tests every window and door seal.' },
      { title: 'Older housing stock', text: 'Many Portland homes have original wood windows and hidden rot.' },
      { title: 'Noise reduction', text: 'Modern glass packages can help quiet busy streets.' },
    ],
    licenseNote: 'Oregon CCB license number',
  },
  {
    slug: 'sacramento-ca',
    city: 'Sacramento',
    state: 'CA',
    stateName: 'California',
    status: 'coming-soon',
    headline: 'Fomin Windows & Doors — Sacramento, CA',
    description:
      'Fomin Windows & Doors plans to open a Sacramento, California branch. Learn about the planned service area and how to stay in touch.',
    intro: [
      'Fomin Windows & Doors is planning to expand to California, starting with the Sacramento area.',
      'We are not yet offering or contracting for work in California. This page will be updated when the Sacramento branch is licensed and open.',
    ],
    areas: [
      { name: 'Sacramento' },
      { name: 'Elk Grove' },
      { name: 'West Sacramento' },
      { name: 'Rancho Cordova' },
      { name: 'Folsom' },
      { name: 'Carmichael' },
      { name: 'Fair Oaks' },
      { name: 'Citrus Heights' },
      { name: 'Davis' },
    ],
    areasNote: 'Planned service area — subject to change before opening.',
    climateNotes: [
      { title: 'Hot summers', text: 'Glass that limits solar heat gain can help keep rooms cooler.' },
      { title: 'Sun exposure', text: 'UV-resistant frames and finishes hold up better in strong sun.' },
      { title: 'Title 24', text: 'California has its own energy code requirements for windows and doors.' },
    ],
    licenseNote: 'California CSLB license number',
  },
  {
    slug: 'roseville-ca',
    city: 'Roseville',
    state: 'CA',
    stateName: 'California',
    status: 'coming-soon',
    headline: 'Fomin Windows & Doors — Roseville, CA',
    description:
      'Fomin Windows & Doors plans to open a Roseville, California branch serving Placer County. Learn about the planned service area.',
    intro: [
      'Roseville is part of our planned California expansion, serving south Placer County alongside our planned Sacramento branch.',
      'We are not yet offering or contracting for work in California. This page will be updated when the Roseville branch is licensed and open.',
    ],
    areas: [
      { name: 'Roseville' },
      { name: 'Rocklin' },
      { name: 'Lincoln' },
      { name: 'Granite Bay' },
      { name: 'Loomis' },
      { name: 'Antelope' },
      { name: 'Citrus Heights' },
      { name: 'Auburn' },
    ],
    areasNote: 'Planned service area — subject to change before opening.',
    climateNotes: [
      { title: 'Heat and sun', text: 'Efficient glass helps manage summer heat in west- and south-facing rooms.' },
      { title: 'Newer construction', text: 'Many homes have builder-grade windows ready for an upgrade.' },
      { title: 'Title 24', text: 'California energy code requirements apply to replacement windows and doors.' },
    ],
    licenseNote: 'California CSLB license number',
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug)!;
