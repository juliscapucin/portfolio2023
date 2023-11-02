export type Project = {
   title: string;
   slug: string;
   category: string;
   description: string;
   _id: string;
   coverImage: { fileName: string; alt: string };
   gridSize: number;
   imageSize: number;
   imageStart: number;
   images: string[];
   info: { tech: string; scope: string; link: string };
   textContent1?: { children: { text: string; _key: string } }[];
   textContent2?: { children: { text: string; _key: string } }[];
};
