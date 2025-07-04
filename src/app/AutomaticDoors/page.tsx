import type { Metadata } from 'next';
import AutomaticDoors from '@/Components/Services/AutomaticDoors/AutomaticDoors';

export const metadata: Metadata = {
  title: 'Automatic Door Installation – PrimeTech | Madison & Jackson, MS',
  description:
    'PrimeTech offers expert automatic door installation for businesses and facilities in Jackson, Madison, Ridgeland, and nearby areas. Enhance safety, accessibility, and convenience with ADA-compliant automatic doors.',
  keywords: [
    'Automatic doors Jackson MS',
    'ADA compliant doors Madison',
    'Automatic door installers Ridgeland',
    'Commercial sliding doors Mississippi',
    'Door automation PrimeTech'
  ],
  openGraph: {
    title: 'Automatic Door Solutions – PrimeTech | Mississippi',
    description:
      'Professional automatic door installation in Jackson, Madison & Ridgeland. Improve accessibility, safety, and appearance for your commercial space.',
    url: 'https://primetechmcs.com/AutomaticDoors',
    type: 'website',
    siteName: 'PrimeTech',
    images: [
      {
        url: 'https://primetechmcs.com/og-images/automatic-doors.jpg',
        width: 1200,
        height: 630,
        alt: 'Automatic doors installed at a commercial property by PrimeTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatic Door Installation – PrimeTech | Mississippi',
    description:
      'Upgrade your business or facility with secure, accessible automatic door systems by PrimeTech in Jackson and surrounding areas.',
    images: ['https://primetechmcs.com/og-images/automatic-doors.jpg'],
  },
  alternates: {
    canonical: 'https://primetechmcs.com/AutomaticDoors',
  },
};

export default function AutomaticDoorsPage() {
  return <AutomaticDoors />;
}