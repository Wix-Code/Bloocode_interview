export interface Podcast {
  id: number;
  title: string;
  description: string;
  picture_url: string;
  audioUrl?: string;
  category_type: string
}

export interface PodcastData {
  id: number;
  title: string;
  description: string;
  picture_url: string;
  category_type: string;
  audioUrl?: string;
}