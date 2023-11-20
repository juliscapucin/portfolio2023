export const breakpoints = {
   desktop: 768,
};

export const maxWidth = 2000;

export const navLinks = [
   { label: 'Home', slug: '/', _key: 0 },
   { label: 'Work', slug: 'work', _key: 1 },
   { label: 'About', slug: 'about', _key: 2 },
];

export const work = {
   category: 'latest',
   title: 'Latest projects',
   links: [
      {
         title: 'Dept® (work under NDA)',
         category: 'latest',
         slug: 'work/dept',
         id: 'dept',
         coverImage: '/dept.jpg',
         thumbnailSize: '3',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design', 'branding'],
         subtitle:
            'Celebrating creative fusion: crafting the online identity for ampamulherdopadre, where art, design, communication, and music collide',
         content:
            'Design and web development for independent apparel label ampamulherdopadre. The brand has an audience of young professionals in the arts, design, communication and music business. For the website my intention was to build an interface that would represent the brands personality. To achieve that I used low-res images taken from video material the client had developed over the years, and combined it with vector graphics, typography and photo collages. I also proposed a not too default navigation system, with horizontal scroll and sequential layers of content, so the user would be immersed in a virtual environment of experimentation and fun.',
      },
      { id: 'placeholder-1', thumbnailSize: '3', slug: 'none' },
      {
         title: 'Folio 2022',
         category: 'latest',
         slug: 'work/folio2022',
         id: 'folio2022',
         coverImage: '/folio-2022-1.jpg',
         thumbnailSize: '6',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design'],
         subtitle: 'A showcase of my work as a web developer and designer',
         content:
            'This project serves as my portfolio, showcasing my work as a web developer and designer. Its built using Vanilla JavaScript for functionality, enhanced with smooth GSAP animations, and powered by the user-friendly Prismic CMS for content management. The goal of this portfolio is to provide a practical and engaging overview of my skills and projects. Youll find a combination of clean design and dynamic animations that aim to make the browsing experience enjoyable and informative. Its a simple yet effective way to explore my web development and design journey.',
      },
      {
         title: 'Paul de Heer',
         category: 'latest',
         slug: 'work/pauldeheer',
         id: 'pauldeheer',
         coverImage: '/paul-1.jpg',
         thumbnailSize: '5',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design'],
         subtitle: '',
         content: '',
      },
      { id: 'placeholder-2', thumbnailSize: '7', slug: 'none' },
      { id: 'placeholder-2', thumbnailSize: '5', slug: 'none' },
      {
         title: 'amp',
         category: 'latest',
         slug: 'work/amp',
         id: 'amp',
         coverImage: '/amp-ipad-1.jpg',
         thumbnailSize: '3',
         featureImage1: '/amp-ipad-2.jpg',
         featureImage2: '/amp-ipad-2.jpg',
         disciplines: ['web development', 'web design', 'branding'],
         subtitle:
            'Celebrating creative fusion: crafting the online identity for ampamulherdopadre, where art, design, communication, and music collide',
         content:
            'Design and web development for independent apparel label ampamulherdopadre. The brand has an audience of young professionals in the arts, design, communication and music business. For the website my intention was to build an interface that would represent the brands personality. To achieve that I used low-res images taken from video material the client had developed over the years, and combined it with vector graphics, typography and photo collages. I also proposed a not too default navigation system, with horizontal scroll and sequential layers of content, so the user would be immersed in a virtual environment of experimentation and fun.',
      },
      { id: 'placeholder-2', thumbnailSize: '8', slug: 'none' },
   ],
};

export const about = {
   slug: 'about',
   title: 'About',
   subtitle: '',
   paragraph1: '',
   paragraph2:
      'Thanks for dropping by. Just a quick heads up… most of my recent work is under NDA so my folio only shows personal or few pieces of commercial work.',
   disciplines: [
      'creative development',
      'digital design',
      'motion',
      'branding',
      'illustration',
   ],
   experience: [
      {
         id: 7,
         title: 'Designer & Frontend Developer Freelance',
         date: '(Sep 2023 – present)',
         description:
            'Design and fullstack web development for brands and professionals with Next.js, TypeScript, Tailwind, GSAP, Figma and Adobe Creative Cloud',
      },
      {
         id: 6,
         title: 'Frontend Developer @ Dept®',
         date: '(Sep 2022 – Aug 2023)',
         description:
            "As a part of Dept®'s development team, I was responsible for building websites and e-commerce platforms for clients such as Costes, Team Town Sports, Avans Hogeschool, Hyva, Amcoveba and Wij Techniek.",
      },
      {
         id: 5,
         title: 'Designer & Frontend Developer Freelance',
         date: '(May 2021 – present)',
         description:
            'Fullstack web development for brands and professionals. Headless CMS development using React / Next.js, JavaScript, Noje.js, animation libraries (Framer Motion, GSAP) and CSS.',
      },
      {
         id: 4,
         title: 'Founder & Art Director @ Malgosia.co',
         date: '(Sep 2013 – Jul 2020)',
         description:
            'Handmade apparel & fashion brand. In 2019 it counted three physical sales points in Amsterdam and one e-commerce channel on Etsy. My main roles were: design and production, branding, photography,  e-commerce management, social media, web design, sales and customer service.',
      },
      {
         id: 3,
         title: 'Art Editor / Graphic Designer @ Editora Abril',
         date: '(Apr 2008 – Mar 2012)',
         description:
            'Art edition, graphic design and illustration for Capricho and Manequim magazines. Editora Abril was the biggest publishing company in Latin America until 2017, and both magazines were audience leaders in their niches.',
      },
      {
         id: 2,
         title: 'Designer & Web Developer Freelance',
         date: '(Mar 2004 – Mar 2008)',
         description:
            'Design (print and web), illustration, motion design and fullstack development for various companies in editorial, fashion and advertising business.',
      },
      {
         id: 1,
         title: 'Web Designer & Frontend Developer @ Newcomm Bates',
         date: '(Apr 2002 – Feb 2004)',
         description:
            "Web, motion design and front-end development Newcomm Bates’ advertising agency. Clients were Kaiser Beer, Ballantine's and NewXM.",
      },
   ],
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
         thumbnailSize: '4',
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
         thumbnailSize: '4',
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
         thumbnailSize: '4',
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
