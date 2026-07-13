import './globals.css';

export const metadata = {
  title: 'iConvers8.ai | AI Voice Agents and Revenue Operations',
  description: 'iConvers8.ai deploys human-like AI voice agents that answer calls, qualify leads, book appointments, and follow up automatically, 24/7.',
  openGraph: { title: 'iConvers8.ai | AI Voice Agents and Revenue Operations', description: 'iConvers8.ai deploys human-like AI voice agents that answer calls, qualify leads, book appointments, and follow up automatically, 24/7.', type: 'website' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href='https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Figtree:wght@300;400;500;600;700&display=swap' rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
