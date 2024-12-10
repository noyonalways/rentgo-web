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
  mileageUnit: TMileageUnit;
  isElectric: boolean;
  galleryImages: GalleryImage[];
  features: string[];
  pricePerHour: number;
  transmission: TTransmission;
  status: TCarStatus;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImage {
  url: string;
  _id: string;
}

export type TCarStatus = "available" | "unavailable";

export type TMileageUnit = "miles" | "kilometers";

export type TTransmission = "automatic" | "manual";
