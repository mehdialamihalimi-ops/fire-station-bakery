/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Types of items at the Old Fire Station
export interface FirehouseMenuItem {
  id: string;
  name: string;
  price: string;
  category: 'bakery' | 'brewery' | 'pastry' | 'dog-treats';
  description: string;
  imgUrl: string;
  ingredients: { name: string; baseAmount: number; unit: string }[];
}

export interface DogGuest {
  id: string;
  name: string;
  breed: string;
  owner: string;
  mischiefLevel: number; // 1-10
  favoriteTreat: string;
  photoUrl: string;
}

export interface TimelineEvent {
  step: number;
  year: string;
  title: string;
  description: string;
  timerSec: number;
  timerLabel?: string;
  iconName: 'shield' | 'flame' | 'clock' | 'sparkles';
}

export interface GuestReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  visitType: 'Bakery' | 'Brewery' | 'Heritage Tour' | 'Dog Visitor';
}

// ----------------------------------------------------
// ASSETS LOGISTICS
// ----------------------------------------------------
import sourdoughImg from './assets/images/artisan_sourdough_1781256970025.jpg';
import breweryImg from './assets/images/brewery_flight_1781256984664.jpg';
import heroImg from './assets/images/fire_station_hero_1781256956799.jpg';
import dogImg from './assets/images/station_coffee_dog_1781256999857.jpg';

export { heroImg, dogImg };

// Initial Menu Items with ingredient metrics for Loaf-scaling
export const FIREHOUSE_MENU_ITEMS: FirehouseMenuItem[] = [
  {
    id: 'artisan-sourdough',
    name: 'Engine Bay Sourdough Loaf',
    price: '£4.50',
    category: 'bakery',
    description: 'Our signature local sourdough starter "Nellie" (named after the station\'s 1910 fire engine), stoneground house wheat, and a crispy spent-grain golden crust.',
    imgUrl: sourdoughImg,
    ingredients: [
      { name: 'Stoneground Heritage Wheat Flour', baseAmount: 450, unit: 'g' },
      { name: 'Filtered Hot-Bed Water', baseAmount: 310, unit: 'ml' },
      { name: '"Nellie" Wild Yeast Starter', baseAmount: 90, unit: 'g' },
      { name: 'Malted spent brewer grains (dry)', baseAmount: 40, unit: 'g' },
      { name: 'Fine Anglesey Sea Salt', baseAmount: 9, unit: 'g' }
    ]
  },
  {
    id: 'spent-grain-dog-biscuits',
    name: 'Rescue Dog Spent-Grain Crackers',
    price: '£3.00',
    category: 'dog-treats',
    description: 'Healthy, single-origin pet crunchies baked using spent malt barley extracted straight from the brewery wash, mixed with organic peanut butter and flour.',
    imgUrl: dogImg,
    ingredients: [
      { name: 'Brewery-Fresh Spent Malted Barley', baseAmount: 150, unit: 'g' },
      { name: 'All-Natural Creamy Peanut Butter', baseAmount: 80, unit: 'g' },
      { name: 'Organic Rolled Oats', baseAmount: 100, unit: 'g' },
      { name: 'Free-Range Farm Eggs', baseAmount: 1, unit: 'whole' }
    ]
  },
  {
    id: 'station-amber-ale',
    name: 'Salford Hose Amber Ale (Brew #03)',
    price: '£5.20 / pint',
    category: 'brewery',
    description: 'A robust, copper-colored ale brewed right in the secondary fire-tender bay. Featuring complex malty profiles, hand-harvested Fuggles hops, and rich caramel-citrus notes.',
    imgUrl: breweryImg,
    ingredients: [
      { name: 'Maris Otter Ale Malt', baseAmount: 200, unit: 'g' },
      { name: 'Amber Specialty Crystals', baseAmount: 30, unit: 'g' },
      { name: 'Local Fuggles Bittering Hops', baseAmount: 4, unit: 'g' },
      { name: 'East Kent Goldings Flavor Hops', baseAmount: 3, unit: 'g' }
    ]
  }
];

