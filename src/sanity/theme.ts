import { buildLegacyTheme } from 'sanity'

export const monochromeTheme = buildLegacyTheme({
  /* Base Theme Colors */
  '--black': '#0F172A',
  '--white': '#FFFFFF',
  '--gray': '#64748B',
  '--gray-base': '#1E293B',

  /* Component Backgrounds & Text */
  '--component-bg': '#FFFFFF',
  '--component-text-color': '#0F172A',

  /* Brand Primary Accents */
  '--brand-primary': '#0F172A',

  /* Default Button Styling */
  '--default-button-color': '#475569',
  '--default-button-primary-color': '#0F172A',
  '--default-button-success-color': '#16A34A',
  '--default-button-warning-color': '#D97706',
  '--default-button-danger-color': '#DC2626',

  /* State Colors */
  '--state-info-color': '#2563EB',
  '--state-success-color': '#16A34A',
  '--state-warning-color': '#D97706',
  '--state-danger-color': '#DC2626',

  /* Navigation Bar */
  '--main-navigation-color': '#0F172A',
  '--main-navigation-color--inverted': '#FFFFFF',
  '--focus-color': '#2563EB',
})
