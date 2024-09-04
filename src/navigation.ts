import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Plastic Crusher',
          href: getPermalink('/products/crusher'),
        },
        {
          text: 'Label Remover',
          href: getPermalink('/products/remover'),
        },
      ],
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'PET Bottle Washing Line',
          href: getPermalink('/solutions/pet-bottle-washing-line'),
        },
        {
          text: 'PP PE Plastic Recycling Machine',
          href: getPermalink('/solutions/pp-pe-washing-line'),
        },
      ],
    },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Company Blogs',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Industry Blogs',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    {
      text: 'Blogs',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products & Solutions',
      links: [
        { text: 'Plastic Crusher', href: '/products/crusher' },
        { text: 'Label Remover', href: '/products/remover' },
        { text: 'PET Bottle Washing Line', href: '/solutions/pet-bottle-washing-line' },
        { text: 'PP PE Plastic Recycling Machine', href: '/solutions/pp-pe-washing-line' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Blog', href: 'blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Plastic Pellets', href: 'https://plastic-pellets.com' },
  ],
  socialLinks: [
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="/"> Elite </a> · All rights reserved.
  `,
};
