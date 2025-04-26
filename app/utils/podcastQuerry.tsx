// lib/hooks/usePodcasts.ts
"use client"
import { useQuery } from '@tanstack/react-query';
import { Category, Podcast, PodcastData } from './interfaces';
import page from '../page';

interface APIResponse {
  data: Podcast[];
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

const fetchPodcasts = async (page : number): Promise<APIResponse> => {
  const res = await fetch(`https://api.wokpa.app/api/listeners/top-podcasts?page=${page}&per_page=15`);
  if (!res.ok) throw new Error('Failed to fetch podcasts');
  const response = await res.json();
  return {
    data: response.data.data,
    total: response.data.total,
    per_page: response.data.per_page,
    current_page: response.data.current_page,
    last_page: response.data.last_page,
  };
};

export const usePodcasts = (page: number) => {
  return useQuery({
    queryKey: ['podcasts', page],
    queryFn: () => fetchPodcasts(page),
  });
};

const fetchPodcastById = async (id: number | string): Promise<Podcast> => {
  const res = await fetch(`https://api.wokpa.app/api/listeners/podcasts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch podcast');
  const response = await res.json();
  console.log(res, "podcast id")
  console.log(response, "postcast idddd")

  return response.data; // Assuming { message: 'success', data: {...} }
};

export const useSinglePodcast = (id: number | string) => {
  return useQuery<Podcast>({
    queryKey: ['podcast', id],
    queryFn: () => fetchPodcastById(id),
    enabled: !!id, // only run when id is available
  });
};

const fetchPodcastData = async (page: number): Promise<APIResponse> => {
  const res = await fetch(`https://api.wokpa.app/api/listeners/podcasts/1/episodes?page=${page}&per_page=15`);
  if (!res.ok) throw new Error('Failed to fetch podcasts');
  const response = await res.json();

  return {
    data: response.data.data,
    total: response.data.total,
    per_page: response.data.per_page,
    current_page: response.data.current_page,
    last_page: response.data.last_page,
  };
};

export const usePodcastData = (page: number) => {
  return useQuery({
    queryKey: ['podcasts', page],
    queryFn: () => fetchPodcastData(page),
  });
};

const fetchPodcastDataById = async (id: number | string): Promise<Podcast> => {
  const res = await fetch(`https://api.wokpa.app/api/listeners/episodes/${id}`);
  if (!res.ok) throw new Error('Failed to fetch podcast');
  const response = await res.json();
  console.log(res, "podcast id")
  console.log(response, "postcast idddd")

  return response.data;
};

export const useFetchPodcastDataById = (id: number | string) => {
  return useQuery<Podcast>({
    queryKey: ['podcast', id],
    queryFn: () => fetchPodcastDataById(id),
    enabled: !!id, // only run when id is available
  });
};

const fetchPodcastOtherCategories = async (): Promise<Category[]> => {
  const res = await fetch('https://api.wokpa.app/api/listeners/top-categories');
  if (!res.ok) throw new Error('Failed to fetch podcast categories');
  const response = await res.json();
  return response.data; // Assuming { message: 'success', data: {...} }
};

export const useFetchPodcastOtherCategories = () => {
  return useQuery<Category[]>({
    queryKey: ['podcast-categories'],
    queryFn: fetchPodcastOtherCategories,
  });
};