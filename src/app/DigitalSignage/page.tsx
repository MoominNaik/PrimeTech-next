import DigitalSignage from '@/Components/Services/DigitalSignage/DigitalSignage';

export const metadata = {
  title: 'Digital Signage Installation | LED Displays & Video Walls | PrimeTech',
  description:
    'PrimeTech provides custom digital signage solutions across Madison, Jackson, and surrounding areas. LED displays, video walls, and menu boards for commercial use.',
  keywords:
    'digital signage installation, LED signs Madison, video walls, menu boards, digital menu displays, PrimeTech signage, commercial digital displays, retail signage Madison',
  alternates: {
    canonical: 'https://primetechmcs.com/DigitalSignage',
  },
  openGraph: {
    title: 'Commercial Digital Signage Solutions | PrimeTech Madison',
    description:
      'High-impact LED digital signs and custom video displays for retail, restaurants, and offices. Installed by PrimeTech across Madison, Jackson, and Ridgeland.',
    url: 'https://primetechmcs.com/DigitalSignage',
    siteName: 'PrimeTech',
    images: [
      {
        url: 'https://primetechmcs.com/images/digital-signage-banner.jpg', // ✅ Replace with your actual hosted image
        width: 1200,
        height: 630,
        alt: 'LED digital signage in a retail store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Signage Installers | PrimeTech',
    description:
      'Install high-quality digital signage with PrimeTech. From LED menu boards to interactive retail signage, we bring your space to life.',
    images: ['https://primetechmcs.com/images/digital-signage-banner.jpg'],
  },
};

export default function DigitalSignagePage() {
  return <DigitalSignage />;
}