import { Package, Testimonial, GalleryImage } from './types';

export const PACKAGES: Package[] = [
  {
    id: 'char-dham',
    name: 'Char Dham Yatra',
    duration: '11N/12D',
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    price: 35000,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    category: 'spiritual'
  },
  {
    id: 'amarnath',
    name: 'Amarnath Yatra',
    duration: '5N/6D',
    highlights: ['Pahalgam', 'Baltal', 'Holy Cave', 'Srinagar'],
    price: 22000,
    image: 'https://www.deccanchronicle.com/h-upload/2025/06/17/1928954-aa-4884090.webp',
    category: 'spiritual'
  },
  {
    id: 'ganga-sagar',
    name: 'Ganga Sagar Yatra',
    duration: '4N/5D',
    highlights: ['Kolkata', 'Ganga Sagar', 'Dakshineswar', 'Belur Math'],
    price: 15000,
    image: 'https://www.theindia.co.in/blog/wp-content/uploads/2021/12/GangaSagar-Mela.jpg',
    category: 'spiritual'
  },
  {
    id: 'varanasi',
    name: 'Varanasi Tour',
    duration: '3N/4D',
    highlights: ['Kashi Vishwanath', 'Ganga Aarti', 'Sarnath', 'Boat Ride'],
    price: 12000,
    image: 'https://images.moneycontrol.com/static-mcnews/2025/11/20251117115006_1.jpg?impolicy=website&width=770&height=431',
    category: 'spiritual'
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka Tour',
    duration: '5N/6D',
    highlights: ['Colombo', 'Kandy', 'Bentota', 'Nuwara Eliya'],
    price: 45000,
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=800',
    category: 'international'
  },
  {
    id: 'dubai',
    name: 'Dubai Tour',
    duration: '4N/5D',
    highlights: ['Burj Khalifa', 'Desert Safari', 'Dhow Cruise', 'Dubai Mall'],
    price: 55000,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    category: 'international'
  },
  {
    id: 'goa',
    name: 'Goa Tour',
    duration: '3N/4D',
    highlights: ['North Goa Beaches', 'South Goa', 'Water Sports', 'Old Goa'],
    price: 18000,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800',
    category: 'domestic'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Kumar',
    location: 'Hyderabad',
    rating: 5,
    text: 'Our Char Dham Yatra was exceptionally well-planned. The accommodation and transport were very comfortable.',
    image: 'https://i.pravatar.cc/150?u=ramesh'
  },
  {
    id: '2',
    name: 'Anitha Reddy',
    location: 'Secunderabad',
    rating: 5,
    text: 'Sri Laxmi Venkateswara Tours made our Dubai trip memorable. Everything was handled professionally.',
    image: 'https://i.pravatar.cc/150?u=anitha'
  },
  {
    id: '3',
    name: 'Suresh Gupta',
    location: 'Warangal',
    rating: 4,
    text: 'Affordable packages and great support. Highly recommend for family spiritual tours.',
    image: 'https://i.pravatar.cc/150?u=suresh'
  }
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2024/01/5.-Khajuraho-temple-Madhya-Pradesh-cover_900_584.jpg?w=999', title: 'Temple Architecture' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800', title: 'Maldives Beach' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800', title: 'Bali Spirit' },
  { id: 'g4', url: 'https://media.istockphoto.com/id/2217498324/photo/aerial-view-of-dubai-skyline-at-sunset.jpg?s=612x612&w=0&k=20&c=w6c-FYum9XWegLX7IsC1CdTu7QurcEMrcbhBTxqfHOA=', title: 'Dubai Skyline' },
  { id: 'g5', url: 'https://images.squarespace-cdn.com/content/v1/5e95d9b13e6b2f7f177b574b/1587739848976-248791SKDDTF5WU0WA54/1.+Along+the+ghats.jpg', title: 'Varanasi Ghats' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800', title: 'Angkor Wat' }
];
