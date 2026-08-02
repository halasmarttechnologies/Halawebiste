import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'
import { monochromeTheme } from './src/sanity/theme'
import { CustomCMSDashboard } from './src/sanity/CustomCMSDashboard'

export default defineConfig({
  name: 'default',
  title: 'Hala Smart Technologies Studio',

  projectId,
  dataset,
  apiVersion,

  basePath: '/studio',

  plugins: [
    structureTool({ structure }),
  ],

  studio: {
    components: {
      layout: CustomCMSDashboard,
    },
  },

  schema,

  theme: monochromeTheme,
})
