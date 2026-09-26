export interface ClinicStation {
  id: string;
  name: string;
  metro: 'Tulsa Metro' | 'Oklahoma City Metro' | 'Texas & Regional';
  address: string;
  phone: string;
  hours: string;
  doctorLead: string;
  services: string[];
  features: string[];
  image: string;
  walkInFriendly: boolean;
}

export interface DentalService {
  id: string;
  title: string;
  category: 'Preventative' | 'Orthodontics' | 'Pediatric' | 'Restorative';
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
}

export const STATIONS_DATA: ClinicStation[] = [
  {
    id: 'tulsa-sheridan',
    name: 'Tulsa South Sheridan Station',
    metro: 'Tulsa Metro',
    address: '2145 S. Sheridan Rd, Tulsa, OK 74129',
    phone: '(918) 948-6965',
    hours: 'Mon-Fri: 7:30 AM – 5:00 PM | Sat: 8:00 AM – 2:00 PM',
    doctorLead: 'Dr. Michael Chen, DDS & Dr. Sarah Bennett, DMD',
    services: ['Family Care', 'Pediatric Train Depot', 'Emergency Pain Relief', 'Invisalign'],
    features: ['Overhead G-Scale Model Train', 'Digital Intraoral 3D Scanning', 'Nitrous Oxide Sedation', 'Bilingual Team'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    walkInFriendly: true
  },
  {
    id: 'tulsa-broken-arrow',
    name: 'Broken Arrow Kenosha Station',
    metro: 'Tulsa Metro',
    address: '1950 W. Kenosha St, Broken Arrow, OK 74012',
    phone: '(918) 518-1526',
    hours: 'Mon-Fri: 7:30 AM – 5:00 PM',
    doctorLead: 'Dr. Katherine Miller, DDS',
    services: ['Dedicated Orthodontics', 'Invisalign Diamond', 'Wisdom Teeth', 'CEREC Crowns'],
    features: ['Victorian Clock Tower Lobby', '3D Cone Beam Imaging', 'Private Consultation Suites', 'Same-Day Repairs'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    walkInFriendly: true
  },
  {
    id: 'tulsa-owasso',
    name: 'Owasso 86th Street Station',
    metro: 'Tulsa Metro',
    address: '11805 E. 86th St N, Owasso, OK 74055',
    phone: '(918) 376-7900',
    hours: 'Mon-Fri: 8:00 AM – 5:00 PM',
    doctorLead: 'Dr. Aaron Vance, DDS',
    services: ['General Dentistry', 'Pediatric Care', 'Dental Implants', 'Teeth Whitening'],
    features: ['Depot Model Railroad', 'Kids Game Zone', 'Low-Dose Digital X-Rays', 'Flexible Financing'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    walkInFriendly: true
  },
  {
    id: 'tulsa-hills',
    name: 'Tulsa Hills Olympia Station',
    metro: 'Tulsa Metro',
    address: '7505 S. Olympia Ave, Tulsa, OK 74132',
    metroLead: 'South Tulsa Region',
    phone: '(918) 895-7700',
    hours: 'Mon-Fri: 7:30 AM – 5:00 PM',
    doctorLead: 'Dr. Emily Foster, DDS',
    services: ['Comprehensive Smiles', 'Clear Aligners', 'Gentle Sedation', 'Preventative Hygiene'],
    features: ['Victorian Train Station Facade', 'Comfort Padded Treatment Chairs', 'Oral Cancer Screening', 'Direct Insurance Billing'],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    walkInFriendly: true
  } as any,
  {
    id: 'okc-classen',
    name: 'Central OKC Classen Flagship',
    metro: 'Oklahoma City Metro',
    address: '3004 N. Classen Blvd, Oklahoma City, OK 73106',
    phone: '(405) 946-8800',
    hours: 'Mon-Fri: 7:30 AM – 5:30 PM | Sat: 8:00 AM – 2:00 PM',
    doctorLead: 'Dr. Glenn Ashmore, DDS (Founder) & Team',
    services: ['Full Spectrum Family Care', 'Advanced Orthodontic Center', 'Surgical Implants', 'Sedation Dentistry'],
    features: ['Historic Master Model Train Layout', 'State-of-the-Art Dental Laboratory', '14 Operatory Suites', 'Emergency Dental Access'],
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    walkInFriendly: true
  },
  {
    id: 'okc-edmond',
    name: 'Edmond Kelly Station',
    metro: 'Oklahoma City Metro',
    address: '1601 S. Kelly Ave, Edmond, OK 73013',
    phone: '(405) 757-2000',
    hours: 'Mon-Fri: 7:30 AM – 5:00 PM',
    doctorLead: 'Dr. Rebecca Hughes, DDS',
    services: ['Family Dentistry', 'Invisalign for Teens & Adults', 'Porcelain Veneers', 'Periodontal Therapy'],
    features: ['Authentic Locomotive Whistle Feature', 'Quiet Treatment Rooms', 'Overhead Streaming TV Screens', 'Senior Discounts'],
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    walkInFriendly: true
  },
  {
    id: 'okc-norman',
    name: 'Norman 24th Avenue Station',
    metro: 'Oklahoma City Metro',
    address: '1705 24th Ave NW, Norman, OK 73069',
    phone: '(405) 360-2200',
    hours: 'Mon-Fri: 7:30 AM – 5:00 PM',
    doctorLead: 'Dr. Tyler Jenkins, DDS',
    services: ['Campus & Family Smiles', 'Wisdom Tooth Extraction', 'Athletic Mouthguards', 'Preventative Cleanings'],
    features: ['Depot Model Train Circuit', 'Complimentary Hot Coffee & Tea Bar', 'Zero-Anxiety Nitrous Options', 'Walk-In Pain Relief'],
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80',
    walkInFriendly: true
  },
  {
    id: 'okc-del-city',
    name: 'Del City 29th Street Station',
    metro: 'Oklahoma City Metro',
    address: '4612 SE 29th St, Del City, OK 73115',
    phone: '(405) 677-2200',
    hours: 'Mon-Fri: 8:00 AM – 5:00 PM',
    doctorLead: 'Dr. Marcus Vance, DMD',
    services: ['Family Care', 'Dentures & Partials', 'Crown & Bridge Work', 'Children’s Checkups'],
    features: ['Train Conductor Hat Badges for Kids', 'Warm Blanket & Pillow Comfort Menu', 'CareCredit Accepted', 'Same-Day Toothache Care'],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    walkInFriendly: true
  }
];

export const SERVICES_DATA: DentalService[] = [
  {
    id: 'pediatric-depot',
    title: 'The Depot Kids Express (Pediatric Care)',
    category: 'Pediatric',
    tagline: 'Where Children Actually Look Forward to the Dentist',
    description: 'Our overhead model train tracks keep children smiling and relaxed from the moment they enter the waiting room. Our certified gentle pediatric team uses cheerful language, painless numbing techniques, and conductor badges for every brave smile.',
    benefits: ['Model train sets in every operatory', 'Nitrous oxide laughing gas for anxiety-free visits', 'Cavity-prevention fluoride & sealant treatments', 'Prizes and train tickets at every checkout'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ortho-invisalign',
    title: 'Invisalign & Clear Orthodontic Studio',
    category: 'Orthodontics',
    tagline: 'Precision 3D Digital Alignment Without Goopy Impressions',
    description: 'As one of Oklahoma’s leading Invisalign providers, we use iTero 3D digital scanners to map your entire smile in seconds. View a high-definition simulation of your straightened teeth before beginning treatment.',
    benefits: ['100% digital 3D scans — zero putty impressions', 'Virtually invisible aligners you can remove for eating', 'Average treatment completion in 6–12 months', 'Flexible low monthly payments with 0% interest options'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'same-day-cerec',
    title: 'CEREC Same-Day Ceramic Dental Crowns',
    category: 'Restorative',
    tagline: 'Permanent Precision Porcelain in a Single 90-Minute Visit',
    description: 'No temporary crowns that break or fall off. No waiting two weeks for a third-party dental lab. Using in-house 3D diamond milling, we design, mill, glaze, and permanently bond your tooth-colored ceramic crown in one visit.',
    benefits: ['Single appointment from start to permanent finish', 'Biocompatible medical-grade porcelain matching natural tooth enamel', 'Eliminates weeks of messy temporary acrylic crowns', 'Superior marginal fit and long-term durability'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gentle-sedation',
    title: 'Gentle Sedation & Phobia-Free Dentistry',
    category: 'Preventative',
    tagline: 'Never Let Fear Delay the Relief and Smile You Deserve',
    description: 'Dental phobia is completely normal. Our doctors offer multiple tiers of soothing comfort — from mild nitrous oxide to oral conscious relaxation — allowing you to rest comfortably while we restore your oral health.',
    benefits: ['Gentle nitrous oxide (laughing gas) with rapid recovery', 'Oral sedation for deeper calm during complex care', 'Soothing noise-canceling headphones & warm fleece blankets', 'Completely judgment-free clinical team'],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
  }
];
