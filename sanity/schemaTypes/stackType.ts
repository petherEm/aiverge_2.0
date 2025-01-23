import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const stackType = defineType({
  name: 'stack',
  title: 'Stack',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
