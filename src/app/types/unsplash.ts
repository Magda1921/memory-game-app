export interface UnsplashPhoto {
  id: string;
  urls: UnsplashUrl;
  alt_description: string;
}
export interface UnsplashUrl {
  small: string;
  full: string;
  regular: string;
}
export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}
