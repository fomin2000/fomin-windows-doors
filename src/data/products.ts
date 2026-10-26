// Window and door styles. Each entry generates its own page and appears in the
// navigation mega menus with its icon (see src/components/Icon.astro).

export interface Product {
  slug: string;
  name: string;
  icon: string;
  blurb: string; // short line for menus and cards
  description: string; // meta description
  intro: string[];
  bestFor: string[];
  highlights: { title: string; text: string }[];
  considerations: string[];
}

export const windows: Product[] = [
  {
    slug: 'double-hung',
    name: 'Double-Hung Windows',
    icon: 'double-hung',
    blurb: 'Two sashes that slide up and down',
    description:
      'Double-hung replacement windows installed in Salem, OR and the Willamette Valley. Both sashes open and many tilt in for easy cleaning.',
    intro: [
      'Double-hung windows are the classic choice for Northwest homes. Both the upper and lower sash slide vertically, so you can open the top for gentle airflow, the bottom for a breeze, or both at once.',
      'Many double-hung models have sashes that tilt inward, which makes cleaning second-story glass possible from inside the house.',
    ],
    bestFor: ['Traditional, craftsman and colonial homes', 'Bedrooms and living areas', 'Second-story rooms where you want to clean glass from inside'],
    highlights: [
      { title: 'Flexible ventilation', text: 'Open the top, the bottom, or both to move air through the room.' },
      { title: 'Tilt-in cleaning', text: 'Tilt-in sashes are available on many product lines.' },
      { title: 'Timeless look', text: 'Fits historic and newer homes alike, with optional grille patterns.' },
    ],
    considerations: ['Opening size is limited to roughly half the window at a time.', 'Window air conditioners need a compatible opening style.'],
  },
  {
    slug: 'single-hung',
    name: 'Single-Hung Windows',
    icon: 'single-hung',
    blurb: 'Bottom sash slides up, top stays fixed',
    description:
      'Single-hung windows for Salem-area homes: a budget-friendly, low-maintenance style with a fixed top sash and operable bottom sash.',
    intro: [
      'Single-hung windows look much like double-hung windows, but only the bottom sash moves. The fixed top sash means fewer moving parts and, often, a lower price.',
    ],
    bestFor: ['Budget-conscious full-home replacements', 'Ground-floor rooms', 'Matching an existing single-hung look'],
    highlights: [
      { title: 'Value', text: 'Typically one of the most economical operable styles.' },
      { title: 'Simple operation', text: 'Fewer moving parts to maintain.' },
      { title: 'Classic proportions', text: 'Same familiar look as a hung window.' },
    ],
    considerations: ['The upper sash does not open or tilt for cleaning.'],
  },
  {
    slug: 'casement',
    name: 'Casement Windows',
    icon: 'casement',
    blurb: 'Hinged on the side, cranks outward',
    description:
      'Casement windows installed in Salem, Keizer and the mid-Willamette Valley. Side-hinged windows that crank open for full ventilation and seal tightly when closed.',
    intro: [
      'Casement windows are hinged on one side and crank outward like a door. Because the whole sash opens, they catch side breezes and provide excellent ventilation.',
      'When closed, the sash presses against the frame, which helps create a tight seal against wind and rain.',
    ],
    bestFor: ['Kitchens, especially over sinks and counters', 'Hard-to-reach spots', 'Contemporary and modern homes'],
    highlights: [
      { title: 'Full opening', text: 'The entire sash swings open for maximum airflow.' },
      { title: 'Easy reach', text: 'A crank handle is easy to operate over a counter.' },
      { title: 'Tight seal', text: 'Sash compresses against the weatherstripping when locked.' },
    ],
    considerations: ['Sashes swing outward, so check clearance near walkways and decks.', 'Some egress codes affect sizing in bedrooms — we check this during measuring.'],
  },
  {
    slug: 'awning',
    name: 'Awning Windows',
    icon: 'awning',
    blurb: 'Hinged on top, opens outward',
    description:
      'Awning windows for Oregon homes: top-hinged windows that open outward so you can ventilate even during light rain.',
    intro: [
      'Awning windows are hinged at the top and open outward from the bottom. The open sash acts like a small roof, so you can often keep it open during a light Willamette Valley drizzle.',
    ],
    bestFor: ['Bathrooms and basements', 'Above or below larger fixed windows', 'Rooms that need privacy and ventilation'],
    highlights: [
      { title: 'Rain-friendly ventilation', text: 'The angled sash helps shed light rain.' },
      { title: 'Pairs well', text: 'Often combined with picture windows for light plus airflow.' },
      { title: 'Privacy', text: 'Can be placed high on a wall.' },
    ],
    considerations: ['Opening size is smaller than a casement of the same dimensions.'],
  },
  {
    slug: 'hopper',
    name: 'Hopper Windows',
    icon: 'hopper',
    blurb: 'Hinged on the bottom, tilts inward',
    description: 'Hopper windows for basements, bathrooms and transoms in Salem-area homes.',
    intro: [
      'Hopper windows are hinged at the bottom and tilt inward from the top. They are compact, simple, and common in basements, bathrooms and as transoms.',
    ],
    bestFor: ['Basements', 'Bathrooms and utility rooms', 'Transom positions above doors or windows'],
    highlights: [
      { title: 'Compact', text: 'Works in tight spaces where other styles do not fit.' },
      { title: 'Secure', text: 'Small opening with a firm closing latch.' },
      { title: 'Ventilation', text: 'Directs air upward into the room.' },
    ],
    considerations: ['Opens into the room, so keep window coverings in mind.'],
  },
  {
    slug: 'sliding',
    name: 'Sliding Windows',
    icon: 'sliding',
    blurb: 'Sashes glide side to side',
    description:
      'Sliding (gliding) replacement windows for Salem, OR homes. Easy-to-open horizontal sashes for wide openings.',
    intro: [
      'Sliding windows have one or more sashes that glide horizontally along a track. They are easy to open, a good fit for wide openings, and a very common style in ranch and mid-century homes.',
    ],
    bestFor: ['Wide, short openings', 'Ranch-style and mid-century homes', 'Rooms that face patios or walkways'],
    highlights: [
      { title: 'Easy operation', text: 'No crank or lift — just slide.' },
      { title: 'Wide views', text: 'Horizontal layout suits wide wall openings.' },
      { title: 'Space-saving', text: 'Nothing swings in or out.' },
    ],
    considerations: ['Only part of the window opens at once.', 'Tracks benefit from occasional cleaning.'],
  },
  {
    slug: 'picture',
    name: 'Picture Windows',
    icon: 'picture',
    blurb: 'Large fixed glass for views and light',
    description:
      'Picture windows installed in the Salem area: large fixed windows that frame your view and bring in natural light.',
    intro: [
      'Picture windows do not open, which allows for larger panes of glass and slimmer frames. The result is an unobstructed view and lots of natural daylight.',
      'They are frequently combined with casement or awning windows on either side when ventilation is also needed.',
    ],
    bestFor: ['Living rooms and great rooms', 'Rooms with a view', 'Pairing with operable windows'],
    highlights: [
      { title: 'Maximum light', text: 'More glass, less frame.' },
      { title: 'Energy-friendly', text: 'Fixed glass has no operable seals to wear out.' },
      { title: 'Combinations', text: 'Mix with other styles for airflow.' },
    ],
    considerations: ['Does not open for ventilation or egress.'],
  },
  {
    slug: 'bay',
    name: 'Bay Windows',
    icon: 'bay',
    blurb: 'Three windows that project outward',
    description:
      'Bay window replacement and installation in Salem, OR. Projecting window units that add space, light and a cozy seat.',
    intro: [
      'A bay window combines three windows — typically a large center unit flanked by two angled side windows — projecting outward from the wall. Bays add interior space, light from multiple directions and a natural spot for a window seat.',
      'Because bays project from the house, roof flashing, support and waterproofing details matter. We inspect the existing structure for dry rot before replacement.',
    ],
    bestFor: ['Living and dining rooms', 'Creating a reading nook or window seat', 'Adding curb appeal'],
    highlights: [
      { title: 'More space', text: 'Projects outward to open up the room.' },
      { title: 'Panoramic light', text: 'Glass on three sides.' },
      { title: 'Ventilation options', text: 'Side units can be operable casements or hung windows.' },
    ],
    considerations: ['Requires careful structural support, roofing and flashing details.'],
  },
  {
    slug: 'bow',
    name: 'Bow Windows',
    icon: 'bow',
    blurb: 'Four or more windows in a gentle curve',
    description: 'Bow windows in Salem and the Willamette Valley: curved, multi-window units that add light and character.',
    intro: [
      'Bow windows use four or more equal-width windows arranged in a gentle arc. Compared with a bay, a bow has a softer, rounded profile and a wider sweep of view.',
    ],
    bestFor: ['Front-facing living rooms', 'Victorian and traditional homes', 'Wide wall openings'],
    highlights: [
      { title: 'Graceful curve', text: 'A rounded silhouette inside and out.' },
      { title: 'Wide view', text: 'Captures a broad panorama.' },
      { title: 'Custom layouts', text: 'Mix fixed and operable units.' },
    ],
    considerations: ['Like bays, needs proper support, roof and flashing details.'],
  },
  {
    slug: 'garden',
    name: 'Garden Windows',
    icon: 'garden',
    blurb: 'A small glass box for plants and light',
    description: 'Garden windows for kitchens in Salem-area homes: a projecting glass box with shelves for herbs and plants.',
    intro: [
      'A garden window projects out from the wall like a small greenhouse, with glass on the top and sides. It is a favorite over kitchen sinks for growing herbs and brightening the room.',
    ],
    bestFor: ['Kitchens over the sink', 'Plant lovers', 'Small rooms that need more light'],
    highlights: [
      { title: 'Shelf space', text: 'Room for plants and décor.' },
      { title: 'Extra light', text: 'Glass on the top and sides.' },
      { title: 'Ventilation', text: 'Side vents on many models.' },
    ],
    considerations: ['Projecting glass needs careful flashing to keep water out.'],
  },
  {
    slug: 'specialty',
    name: 'Specialty Shape Windows',
    icon: 'specialty',
    blurb: 'Arches, circles, trapezoids and custom shapes',
    description: 'Specialty and custom-shape windows — arches, half-rounds, circles and geometric shapes — installed in the Salem area.',
    intro: [
      'Specialty windows come in arches, half-rounds, circles, octagons, trapezoids and other custom shapes. They add architectural character and are often paired with standard windows below.',
    ],
    bestFor: ['Vaulted ceilings and gable walls', 'Entryways and stairwells', 'Adding architectural detail'],
    highlights: [
      { title: 'Made to fit', text: 'Built to the exact shape of the opening.' },
      { title: 'Character', text: 'A design focal point.' },
      { title: 'Light where it counts', text: 'Brings daylight high into rooms.' },
    ],
    considerations: ['Custom shapes usually have longer lead times.', 'Most specialty shapes are fixed (non-opening).'],
  },
];

