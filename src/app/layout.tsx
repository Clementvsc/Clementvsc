import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sahaya Clement Vincent Martin | DevOps Engineer',
  description: 'DevOps and Cloud Engineer specializing in automation, infrastructure-as-code, and platform engineering with expertise in Terraform, Kubernetes, and GitHub Actions.',
  keywords: 'DevOps Engineer, Cloud Engineer, Platform Engineering, Terraform, Kubernetes, AWS, Azure, GitHub Actions, CI/CD, Infrastructure as Code',
  authors: [{ name: 'Sahaya Clement Vincent Martin' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Sahaya Clement Vincent Martin | DevOps Engineer',
    description: 'DevOps and Cloud Engineer specializing in automation, infrastructure-as-code, and platform engineering.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
