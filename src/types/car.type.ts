export interface TCar {
  _id: string;
  name: string;
  description: string;
  image: string;
  brand: string;
  model: string;
  type: string;
  category: string;
  year: string;
  color: string;
  seatCapacity: number;
  mileage: number;
  mileageUnit: string;
  isElectric: boolean;
  galleryImages: GalleryImage[];
  features: string[];
  pricePerHour: number;
  transmission: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImage {
  url: string;
  _id: string;
}