export const doors: Product[] = [
  {
    slug: 'entry',
    name: 'Entry Doors',
    icon: 'entry-door',
    blurb: 'Front doors with style and security',
    description:
      'Front and entry door replacement in Salem, OR. Fiberglass, steel and wood entry doors with optional sidelights and transoms.',
    intro: [
      'Your front door is the first thing guests notice and one of the most-used parts of your home. A new entry door can improve curb appeal, security and comfort at the same time.',
      'Entry doors are available in fiberglass, steel and wood, with options for decorative glass, sidelights and transoms.',
    ],
    bestFor: ['Front entries', 'Side and back doors', 'Upgrading drafty or damaged doors'],
    highlights: [
      { title: 'Curb appeal', text: 'Choose styles, colors, glass and hardware.' },
      { title: 'Security', text: 'Solid construction with multi-point lock options.' },
      { title: 'Weather-tight', text: 'A properly installed, flashed threshold keeps water out.' },
    ],
    considerations: ['Sidelights and transoms may change the opening size.', 'Rotted thresholds and jambs are common — we check before installing.'],
  },
  {
    slug: 'sliding-patio',
    name: 'Sliding Patio Doors',
    icon: 'sliding-door',
    blurb: 'Space-saving glass doors that glide open',
    description: 'Sliding patio door replacement in Salem and the Willamette Valley. Smooth-gliding glass doors for decks and patios.',
    intro: [
      'Sliding patio doors glide along a track, so they never swing into your living space. Large glass panels bring in daylight and connect your home to the deck or yard.',
    ],
    bestFor: ['Decks and patios', 'Rooms with limited swing space', 'Replacing old, hard-to-slide doors'],
    highlights: [
      { title: 'Saves space', text: 'Nothing swings into the room.' },
      { title: 'Daylight', text: 'Large glass panels.' },
      { title: 'Smooth operation', text: 'Modern rollers and tracks glide easily.' },
    ],
    considerations: ['Only one panel opens on a standard two-panel door.'],
  },
  {
    slug: 'french-patio',
    name: 'Hinged French Patio Doors',
    icon: 'french-door',
    blurb: 'Classic double doors that swing open',
    description: 'Hinged French patio doors installed in Salem, OR. Elegant swinging doors for patios, decks and gardens.',
    intro: [
      'Hinged French doors swing open on hinges like a traditional door, often as a pair. With both doors open you get a wide, inviting opening to the outdoors.',
    ],
    bestFor: ['Traditional and craftsman homes', 'Wide openings to patios and gardens', 'A classic, elegant look'],
    highlights: [
      { title: 'Wide opening', text: 'Open both doors for easy flow.' },
      { title: 'Timeless style', text: 'Grille patterns and hardware options.' },
      { title: 'In-swing or out-swing', text: 'Configured to suit your space.' },
    ],
    considerations: ['Needs clear swing space inside or outside.'],
  },
  {
    slug: 'multi-slide',
    name: 'Multi-Slide Doors',
    icon: 'multi-slide',
    blurb: 'Large panels that stack for a wide opening',
    description: 'Multi-slide and multi-panel patio doors for Salem-area homes: wide glass walls that slide and stack open.',
    intro: [
      'Multi-slide doors use three or more large glass panels that slide and stack behind one another, creating a much wider opening than a standard patio door.',
    ],
    bestFor: ['Indoor-outdoor living', 'Large openings and remodels', 'Modern homes'],
    highlights: [
      { title: 'Wide opening', text: 'Panels stack to open a large span.' },
      { title: 'Glass walls', text: 'Floods the room with daylight.' },
      { title: 'Custom layouts', text: 'Many panel configurations.' },
    ],
    considerations: ['Larger openings may require structural header work.', 'Longer lead times are common.'],
  },
  {
    slug: 'bifold',
    name: 'Bifold Doors',
    icon: 'bifold',
    blurb: 'Panels that fold away like an accordion',
    description: 'Bifold patio doors installed in the Salem area: folding glass panels that open nearly the whole wall.',
    intro: [
      'Bifold doors are made of panels hinged together that fold neatly to one or both sides, opening almost the entire width of the wall.',
    ],
    bestFor: ['Entertaining spaces', 'Kitchens that open to a patio', 'Maximum opening width'],
    highlights: [
      { title: 'Nearly full opening', text: 'Panels fold out of the way.' },
      { title: 'Flexible', text: 'Use one panel as an everyday door on many layouts.' },
      { title: 'Statement feature', text: 'A dramatic indoor-outdoor connection.' },
    ],
    considerations: ['Requires precise, level installation and a strong header.'],
  },
  {
    slug: 'storm',
    name: 'Storm & Screen Doors',
    icon: 'storm-door',
    blurb: 'Extra protection and fresh air',
    description: 'Storm and screen door installation in Salem, OR to protect your entry door and let fresh air in.',
    intro: [
      'A storm or screen door adds a layer of protection in front of your entry door and lets you enjoy fresh air while keeping bugs out.',
    ],
    bestFor: ['Protecting a wood entry door from weather', 'Ventilation on mild days', 'Homes with pets and kids'],
    highlights: [
      { title: 'Protection', text: 'Shields the main door from rain and sun.' },
      { title: 'Fresh air', text: 'Screen panels for ventilation.' },
      { title: 'Easy upgrade', text: 'Usually a quick installation.' },
    ],
    considerations: ['Full-glass storm doors in direct sun can trap heat against some doors — ask us about your door.'],
  },
];

export const materials = [
  { name: 'Vinyl', text: 'Low maintenance and budget-friendly. Never needs painting.' },
  { name: 'Fiberglass', text: 'Strong, stable in temperature swings, and paintable on many lines.' },
  { name: 'Wood', text: 'Natural warmth and classic beauty; needs periodic finishing.' },
  { name: 'Clad wood', text: 'Wood inside with a protective exterior cladding outside.' },
  { name: 'Composite', text: 'Engineered materials that combine strength and low maintenance.' },
];
