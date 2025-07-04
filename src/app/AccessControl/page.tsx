import { Metadata } from 'next';
import AccessControl from '@/Components/Services/AccessControl/AccessControl';

export const metadata: Metadata = {
  title: 'Access Control Systems in Jackson, MS | PrimeTech',
  description:
    'Enhance your security with PrimeTech’s advanced access control systems, including keyless entry, card readers, and remote management. Serving Jackson, MS and surrounding areas.',
  keywords: [
    'Access Control Jackson MS',
    'Keyless Entry Systems',
    'Card Reader Security',
    'Biometric Access Jackson',
    'Access Control Installation Jackson MS',
    'PrimeTech Security Solutions',
  ],
  openGraph: {
    title: 'Access Control Systems in Jackson, MS | PrimeTech',
    description:
      'Secure your home or business with PrimeTech’s professional access control systems. Remotely manage access using the latest technology.',
    url: 'https://primetechms.com/AccessControl',
    siteName: 'PrimeTech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Control Systems in Jackson, MS | PrimeTech',
    description:
      'Explore advanced access control options with PrimeTech. Serving businesses and homes throughout Mississippi.',
  },
  alternates: {
    canonical: 'https://primetechms.com/AccessControl',
  },
};

export default function AccessControlPage() {
  return <AccessControl />;
}