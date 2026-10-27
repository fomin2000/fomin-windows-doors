// Services. Each entry generates a page at /services/<slug>/.

export interface Service {
  slug: string;
  name: string;
  icon: string;
  blurb: string;
  description: string;
  intro: string[];
  signs?: { title: string; items: string[] };
  includes: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'window-replacement',
    name: 'Window Replacement & Installation',
    icon: 'double-hung',
    blurb: 'Measured, ordered and installed by certified master installers',
    description:
      'Window replacement and installation in Salem, OR and within 40 miles. Every style and material, installed with proper flashing and sealing.',
    intro: [
      'New windows can make your home quieter, more comfortable and easier to maintain. The product matters — and so does the installation. A well-made window installed poorly can still leak air and water.',
      'We help you choose the right style and brand for your home and budget, measure every opening precisely, and install with careful flashing, insulation and sealing.',
    ],
    signs: {
      title: 'Signs it may be time to replace your windows',
      items: [
        'Drafts or cold spots near windows',
        'Fog or condensation between the panes',
        'Windows that stick, will not stay open, or will not lock',
        'Soft, discolored or rotting wood around the frame',
        'Single-pane glass or noticeable outside noise',
      ],
    },
    includes: [
      { title: 'In-home consultation', text: 'We look at your openings, talk through styles, materials and brands, and answer questions.' },
      { title: 'Precise measuring', text: 'Each opening is measured individually before anything is ordered.' },
      { title: 'Careful removal', text: 'Old units are removed with care for your interior and exterior finishes.' },
      { title: 'Rot inspection', text: 'We check the rough opening and sill for hidden dry rot and water damage.' },
      { title: 'Flashing & sealing', text: 'New windows are flashed, insulated and sealed to keep out water and air.' },
      { title: 'Trim & clean-up', text: 'Interior and exterior trim is finished and the work area is cleaned up.' },
    ],
    faqs: [
      { q: 'How long does window installation take?', a: 'It depends on the number and type of windows and whether repairs are needed. We give you a project-specific timeline with your estimate.' },
      { q: 'Do I have to replace every window at once?', a: 'No. Many homeowners replace windows in phases. We can help you prioritize the openings that need it most.' },
      { q: 'Which brand is best?', a: 'It depends on your home, budget and goals. We work with several manufacturers and will explain the trade-offs honestly.' },
    ],
    related: ['dry-rot-repair', 'waterproofing', 'window-door-trim'],
  },
  {
    slug: 'door-replacement',
    name: 'Door Replacement & Installation',
    icon: 'entry-door',
    blurb: 'Entry, patio, French, sliding and storm doors',
    description:
      'Entry and patio door replacement in Salem, OR and the surrounding 40 miles. Properly flashed thresholds, adjusted hardware and finished trim.',
    intro: [
      'A door that sticks, drafts or leaks at the threshold is more than an annoyance — water at a door sill is one of the most common causes of hidden dry rot.',
      'We replace entry doors, sliding and hinged French patio doors, and storm and screen doors, with careful attention to the sill pan, flashing and adjustment.',
    ],
    signs: {
      title: 'Signs it may be time for a new door',
      items: [
        'Daylight or drafts around the edges',
        'Water stains or soft flooring near the threshold',
        'A door that drags, sticks or will not latch',
        'Sliding doors that are hard to open',
        'Fogged or cracked glass panels',
      ],
    },
    includes: [
      { title: 'Style & material guidance', text: 'Fiberglass, steel, wood, vinyl and more.' },
      { title: 'Sill & subfloor check', text: 'We look for rot at the threshold and framing.' },
      { title: 'Sill pan & flashing', text: 'Water-management details that protect the opening.' },
      { title: 'Hardware & adjustment', text: 'Locks, handles and weatherstripping set up to operate smoothly.' },
      { title: 'Trim finishing', text: 'Interior casing and exterior trim completed.' },
    ],
    faqs: [
      { q: 'Can you replace just the door slab?', a: 'Sometimes. If the frame is square and sound a slab replacement may work; a full pre-hung unit is often better for air and water sealing. We will recommend what fits your situation.' },
      { q: 'Can I add sidelights or make the opening bigger?', a: 'Often, yes. Changing the opening size may involve framing and permits — we will explain what is involved.' },
    ],
    related: ['dry-rot-repair', 'waterproofing', 'window-door-trim'],
  },
  {
    slug: 'dry-rot-repair',
    name: 'Dry Rot Repair',
    icon: 'dry-rot',
    blurb: 'Find and repair rotted framing, sills and trim',
    description:
      'Dry rot repair around windows and doors in Salem, OR. We remove decayed wood, repair sills, framing and trim, and fix the water source.',
    intro: [
      'In the Willamette Valley, months of rain make wood rot one of the most common problems we see around windows and doors. "Dry rot" is the everyday name for fungal decay in wood that has stayed damp — it often starts where water gets behind trim or under a sill.',
      'Rot is frequently hidden. By the time paint bubbles or wood feels soft, damage can extend into the framing. We open up the area, remove decayed material, repair or replace it, and — most importantly — correct the water problem that caused it.',
    ],
    signs: {
      title: 'Warning signs of dry rot',
      items: [
        'Wood that feels soft or spongy when pressed',
        'Peeling or bubbling paint on trim or sills',
        'Cracked, crumbling or discolored wood',
        'Musty odors near windows or doors',
        'Gaps opening up between trim and siding',
        'Water stains on interior walls below windows',
      ],
    },
    includes: [
      { title: 'Inspection', text: 'We probe and inspect around the opening to find the extent of the damage.' },
      { title: 'Removal of decayed wood', text: 'Rotted sill, framing, sheathing or trim is cut out.' },
      { title: 'Structural repair', text: 'Damaged framing and sills are rebuilt with appropriate materials.' },
      { title: 'Water-source fix', text: 'Flashing, caulking or drainage problems that caused the rot are corrected.' },
      { title: 'Trim & finish', text: 'New trim is installed and prepared for paint.' },
    ],
    faqs: [
      { q: 'Can dry rot be repaired during window replacement?', a: 'Yes — window and door replacement is the ideal time, because the opening is already exposed. We include an inspection with every replacement.' },
      { q: 'How much does dry rot repair cost?', a: 'It depends entirely on how far the damage extends, which often is not known until the area is opened. We will explain what we find before going further.' },
    ],
    related: ['waterproofing', 'window-door-trim', 'window-replacement'],
  },
  {
    slug: 'waterproofing',
    name: 'Waterproofing & Flashing',
    icon: 'waterproofing',
    blurb: 'Keep rain out of window and door openings',
    description:
      'Window and door waterproofing in Salem, OR: flashing, sill pans, weather-resistive barrier repair and sealing to stop leaks and prevent rot.',
    intro: [
      'Windows and doors are openings in your home’s weather barrier. Keeping Oregon rain out depends on layers that work together: flashing tape, sill pans, the weather-resistive barrier behind your siding, and properly placed sealant.',
      'When any layer is missing or installed in the wrong order, water can get into the wall where you cannot see it. We correct those details during installation and repair.',
    ],
    signs: {
      title: 'Signs of a water-management problem',
      items: [
        'Leaks or drips during heavy or wind-driven rain',
        'Stains on drywall or flooring below windows or doors',
        'Swollen or warped interior trim',
        'Failed, cracked or missing caulk on the exterior',
        'Recurring dry rot in the same spot',
      ],
    },
    includes: [
      { title: 'Sill pans', text: 'A sloped pan under the window or door directs any water back outside.' },
      { title: 'Shingle-style flashing', text: 'Flashing tape is lapped so water always flows outward and down.' },
      { title: 'Weather barrier repair', text: 'Damaged house wrap or building paper around the opening is repaired and integrated.' },
      { title: 'Head flashing', text: 'Metal or membrane flashing above openings where appropriate.' },
      { title: 'Sealing', text: 'Sealant and low-expansion foam applied where they belong — not as a substitute for flashing.' },
    ],
    faqs: [
      { q: 'Isn’t caulk enough to stop leaks?', a: 'Caulk is the last line of defense, not the first. Lasting results come from correct flashing and drainage behind the siding.' },
      { q: 'Do you waterproof basements or roofs?', a: 'Our waterproofing work focuses on window and door openings and the wall areas around them.' },
    ],
    related: ['dry-rot-repair', 'window-replacement', 'door-replacement'],
  },
  {
    slug: 'window-door-trim',
    name: 'Window & Door Trim',
    icon: 'trim',
    blurb: 'Interior casing and exterior trim, installed or replaced',
    description:
      'Interior and exterior window and door trim in Salem, OR: casing, sills, aprons and exterior trim boards installed, replaced or repaired.',
    intro: [
      'Trim is what makes a window or door look finished. Inside, casing, stools and aprons frame the opening. Outside, trim boards protect the edges of the opening and help shed water.',
      'We replace damaged or rotted trim, match existing profiles where possible, and can update trim to give rooms a fresh look.',
    ],
    includes: [
      { title: 'Interior casing', text: 'Casing, stools and aprons in the profile that suits your home.' },
      { title: 'Exterior trim', text: 'Rot-resistant trim options and proper detailing to shed water.' },
      { title: 'Matching existing trim', text: 'We match profiles as closely as practical.' },
      { title: 'Paint-ready finish', text: 'Nail holes filled and joints caulked, ready for paint.' },
    ],
    faqs: [
      { q: 'Do you paint the trim?', a: 'Please ask about painting for your specific project when you request an estimate.' },
      { q: 'Can you replace trim without replacing the window?', a: 'Yes. Trim replacement and repair is available as a stand-alone service.' },
    ],
    related: ['dry-rot-repair', 'window-replacement', 'door-replacement'],
  },
];
