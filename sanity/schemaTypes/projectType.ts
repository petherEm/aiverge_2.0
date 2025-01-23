import {BulbFilledIcon} from '@sanity/icons'
import { groq } from 'next-sanity'
import {defineArrayMember, defineField, defineType} from 'sanity'

const apiVersion = '2025-01-19'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: BulbFilledIcon,
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
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'stacks',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'stack'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'progress',
      type: 'string',
    }),
    defineField({
      name: 'liveLink',
      type: 'url',
    }),
    
    defineField({
      name: 'githubLink',
      type: 'url',
    }),
    defineField({
      name: 'shortDescription',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) =>
        Rule.custom(async (isFeatured, { getClient }) => {
          if (isFeatured !== true) {
            return true
          }

          const featuredProject = await getClient({ apiVersion })
            .withConfig({ perspective: 'previewDrafts' })
            .fetch<number>(
              groq`count(*[_type == 'post' && isFeatured == true])`,
            )

          return featuredProject > 3
            ? 'Only 3 posts can be featured at a time.'
            : true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
