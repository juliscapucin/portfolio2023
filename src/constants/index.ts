export const breakpoints = {
   desktop: 1200,
};

export const navLinks = [
   { label: 'Work', slug: 'work', id: 1 },
   { label: 'About', slug: 'about', id: 2 },
];

export const work = {
   category: 'latest',
   title: 'Latest projects',
   links: [
      {
         title: 'amp',
         category: 'latest',
         slug: 'work/amp',
         id: 'amp',
         coverImage: '/amp-ipad-1.jpg',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design', 'branding'],
         subtitle:
            'Celebrating creative fusion: crafting the online identity for ampamulherdopadre, where art, design, communication, and music collide',
         content:
            'Design and web development for independent apparel label ampamulherdopadre. The brand has an audience of young professionals in the arts, design, communication and music business. For the website my intention was to build an interface that would represent the brands personality. To achieve that I used low-res images taken from video material the client had developed over the years, and combined it with vector graphics, typography and photo collages. I also proposed a not too default navigation system, with horizontal scroll and sequential layers of content, so the user would be immersed in a virtual environment of experimentation and fun.',
      },
      {
         title: 'Folio 2022',
         category: 'latest',
         slug: 'work/folio2022',
         id: 'folio2022',
         coverImage: '/parking.avif',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design'],
         subtitle: 'A showcase of my work as a web developer and designer',
         content:
            'This project serves as my portfolio, showcasing my work as a web developer and designer. Its built using Vanilla JavaScript for functionality, enhanced with smooth GSAP animations, and powered by the user-friendly Prismic CMS for content management. The goal of this portfolio is to provide a practical and engaging overview of my skills and projects. Youll find a combination of clean design and dynamic animations that aim to make the browsing experience enjoyable and informative. Its a simple yet effective way to explore my web development and design journey.',
      },
      {
         title: 'Project3',
         category: 'latest',
         slug: 'work/project3',
         id: 'project3',
         coverImage: '/bus.avif',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design'],
         subtitle: '',
         content: '',
      },
   ],
};

export const about = {
   slug: 'about',
   title: 'About',
   paragraph1:
      'Thanks for dropping by. Just a quick heads up… most of my work is under NDA so my folio only shows personal or few pieces of commercial work.',
};

export const archive = {
   slug: 'archive',
   title: 'Archive',
   paragraph1:
      'A selection of web development, design and illustration projects I developed over the last 20 years.',
   links: [
      {
         title: 'Archive1',
         category: 'archive',
         slug: 'work/archive1',
         id: 'archive1',
         coverImage: '/pool.avif',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design'],
         subtitle: '',
         content: '',
      },
   ],
};

export const playground = {
   category: 'playground',
   title: 'Playground',
   paragraph1: 'A selection of experiments I develop on my free time',
   links: [
      {
         title: 'Playground1',
         category: 'playground',
         slug: 'work/playground1',
         id: 'playground1',
         coverImage: '/pool.avif',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design'],
         subtitle: '',
         content: '',
      },
      {
         title: 'Playground2',
         category: 'playground',
         slug: 'work/playground2',
         id: 'playground2',
         coverImage: '/pool.avif',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design'],
         subtitle: '',
         content: '',
      },
   ],
};

export const workPage = {
   slug: 'work',
   title: 'Work',
   paragraph1: 'Some recent commercial and personal projects',
};

export const playgroundPage = {
   slug: 'playground',
   title: 'Playground',
   paragraph1: 'Some recent commercial and personal projects',
};

export const footer = {
   title: 'Explore',
   id: 'explore',
   links: [
      { label: 'Home', url: '/', id: 'home' },
      { label: 'Work', url: '/work', id: 'work' },
      { label: 'About', url: '/about', id: 'about' },
   ],
};

export const socials = {
   title: 'Social',
   id: 'social',
   links: [
      {
         label: 'Instagram',
         url: 'https://www.instagram.com/juli.scapucin/',
         id: 'instagram',
      },
      {
         label: 'LinkedIn',
         url: 'https://www.linkedin.com/in/juliscapucin/',
         id: 'linkedin',
      },
      {
         label: 'The Dots',
         url: 'https://the-dots.com/users/juli-scapucin-1472123',
         id: 'dots',
      },
      { label: 'GitHub', url: 'https://github.com/juliscapucin', id: 'github' },
      {
         label: 'CodePen',
         url: 'https://codepen.io/juliscapucin',
         id: 'codepen',
      },
   ],
};
