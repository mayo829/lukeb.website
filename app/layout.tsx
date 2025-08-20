import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-inter',
});

const bodoniEgyptian = localFont({
	src: '../public/fonts/DiagraphEtc-Light.otf',
	variable: '--font-bodoni-egyptian',
	display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
	weight: ['400', '500', '600', '700'], // Multiple weights available
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
	display: 'swap',
});

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

// const shareTechMono = Share_Tech_Mono({
// 	weight: '400', // Share Tech Mono only has 400 weight
// 	subsets: ['latin'],
// 	variable: '--font-share-tech-mono', // Add this for CSS variable
// 	display: 'swap',
// });

export const metadata: Metadata = {
	title: 'Luke Brzozowski - Computer Engineer',
	description:
		'Welcome to my portfolio! I am a passionate Computer Engineer with a focus on clean, minimal, and effective solutions. I believe in the power of simplicity and thoughtful design to create impactful digital experiences.',
	keywords: [
		'Computer Engineer',
		'Clean Code',
		'C/C++', 
		'Python',
		'Bash', 
		'SystemVerilog', 
		'TypeScript', 
		'Git', 
		'LaTeX', 
		'Linux', 
		'Matlab', 
		'Arduino IDE', 
		'Docker', 
		'Verdi', 
		'SolidWorks', 
		'Microsoft 365',
		'Minimal Design',
		'Modern Development',
		'User Experience',
		'Design Systems',
		'TypeScript',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Luke Brzozowski',
	],
	authors: [{ name: 'Luke Brzozowski' }],
	creator: 'Luke Brzozowski',
	openGraph: {
		title: 'Luke Brzozowski - Computer Engineer Portfolio',
		description: 'Passionate Computer Engineer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		url: 'https://lukeb.vercel.app/',
		siteName: 'Luke Brzozowski - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Luke Brzozowski - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Luke Brzozowski - Computer Engineer',
		description: 'Passionate Computer Engineer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${inter.variable} ${bodoniEgyptian.variable} ${jetbrainsMono.variable}`}>
			<body className={`${jetbrainsMono.className} antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}