import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Support Ticket Priority Router — Route tickets by customer revenue automatically',
  description: 'Automatically prioritize and route support tickets based on customer revenue. Integrates with Zendesk, Intercom, Salesforce, and HubSpot.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="52d57b08-243d-432c-a3db-fcbf24ea203a"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
