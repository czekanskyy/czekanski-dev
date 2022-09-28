export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      description: 'An icon of the technology.',
      type: 'image',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      validation: Rule => Rule.min(0).max(100),
    },
  ],
};
