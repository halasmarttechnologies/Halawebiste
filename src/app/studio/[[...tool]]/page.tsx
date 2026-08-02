'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return (
    <div className="sanity-studio-container" style={{ position: 'fixed', inset: 0, zIndex: 9999, overflow: 'hidden', backgroundColor: '#ffffff' }}>
      <style jsx global>{`
        /* Global Monochrome & Zero-Shadow Styling for Sanity Studio */
        .sanity-studio-container * {
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          text-shadow: none !important;
        }
        
        .sanity-studio-container [data-ui="Card"] {
          box-shadow: none !important;
          border-radius: 4px !important;
        }

        .sanity-studio-container [data-ui="Button"] {
          box-shadow: none !important;
          border-radius: 4px !important;
        }
      `}</style>
      <NextStudio config={config} />
    </div>
  )
}
