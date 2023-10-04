export type Project = {
   title: string;
   slug: string;
   category: string;
   description: string;
   _id: string;
   coverImage: { asset: { url: string } };
   gridSize: number;
   thumbnailSize: number;
   content: string;
   services: string[];
};
