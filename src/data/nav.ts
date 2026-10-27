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

export interface NavSection {
  title: string;
  items: NavLink[];
}

export interface NavGroup {
  id: string;
  label: string;
  href: string; // overview page for the group
  sections: NavSection[];
  iconGrid?: boolean; // show items as an icon grid (windows/doors)
  side?: { title: string; links: NavLink[] };
}

// The main navigation is kept to four menus so the header stays uncluttered.
export const navGroups: NavGroup[] = [
  {
    id: 'windows',
    label: 'Windows',
    href: '/windows/',
    iconGrid: true,
    sections: [
      {
        title: 'Explore window styles',
        items: windows.map((w) => ({ label: w.name.replace(' Windows', ''), href: `/windows/${w.slug}/`, icon: w.icon, blurb: w.blurb })),
      },
    ],
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
    iconGrid: true,
    sections: [
      {
        title: 'Explore door styles',
        items: doors.map((d) => ({
          label: d.name.replace(' Doors', '').replace('Hinged ', ''),
          href: `/doors/${d.slug}/`,
          icon: d.icon,
          blurb: d.blurb,
        })),
      },
    ],
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
    sections: [
      {
        title: 'What we do',
        items: [
          ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}/`, icon: s.icon, blurb: s.blurb })),
          { label: 'Energy Savings & Tax Credits', href: '/energy-tax-credits/', icon: 'energy', blurb: 'What incentives exist today' },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    href: '/about/',
    sections: [
      {
        title: 'About Fomin',
        items: [
          { label: 'About Us', href: '/about/', blurb: 'Who we are and how we work' },
          { label: 'Certified Master Installers', href: '/about/#certified', blurb: 'Installation done right' },
          { label: 'Our Process', href: '/about/#process', blurb: 'From consultation to clean-up' },
          { label: 'Brands We Install', href: '/brands/', blurb: 'Trusted manufacturers' },
          { label: 'Project Gallery', href: '/gallery/', blurb: 'See our work' },
          { label: 'Contact Us', href: '/contact/', blurb: 'Call, email or get an estimate' },
        ],
      },
      {
        title: 'Locations',
        items: [
          ...locations.map((l) => ({
            label: `${l.city}, ${l.state}`,
            href: `/locations/${l.slug}/`,
            badge: l.status === 'active' ? undefined : 'Coming soon',
            blurb: l.status === 'active' ? 'Now serving' : l.state === 'CA' ? 'Planned California branch' : 'Next Oregon branch',
          })),
          { label: 'All locations', href: '/locations/', blurb: 'Find your local branch' },
          { label: 'Salem service area', href: '/locations/salem-or/#service-area', blurb: 'Communities within 40 miles' },
        ],
      },
    ],
  },
];
