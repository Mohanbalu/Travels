export interface Package {
  id: string;
  name: string;
  duration: string;
  highlights: string[];
  price: number;
  image: string;
  category: 'spiritual' | 'international' | 'domestic';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
}
