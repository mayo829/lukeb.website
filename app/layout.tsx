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

const baseUrl = 'https://lukeb.vercel.app';

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'Luke Brzozowski - Computer Engineer & Entrepreneur',
		template: '%s | Luke Brzozowski',
	},
	description:
		'Welcome to my portfolio! I am a passionate Computer Engineer and Entrepreneur with a focus on clean, minimal, and effective solutions that impact the world. I believe in the power of simplicity and thoughtful design to create impactful digital experiences.',
	keywords: [
		'Luke Brzozowski',
		'Luke Brzozowski portfolio',
		'Brzozowski',
		'Computer Engineer',
		'Software Engineer',
		'Entrepreneur',
		'Portfolio',
		'Clean Code',
		'C/C++',
		'Python',
		'Bash',
		'SystemVerilog',
		'TypeScript',
		'React',
		'Next.js',
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
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Web Development',
		'Full Stack Developer',
	],
	authors: [{ name: 'Luke Brzozowski' }],
	creator: 'Luke Brzozowski',
	publisher: 'Luke Brzozowski',
	applicationName: 'Luke Brzozowski Portfolio',
	category: 'Portfolio',
	classification: 'Portfolio Website',
	referrer: 'origin-when-cross-origin',
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [
			{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{
				rel: 'mask-icon',
				url: '/safari-pinned-tab.svg',
				color: '#18181b',
			},
		],
	},
	manifest: '/manifest.json', // Web App Manifest for PWA support
	alternates: {
		canonical: baseUrl,
		languages: {
			'en-US': baseUrl,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: baseUrl,
		siteName: 'Luke Brzozowski - Portfolio',
		title: 'Luke Brzozowski - Computer Engineer & Entrepreneur Portfolio',
		description:
			'Passionate Computer Engineer & Entrepreneur creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		images: [
			{
				url: '/motherboard.jpg',
				width: 1200,
				height: 630,
				alt: 'Luke Brzozowski - Modern Minimal Portfolio',
				type: 'image/jpeg',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Luke Brzozowski - Computer Engineer & Entrepreneur',
		description:
			'Passionate Computer Engineer & Entrepreneur creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		creator: '@yourusername', // Update with your actual Twitter handle
		site: '@yourusername', // Update with your actual Twitter handle
		images: ['/motherboard.jpg'], // Use the same image as OpenGraph
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
	verification: {
		// Add your verification codes when available
		// google: 'your-google-verification-code',
		// yandex: 'your-yandex-verification-code',
		// yahoo: 'your-yahoo-verification-code',
		// other: {
		//   'msvalidate.01': 'your-bing-verification-code',
		// },
	},
	formatDetection: {
		telephone: false,
		date: false,
		address: false,
		email: false,
		url: false,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${inter.variable} ${bodoniEgyptian.variable} ${jetbrainsMono.variable}`}>
			<head>
				{/* Structured Data for SEO */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Luke Brzozowski',
							jobTitle: 'Computer Engineer & Entrepreneur',
							url: baseUrl,
							sameAs: [
								// Add your social media profiles here
								// 'https://github.com/yourusername',
								// 'https://linkedin.com/in/yourusername',
								// 'https://twitter.com/yourusername',
							],
							knowsAbout: [
								'Computer Engineering',
								'Software Development',
								'Web Development',
								'TypeScript',
								'Python',
								'C/C++',
								'SystemVerilog',
								'Linux',
								'Docker',
							],
						}),
					}}
				/>
				{/* Website Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'Luke Brzozowski - Portfolio',
							url: baseUrl,
							author: {
								'@type': 'Person',
								name: 'Luke Brzozowski',
							},
							potentialAction: {
								'@type': 'SearchAction',
								target: {
									'@type': 'EntryPoint',
									urlTemplate: `${baseUrl}/projects?q={search_term_string}`,
								},
								'query-input': 'required name=search_term_string',
							},
						}),
					}}
				/>
			</head>
			<body className={`${jetbrainsMono.className} antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}