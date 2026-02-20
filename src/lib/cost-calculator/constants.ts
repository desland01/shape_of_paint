import type { MaterialInfo, MaterialTier } from "./types";

/**
 * Regional labor calibration used for Vancouver pricing.
 *
 * Sources:
 * - Vancouver average painter wage: C$29.14/hr (Indeed, updated Feb 4, 2026)
 * - Sarasota average painter wage: US$20.49/hr (Indeed, updated Jan 31, 2026)
 *
 * Business rule from owner:
 * - Company labor billing rate = average painter pay * 3
 */
export const MARKET_CALIBRATION = {
  benchmarkDate: "2026-02-19",
  vancouverAverageWageCad: 29.14,
  sarasotaAverageWageUsd: 20.49,
} as const;

export const PRODUCTION_RATES = {
  walls: 70,
  ceiling: 75,
  trim: 50,
  doorSide: 0.75,
  crownMolding: 40,
  wainscoting: 35,
} as const;

export const PAINT_COVERAGE = {
  walls: 400,
  ceiling: 400,
  trim: 800,
  crownMolding: 800,
  wainscoting: 300,
} as const;

export const LABOR_RATE = MARKET_CALIBRATION.vancouverAverageWageCad * 3;

export const GALLONS_PER_DOOR_SIDE = 0.05;

export const MATERIALS: Record<MaterialTier, MaterialInfo> = {
  good: {
    name: "ben Interior",
    price: 75.99,
    color: "#8A9A8A",
    description: "Reliable Benjamin Moore coverage for everyday spaces",
    features: [
      "Paint + primer",
      "Scuff-resistant finish",
      "Zero VOC / low odour",
      "400-450 sq ft per 3.79L",
    ],
  },
  better: {
    name: "Regal Select Interior",
    price: 94.99,
    color: "#5E7E66",
    description: "Premium washable performance for higher-traffic rooms",
    features: [
      "Stain-release technology",
      "High durability + washability",
      "Excellent hide + levelling",
      "350-450 sq ft per 3.78L",
    ],
  },
  best: {
    name: "AURA Waterborne Interior",
    price: 112.99,
    color: "#2E5D3B",
    description: "Top-tier Benjamin Moore depth, coverage, and longevity",
    features: [
      "Colour Lock technology",
      "Extreme hide + rich colour",
      "Scuff + mildew resistant",
      "Self-priming performance",
    ],
  },
};

export const TRIM_MATERIAL = {
  name: "ADVANCE Waterborne Alkyd",
  price: 104.99,
} as const;

export const DEFAULT_ROOM_DIMENSIONS = {
  length: 12,
  width: 12,
  height: 8,
} as const;

export const MAX_DIMENSIONS = {
  length: 100,
  width: 100,
  height: 20,
  doorSides: 40,
} as const;

export const CALCULATION_CONSTANTS = {
  COATS: 2,
  TRIM_LABOR_MULTIPLIER: 2,
} as const;
