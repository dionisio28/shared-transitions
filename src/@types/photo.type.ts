export interface PhotoProps {
  id: string;
  description?: string;
  alt_description?: string;
  urls: {small: string; regular: string};
  likes: number;
}
