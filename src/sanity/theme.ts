import { buildLegacyTheme } from 'sanity'

export const monochromeTheme = buildLegacyTheme({
  /* Color vars */
  '--black': '#000000',
  '--white': '#ffffff',
  '--gray': '#777777',
  '--gray-base': '#111111',

  '--component-bg': '#ffffff',
  '--component-text-color': '#000000',

  /* Brand */
  '--brand-primary': '#000000',

  /* Default button */
  '--default-button-color': '#000000',
  '--default-button-primary-color': '#000000',
  '--default-button-success-color': '#000000',
  '--default-button-warning-color': '#000000',
  '--default-button-danger-color': '#000000',

  /* State */
  '--state-info-color': '#000000',
  '--state-success-color': '#000000',
  '--state-warning-color': '#000000',
  '--state-danger-color': '#000000',

  /* Navbar */
  '--main-navigation-color': '#000000',
  '--main-navigation-color--inverted': '#ffffff',
  '--focus-color': '#000000',
})
