/**
 * Types defining data structures for the 4Life Transfer Factor Indonesia landing page.
 */

export interface Product {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  imageAlt: string;
  priceMember: number;
  priceRetail: number;
  points: number; // LP (Life Points)
  coreIngredients: string[];
  clinicalAction: string;
  securityProfile: string;
  practicalDosage: string;
  recommendedFor: string[];
  benefits: string[];
}

export interface ClinicalStudy {
  title: string;
  authorJournal: string;
  focus: string;
}

export interface Award {
  year: string;
  title: string;
  category: string;
  description: string;
}

export interface RecoveryQuadrant {
  title: string;
  focus: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  tag: string;
  rating: number;
  text: string;
}

