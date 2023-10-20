export type Project = {
   title: string;
   slug: string;
   category: string;
   description: string;
   _id: string;
   coverImage: { fileName: string; alt: string };
   gridSize: number;
   thumbnailSize: number;
   content: string;
   info: { tech: string; scope: string; link: string };
   textContent: { children: { text: string; _key: string } }[];
};
