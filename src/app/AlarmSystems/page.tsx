// app/alarm-systems/page.tsx

import { Metadata } from 'next';
import AlarmSystems from '@/Components/Services/AlarmSystems/AlarmSystems';

export const metadata: Metadata = {
  title: 'Advanced Alarm Systems in Jackson MS | PrimeTech',
  description: 'Protect your property with 24/7 monitored alarm systems. Smart alerts, full-home coverage, and remote access – customized for Jackson and surrounding areas.',
  keywords: 'Alarm Systems Jackson MS, Home Security Systems, Business Alarm Installation, 24/7 Alarm Monitoring, Smart Alarm Systems, PrimeTech Security',
  openGraph: {
    title: '24/7 Alarm Systems Installation in Jackson | PrimeTech',
    description: 'Get smart, reliable, and remote-controlled alarm systems installed by experts in Jackson, MS. Serving homes and businesses with secure alarm setups.',
    url: 'https://primetechms.com/alarm-systems',
    siteName: 'PrimeTech',
    images: [
      {
        url: 'https://primetechms.com/og-images/alarm-system.jpg',
        width: 1200,
        height: 630,
        alt: 'Alarm Systems in Jackson by PrimeTech',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlarmSystemsPage() {
  return <AlarmSystems />;
}