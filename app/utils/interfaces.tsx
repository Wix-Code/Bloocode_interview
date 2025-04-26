export interface Podcast {
  id: number;
  title: string;
  description: string;
  picture_url: string;
  published_at: string;
  created_at: string;
  audioUrl?: string;
  category_type: string
}

export interface PodcastData {
  id: number;
  title: string;
  description: string;
  picture_url: string;
  category_type: string;
  published_at: string;
  audioUrl?: string;
}

export interface Category {
  id: number;
  name: string;
  image_url: string;
};