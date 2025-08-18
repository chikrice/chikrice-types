import { Ingrediets } from './ingredient';

import type { Types } from 'mongoose';

// -------------------------------------

export interface Macros {
  pro: number;
  carb: number;
  fat: number;
  cal: number;
}

export interface Meal {
  _id?: Types.ObjectId;
  number: number;
  recommendedMacros: Macros;
  mode?: 'view' | 'edit';
  type?: 'meal' | 'snack';
  ingredients?: Ingrediets;
  macros?: Macros;
}

export interface MealsCount {
  meals: number;
  snacks: number;
}

export interface PlanType {
  number: number;
  mealsCount: number;
  snacksCount: number;
  name: string;
  date: Date;
  targetMacros: Macros;
  consumedMacros: Macros;
  meals: Meal[];
}