// Interactive Historic Firehouse restoration timelines
export const HISTORIC_TIMELINE: TimelineEvent[] = [
  {
    step: 1,
    year: '1903',
    title: 'Victorian Firehouse Commissioned',
    description: 'Originally constructed to stand watch over the booming industrial factories of Salford. Teams relied on horse-drawn steam pumps and solid coal fire stations.',
    timerSec: 10,
    timerLabel: 'Sound Fire Alarm (10s Drill)',
    iconName: 'shield'
  },
  {
    step: 2,
    year: '1941',
    title: 'The Great Salford Blitz-Watch',
    description: 'Brave volunteer fire wardens manned high roof ladders during WWII air raids to quench incendiary impacts. Nellie the steam tender spent 72 straight hours pumping.',
    timerSec: 25,
    timerLabel: 'Simulate Air-Raid Siren (25s)',
    iconName: 'flame'
  },
  {
    step: 3,
    year: '1986',
    title: 'Decommissioned by Civic Logistics',
    description: 'Engines retired to modern centralized depot facilities. The gorgeous Victorian brickyard lay dormant, preserved as a grade-II heritage landmark waiting for new life.',
    timerSec: 15,
    timerLabel: 'Sound Retrospective Siren (15s)',
    iconName: 'clock'
  },
  {
    step: 4,
    year: '2024',
    title: 'The Artisan Circular-Economy Reclamation',
    description: 'A trio of passionate bakers, brewers and local preservationists transformed the bay into a community hub. Leftover waste-mash generates dog treats; local travel saves tons of carbon.',
    timerSec: 45,
    timerLabel: 'Starter Proofing Timer (45s Simulation)',
    iconName: 'sparkles'
  }
];

// Dog Guests Registry
export const INITIAL_DOG_GUESTS: DogGuest[] = [
  {
    id: 'dog_1',
    name: 'Buster',
    breed: 'Golden Retriever',
    owner: 'Gaby S.',
    mischiefLevel: 3,
    favoriteTreat: 'Spent-Grain Peanut Butter Slices',
    photoUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'dog_2',
    name: 'Winston State-Pump',
    breed: 'French Bulldog',
    owner: 'Captain Miller',
    mischiefLevel: 8,
    favoriteTreat: 'Bakers Spent Malt Crunches',
    photoUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'dog_3',
    name: 'Nellie Jr.',
    breed: 'Border Collie',
    owner: 'Sarah of Salford University',
    mischiefLevel: 5,
    favoriteTreat: 'Oat and Molasses Firehouse Special',
    photoUrl: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

// Initial Guest Reviews
export const INITIAL_GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'review_1',
    author: 'Eleanor Vance',
    rating: 5,
    comment: 'The absolute best heritage renovation in Greater Manchester! Sitting in the old engine bays sipping an Amber Ale while eating warm, fresh sourdough baked that morning. My retriever lay content with a fresh spent-grain cracker.',
    date: 'February 12, 2026',
    visitType: 'Brewery'
  },
  {
    id: 'review_2',
    author: 'Douglas C.',
    rating: 5,
    comment: 'The Eco Travel tool is such a clever touch! Verified that walking here saved us 400g of carbon dioxide compared to importing commercial grocery bread. Sourdough Nellie starter is amazing.',
    date: 'March 29, 2026',
    visitType: 'Bakery'
  },
  {
    id: 'review_3',
    author: 'Poppy & Jack',
    rating: 5,
    comment: 'Nellie junior loves the dog biscuits. We registered her today on the digital Hall of Fame board. Brilliant service and beautiful architecture.',
    date: 'May 10, 2026',
    visitType: 'Dog Visitor'
  }
];

// chatbot suggestions
export const AI_CONCEPT_SHORTCUTS = [
  "What is the history of Nellie the 1910 steam pump engine?",
  "How are brewery spent grains recycled into dog treats?",
  "How much carbon carbon saved by walking here instead of supermarkets?",
  "Can I book a masterclass to learn to bake Sourdough Nellie?"
];
