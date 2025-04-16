// lib/hooks/usePodcasts.ts
"use client"
import { useQuery } from '@tanstack/react-query';
import { Podcast, PodcastData } from './interfaces';

const fetchPodcasts = async (): Promise<Podcast[]> => {
  const res = await fetch('https://api.wokpa.app/api/listeners/top-podcasts?page=1&per_page=15'); // Replace with your real API
  if (!res.ok) throw new Error('Failed to fetch podcasts');
  const response = await res.json();
  console.log("data")
  console.log(response, "postcast")
  return response.data.data;
};

export const usePodcasts = () => {
  return useQuery<Podcast[]>({
    queryKey: ['podcasts'],
    queryFn: fetchPodcasts,
  });
};

/*export const usePodcast = (id: number) => {
  return useQuery<Podcast>({
    queryKey: ['podcast', id],
    queryFn: async () => {
      const res = await fetch(`https://api.wokpa.app/api/listeners/top-podcasts/${id}`); // Replace with your real API
      if (!res.ok) throw new Error('Failed to fetch podcast');
      const response = await res.json();
      return response.data.data;
    },
  });
};*/
const fetchPodcastData = async (): Promise<PodcastData[]> => {
  const res = await fetch('https://api.wokpa.app/api/listeners/podcasts/1/episodes?page=1&per_pa'); // Replace with your real API
  if (!res.ok) throw new Error('Failed to fetch podcasts');
  const response = await res.json();
  console.log("data")
  console.log(response, "postcast")
  return response.data.data;
};

export const usePodcastData = () => {
  return useQuery<PodcastData[]>({
    queryKey: ['podcasts'],
    queryFn: fetchPodcastData,
  });
};