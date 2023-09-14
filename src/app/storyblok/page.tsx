import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react/rsc';

export default async function Home() {
 const { data } = await fetchData();

 return (
  <div>
   <h1>Story: {data.story.name}</h1>
  </div>
 );
}

export async function fetchData() {
 let sbParams: ISbStoriesParams = { version: 'draft' };

 const storyblokApi = getStoryblokApi();
 return storyblokApi.get(`cdn/stories/home`, sbParams);
}
