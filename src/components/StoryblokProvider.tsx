'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react';

storyblokInit({
 accessToken: process.env.storyblokApiKey,
 use: [apiPlugin],
});

export default function StoryblokProvider(props: {
 children: React.ReactNode;
}) {
 return props.children;
}
