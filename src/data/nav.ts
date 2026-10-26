import { windows, doors } from './products';
import { services } from './services';
import { locations } from './locations';

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  blurb?: string;
  badge?: string;
}

export interface NavGroup {
  id: string;
  label: string;
  href: string; // overview page for the group
  intro?: string;
  items: NavLink[];
  iconGrid?: boolean; // show items as an icon grid (windows/doors)
  side?: { title: string; links: NavLink[] };
}

const statusBadge = (s: string) => (s === 'active' ? undefined : 'Coming soon');

export const navGroups: NavGroup[] = [
  {
    id: 'windows',
    label: 'Windows',
    href: '/windows/',
    intro: 'Explore window styles',
    iconGrid: true,
    items: windows.map((w) => ({ label: w.name.replace(' Windows', ''), href: `/windows/${w.slug}/`, icon: w.icon, blurb: w.blurb })),
    side: {
      title: 'Windows',
      links: [
        { label: 'All window styles', href: '/windows/' },
        { label: 'Window replacement service', href: '/services/window-replacement/' },
        { label: 'Window & door trim', href: '/services/window-door-trim/' },
        { label: 'Energy savings & tax credits', href: '/energy-tax-credits/' },
        { label: 'Brands we install', href: '/brands/' },
      ],
    },
  },
  {
    id: 'doors',
    label: 'Doors',
    href: '/doors/',
    intro: 'Explore door styles',
    iconGrid: true,
    items: doors.map((d) => ({ label: d.name.replace(' Doors', '').replace('Hinged ', ''), href: `/doors/${d.slug}/`, icon: d.icon, blurb: d.blurb })),
    side: {
      title: 'Doors',
      links: [
        { label: 'All door styles', href: '/doors/' },
        { label: 'Door replacement service', href: '/services/door-replacement/' },
        { label: 'Dry rot at thresholds', href: '/services/dry-rot-repair/' },
        { label: 'Brands we install', href: '/brands/' },
      ],
    },
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services/',
    intro: 'What we do',
    items: [
      ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}/`, icon: s.icon, blurb: s.blurb })),
      { label: 'Energy Savings & Tax Credits', href: '/energy-tax-credits/', icon: 'energy', blurb: 'What incentives exist today' },
    ],
  },
  {
    id: 'why',
    label: 'Why Fomin',
    href: '/about/',
    intro: 'Why homeowners choose us',
    items: [
      { label: 'Certified Master Installers', href: '/about/#certified', icon: 'certified', blurb: 'Installation done right' },
      { label: 'Our Process', href: '/about/#process', icon: 'trim', blurb: 'From consultation to clean-up' },
      { label: 'Brands We Install', href: '/brands/', icon: 'picture', blurb: 'Trusted manufacturers' },
      { label: 'Project Gallery', href: '/gallery/', icon: 'bay', blurb: 'See our work' },
    ],
  },
  {
    id: 'locations',
    label: 'Locations',
    href: '/locations/',
    intro: 'Find your local branch',
    items: [
      ...locations.map((l) => ({
        label: `${l.city}, ${l.state}`,
        href: `/locations/${l.slug}/`,
        badge: statusBadge(l.status),
        blurb: l.status === 'active' ? 'Now serving' : l.state === 'CA' ? 'Planned California branch' : 'Next Oregon branch',
      })),
      { label: 'Salem service area cities', href: '/locations/salem-or/#service-area', blurb: 'Communities within 40 miles' },
    ],
  },
];

export const navLinks: NavLink[] = [
  { label: 'Gallery', href: '/gallery/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
