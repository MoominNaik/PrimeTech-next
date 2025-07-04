import { Metadata } from 'next';
import Cameras from '@/Components/Services/Cameras/Cameras';

export const metadata: Metadata = {
  title: 'Security Camera Systems in Jackson, MS | PrimeTech',
  description:
    'Protect your property with PrimeTech’s advanced camera surveillance systems in Jackson, MS. Get HD footage, remote access, night vision, and more.',
  keywords: [
    'Security Cameras Jackson MS',
    'CCTV Installation',
    'Surveillance Systems',
    'Home Security Cameras',
    'Commercial Security Cameras',
    'Wireless Cameras Mississippi',
    'PrimeTech Security Solutions',
  ],
  openGraph: {
    title: 'Security Camera Systems in Jackson, MS | PrimeTech',
    description:
      'PrimeTech offers cutting-edge CCTV and IP camera systems for homes and businesses. Enjoy remote viewing, 24/7 recording, and smart alerts.',
    url: 'https://primetechms.com/Cameras',
    siteName: 'PrimeTech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimeTech Security Cameras | Jackson MS',
    description:
      'High-resolution surveillance cameras with motion detection and cloud recording. Installed and maintained by local experts.',
  },
  alternates: {
    canonical: 'https://primetechms.com/Cameras',
  },
};

export default function CamerasPage() {
  return <Cameras />;
}