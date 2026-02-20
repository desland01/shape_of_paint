import {
  CALCULATION_CONSTANTS,
  DEFAULT_ROOM_DIMENSIONS,
  GALLONS_PER_DOOR_SIDE,
  LABOR_RATE,
  MATERIALS,
  PAINT_COVERAGE,
  PRODUCTION_RATES,
  TRIM_MATERIAL,
} from "./constants";
import type {
  EstimateResult,
  MaterialTier,
  ProjectMetrics,
  RoomData,
  RoomMetrics,
  SurfaceCosts,
} from "./types";

export function createEmptyRoom(id: number): RoomData {
  return {
    id,
    name: `Room ${id}`,
    length: DEFAULT_ROOM_DIMENSIONS.length,
    width: DEFAULT_ROOM_DIMENSIONS.width,
    height: DEFAULT_ROOM_DIMENSIONS.height,
    includeWalls: true,
    includeCeiling: false,
    includeBaseboards: false,
    doorSides: 0,
    includeCrownMolding: false,
    includeWainscoting: false,
  };
}

export function calculateRoomMetrics(room: RoomData): RoomMetrics {
  const perimeter = 2 * (room.length + room.width);
  const wallSqFt = room.includeWalls
    ? 2 * room.height * (room.length + room.width)
    : 0;
  const ceilingSqFt = room.includeCeiling ? room.length * room.width : 0;
  const baseboardsFt = room.includeBaseboards ? perimeter : 0;
  const crownMoldingFt = room.includeCrownMolding ? perimeter : 0;
  const wainscotingFt = room.includeWainscoting ? perimeter : 0;

  const wallLabor = wallSqFt / PRODUCTION_RATES.walls;
  const ceilingLabor = ceilingSqFt / PRODUCTION_RATES.ceiling;
  const baseboardsLabor =
    (baseboardsFt / PRODUCTION_RATES.trim) *
    CALCULATION_CONSTANTS.TRIM_LABOR_MULTIPLIER;
  const doorLabor = room.doorSides * PRODUCTION_RATES.doorSide;
  const crownLabor =
    (crownMoldingFt / PRODUCTION_RATES.crownMolding) *
    CALCULATION_CONSTANTS.TRIM_LABOR_MULTIPLIER;
  const wainscotingLabor =
    (wainscotingFt / PRODUCTION_RATES.wainscoting) *
    CALCULATION_CONSTANTS.TRIM_LABOR_MULTIPLIER;
  const laborHours =
    wallLabor +
    ceilingLabor +
    baseboardsLabor +
    doorLabor +
    crownLabor +
    wainscotingLabor;

  const wallGallons =
    wallSqFt > 0
      ? (wallSqFt * CALCULATION_CONSTANTS.COATS) / PAINT_COVERAGE.walls
      : 0;
  const ceilingGallons =
    ceilingSqFt > 0
      ? (ceilingSqFt * CALCULATION_CONSTANTS.COATS) / PAINT_COVERAGE.ceiling
      : 0;
  const baseboardsGallons =
    baseboardsFt > 0
      ? (baseboardsFt * CALCULATION_CONSTANTS.COATS) / PAINT_COVERAGE.trim
      : 0;
  const doorGallons =
    room.doorSides > 0 ? room.doorSides * GALLONS_PER_DOOR_SIDE : 0;
  const crownGallons =
    crownMoldingFt > 0
      ? (crownMoldingFt * CALCULATION_CONSTANTS.COATS) /
        PAINT_COVERAGE.crownMolding
      : 0;
  const wainscotingGallons =
    wainscotingFt > 0
      ? (wainscotingFt * CALCULATION_CONSTANTS.COATS) /
        PAINT_COVERAGE.wainscoting
      : 0;
  const totalGallons =
    wallGallons +
    ceilingGallons +
    baseboardsGallons +
    doorGallons +
    crownGallons +
    wainscotingGallons;

  return {
    perimeter,
    wallSqFt,
    ceilingSqFt,
    baseboardsFt,
    crownMoldingFt,
    wainscotingFt,
    wallLabor,
    ceilingLabor,
    baseboardsLabor,
    doorLabor,
    crownLabor,
    wainscotingLabor,
    laborHours,
    wallGallons,
    ceilingGallons,
    baseboardsGallons,
    doorGallons,
    crownGallons,
    wainscotingGallons,
    totalGallons,
  };
}

