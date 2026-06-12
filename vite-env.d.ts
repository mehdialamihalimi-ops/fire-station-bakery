/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Ingredient {
  name: string;
  amountPerServing: number; // for scaling
  unit: string;
  optional?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface Recipe {
  id: string;
  title: string;
  rating: number;
  reviewsCount: number;
  updatedDate: string;
  imgUrl: string;
  description: string;
  prepTime: string; // e.g. "15 mins"
  cookTime: string; // e.g. "45 mins"
  calories: number;
  servingsDefault: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  ingredients: Ingredient[];
  instructions: { step: number; text: string; timerSec?: number }[];
  category: 'side' | 'salad' | 'dressing' | 'pairing';
  tips: string[];
  reviewsList: Review[];
}

export interface SavedRecipe {
  id: string;
  title: string;
  savedAt: string;
}
