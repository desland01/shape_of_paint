export type MaterialTier = "good" | "better" | "best";

export interface RoomData {
  id: number;
  name: string;
  length: number;
  width: number;
  height: number;
  includeWalls: boolean;
  includeCeiling: boolean;
  includeBaseboards: boolean;
  doorSides: number;
  includeCrownMolding: boolean;
  includeWainscoting: boolean;
}

export interface RoomMetrics {
  perimeter: number;
  wallSqFt: number;
  ceilingSqFt: number;
  baseboardsFt: number;
  crownMoldingFt: number;
  wainscotingFt: number;
  wallLabor: number;
  ceilingLabor: number;
  baseboardsLabor: number;
  doorLabor: number;
  crownLabor: number;
  wainscotingLabor: number;
  laborHours: number;
  wallGallons: number;
  ceilingGallons: number;
  baseboardsGallons: number;
  doorGallons: number;
  crownGallons: number;
  wainscotingGallons: number;
  totalGallons: number;
}

export interface ProjectMetrics {
  laborHours: number;
  totalGallons: number;
  wallSqFt: number;
  ceilingSqFt: number;
  wallLabor: number;
  ceilingLabor: number;
  baseboardsLabor: number;
  doorLabor: number;
  crownLabor: number;
  wainscotingLabor: number;
  wallGallons: number;
  ceilingGallons: number;
  baseboardsGallons: number;
  doorGallons: number;
  crownGallons: number;
  wainscotingGallons: number;
}

export interface SurfaceCosts {
  walls: number;
  ceiling: number;
  baseboards: number;
  doors: number;
  crown: number;
  wainscoting: number;
}

export interface MaterialInfo {
  name: string;
  price: number;
  color: string;
  description: string;
  features: string[];
}

export interface EstimateResult {
  rooms: RoomData[];
  material: MaterialTier;
  totals: ProjectMetrics;
  laborCost: number;
  materialCost: number;
  totalCost: number;
  surfaceCosts: SurfaceCosts;
  wallCeilingGallons: number;
  trimGallons: number;
}
