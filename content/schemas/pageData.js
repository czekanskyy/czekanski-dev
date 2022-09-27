export default {
  name: 'pageData',
  title: 'Page Data',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'profilePic',
      title: 'About Me Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutMe',
      title: 'About Me Text',
      type: 'text',
    },
    {
      name: 'email',
      title: 'My Email',
      type: 'string',
    },
    {
      name: 'resumes',
      title: 'Resumes',
      type: 'array',
      of: [{ type: 'file' }],
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    },
  ],
};
