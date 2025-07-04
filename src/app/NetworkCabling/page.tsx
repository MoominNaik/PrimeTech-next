// app/network-cabling/page.tsx
import { Metadata } from 'next';
import NetworkCabling from '@/Components/Services/NetworkCabling/NetworkCabling';

export const metadata: Metadata = {
  title: 'Network Cabling Services in Jackson, MS | PrimeTech',
  description: 'Get professional structured cabling solutions for your home or business. PrimeTech offers reliable, high-speed network cabling installations in Jackson, MS and surrounding areas.',
  keywords: 'Network Cabling Jackson MS, Structured Cabling Installation, Ethernet Wiring, Commercial Network Solutions, IT Infrastructure, PrimeTech, Cat6 Cabling, Low Voltage Cabling',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Structured Network Cabling by PrimeTech | Jackson MS',
    description: 'Professional and secure network cabling solutions to ensure optimal IT infrastructure for homes and businesses in Jackson, MS.',
    url: 'https://primetechms.com/network-cabling',
    siteName: 'PrimeTech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://primetechms.com/og-images/networkCabling.jpeg',
        width: 1200,
        height: 630,
        alt: 'Structured Network Cabling Installation by PrimeTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimeTech Network Cabling Solutions',
    description: 'Reliable and high-performance structured network cabling installations for businesses and homes in Jackson, MS.',
    images: ['https://primetechms.com/og-images/networkCabling.jpeg'],
  },
};

export default function NetworkCablingPage() {
  return <NetworkCabling />;
}