export function calculateProjectMetrics(rooms: RoomData[]): ProjectMetrics {
  return rooms.reduce(
    (acc, room) => {
      const metrics = calculateRoomMetrics(room);
      return {
        laborHours: acc.laborHours + metrics.laborHours,
        totalGallons: acc.totalGallons + metrics.totalGallons,
        wallSqFt: acc.wallSqFt + metrics.wallSqFt,
        ceilingSqFt: acc.ceilingSqFt + metrics.ceilingSqFt,
        wallLabor: acc.wallLabor + metrics.wallLabor,
        ceilingLabor: acc.ceilingLabor + metrics.ceilingLabor,
        baseboardsLabor: acc.baseboardsLabor + metrics.baseboardsLabor,
        doorLabor: acc.doorLabor + metrics.doorLabor,
        crownLabor: acc.crownLabor + metrics.crownLabor,
        wainscotingLabor: acc.wainscotingLabor + metrics.wainscotingLabor,
        wallGallons: acc.wallGallons + metrics.wallGallons,
        ceilingGallons: acc.ceilingGallons + metrics.ceilingGallons,
        baseboardsGallons: acc.baseboardsGallons + metrics.baseboardsGallons,
        doorGallons: acc.doorGallons + metrics.doorGallons,
        crownGallons: acc.crownGallons + metrics.crownGallons,
        wainscotingGallons: acc.wainscotingGallons + metrics.wainscotingGallons,
      };
    },
    {
      laborHours: 0,
      totalGallons: 0,
      wallSqFt: 0,
      ceilingSqFt: 0,
      wallLabor: 0,
      ceilingLabor: 0,
      baseboardsLabor: 0,
      doorLabor: 0,
      crownLabor: 0,
      wainscotingLabor: 0,
      wallGallons: 0,
      ceilingGallons: 0,
      baseboardsGallons: 0,
      doorGallons: 0,
      crownGallons: 0,
      wainscotingGallons: 0,
    }
  );
}

export function calculateSurfaceCosts(
  totals: ProjectMetrics,
  materialTier: MaterialTier
): SurfaceCosts {
  const materialPrice = MATERIALS[materialTier].price;
  const trimPrice = TRIM_MATERIAL.price;

  return {
    walls: Math.round(totals.wallLabor * LABOR_RATE + totals.wallGallons * materialPrice),
    ceiling: Math.round(
      totals.ceilingLabor * LABOR_RATE + totals.ceilingGallons * materialPrice
    ),
    baseboards: Math.round(
      totals.baseboardsLabor * LABOR_RATE + totals.baseboardsGallons * trimPrice
    ),
    doors: Math.round(totals.doorLabor * LABOR_RATE + totals.doorGallons * trimPrice),
    crown: Math.round(totals.crownLabor * LABOR_RATE + totals.crownGallons * trimPrice),
    wainscoting: Math.round(
      totals.wainscotingLabor * LABOR_RATE + totals.wainscotingGallons * trimPrice
    ),
  };
}

export function calculateEstimate(
  rooms: RoomData[],
  materialTier: MaterialTier
): EstimateResult {
  const totals = calculateProjectMetrics(rooms);

  const materialPrice = MATERIALS[materialTier].price;
  const trimPrice = TRIM_MATERIAL.price;

  const wallCeilingGallons = totals.wallGallons + totals.ceilingGallons;
  const trimGallons =
    totals.baseboardsGallons +
    totals.doorGallons +
    totals.crownGallons +
    totals.wainscotingGallons;

  const laborCost = Math.round(totals.laborHours * LABOR_RATE);

  const wallCeilingMaterialCost = wallCeilingGallons * materialPrice;
  const trimMaterialCost = trimGallons * trimPrice;
  const materialCost = Math.round(wallCeilingMaterialCost + trimMaterialCost);

  const totalCost = laborCost + materialCost;

  const surfaceCosts = calculateSurfaceCosts(totals, materialTier);

  return {
    rooms,
    material: materialTier,
    totals,
    laborCost,
    materialCost,
    totalCost,
    surfaceCosts,
    wallCeilingGallons,
    trimGallons,
  };
}
