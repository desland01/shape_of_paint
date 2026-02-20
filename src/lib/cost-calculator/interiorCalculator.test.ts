import { describe, expect, test } from "vitest";
import { LABOR_RATE, MATERIALS, TRIM_MATERIAL } from "./constants";
import {
  calculateEstimate,
  calculateProjectMetrics,
  calculateRoomMetrics,
  createEmptyRoom,
} from "./interiorCalculator";

describe("interior calculator parity", () => {
  test("calculates wall-only room metrics correctly", () => {
    const room = {
      ...createEmptyRoom(1),
      name: "Living Room",
      length: 10,
      width: 12,
      height: 8,
      includeWalls: true,
      includeCeiling: false,
    };

    const metrics = calculateRoomMetrics(room);

    expect(metrics.perimeter).toBe(44);
    expect(metrics.wallSqFt).toBe(352);
    expect(metrics.ceilingSqFt).toBe(0);
    expect(metrics.wallLabor).toBeCloseTo(5.0285714286, 8);
    expect(metrics.wallGallons).toBeCloseTo(1.76, 8);
    expect(metrics.totalGallons).toBeCloseTo(1.76, 8);
  });

  test("surface toggles for trim and ceiling change metrics", () => {
    const room = {
      ...createEmptyRoom(1),
      name: "Kitchen",
      length: 14,
      width: 10,
      height: 9,
      includeCeiling: true,
      includeBaseboards: true,
      includeCrownMolding: true,
      includeWainscoting: true,
    };

    const metrics = calculateRoomMetrics(room);

    expect(metrics.ceilingSqFt).toBe(140);
    expect(metrics.baseboardsFt).toBe(48);
    expect(metrics.crownMoldingFt).toBe(48);
    expect(metrics.wainscotingFt).toBe(48);
    expect(metrics.ceilingGallons).toBeCloseTo(0.7, 8);
    expect(metrics.baseboardsGallons).toBeCloseTo(0.12, 8);
    expect(metrics.crownGallons).toBeCloseTo(0.12, 8);
    expect(metrics.wainscotingGallons).toBeCloseTo(0.32, 8);
  });

  test("door sides contribute labor and material linearly", () => {
    const room = {
      ...createEmptyRoom(1),
      name: "Bedroom",
      length: 12,
      width: 12,
      height: 8,
      doorSides: 5,
    };

    const metrics = calculateRoomMetrics(room);

    expect(metrics.doorLabor).toBeCloseTo(3.75, 8);
    expect(metrics.doorGallons).toBeCloseTo(0.25, 8);
  });

  test("aggregates project totals across multiple rooms", () => {
    const roomA = {
      ...createEmptyRoom(1),
      name: "Room A",
      length: 10,
      width: 10,
      height: 8,
      includeCeiling: true,
    };
    const roomB = {
      ...createEmptyRoom(2),
      name: "Room B",
      length: 12,
      width: 11,
      height: 9,
      includeBaseboards: true,
      doorSides: 2,
    };

    const metricsA = calculateRoomMetrics(roomA);
    const metricsB = calculateRoomMetrics(roomB);
    const totals = calculateProjectMetrics([roomA, roomB]);

    expect(totals.wallSqFt).toBe(metricsA.wallSqFt + metricsB.wallSqFt);
    expect(totals.ceilingSqFt).toBe(metricsA.ceilingSqFt + metricsB.ceilingSqFt);
    expect(totals.laborHours).toBeCloseTo(
      metricsA.laborHours + metricsB.laborHours,
      8
    );
    expect(totals.totalGallons).toBeCloseTo(
      metricsA.totalGallons + metricsB.totalGallons,
      8
    );
  });

  test("material tier changes total estimate by expected price deltas", () => {
    const rooms = [
      {
        ...createEmptyRoom(1),
        name: "Office",
        length: 13,
        width: 11,
        height: 9,
        includeCeiling: true,
      },
    ];

    const good = calculateEstimate(rooms, "good");
    const better = calculateEstimate(rooms, "better");
    const best = calculateEstimate(rooms, "best");

    expect(good.totalCost).toBeLessThan(better.totalCost);
    expect(better.totalCost).toBeLessThan(best.totalCost);

    const wallGallons = good.wallCeilingGallons;
    const trimGallons = good.trimGallons;

    const expectedGoodToBetter =
      Math.round(
        (wallGallons * MATERIALS.better.price) +
          (trimGallons * TRIM_MATERIAL.price)
      ) -
      Math.round(
        (wallGallons * MATERIALS.good.price) +
          (trimGallons * TRIM_MATERIAL.price)
      );
    const expectedBetterToBest =
      Math.round(
        (wallGallons * MATERIALS.best.price) +
          (trimGallons * TRIM_MATERIAL.price)
      ) -
      Math.round(
        (wallGallons * MATERIALS.better.price) +
          (trimGallons * TRIM_MATERIAL.price)
      );

    expect(better.totalCost - good.totalCost).toBe(expectedGoodToBetter);
    expect(best.totalCost - better.totalCost).toBe(expectedBetterToBest);
  });

  test("rounds labor, material, and per-surface costs exactly", () => {
    const rooms = [
      {
        ...createEmptyRoom(1),
        name: "Precision Test",
        length: 11,
        width: 9,
        height: 8,
        includeCeiling: true,
        includeBaseboards: true,
        includeCrownMolding: true,
        includeWainscoting: true,
        doorSides: 3,
      },
    ];

    const estimate = calculateEstimate(rooms, "better");
    const totals = estimate.totals;
    const materialPrice = MATERIALS.better.price;
    const trimPrice = TRIM_MATERIAL.price;

    const expectedLabor = Math.round(totals.laborHours * LABOR_RATE);
    const expectedMaterial = Math.round(
      (estimate.wallCeilingGallons * materialPrice) +
        (estimate.trimGallons * trimPrice)
    );
    const expectedWalls = Math.round(
      totals.wallLabor * LABOR_RATE + totals.wallGallons * materialPrice
    );
    const expectedCeiling = Math.round(
      totals.ceilingLabor * LABOR_RATE + totals.ceilingGallons * materialPrice
    );

    expect(estimate.laborCost).toBe(expectedLabor);
    expect(estimate.materialCost).toBe(expectedMaterial);
    expect(estimate.surfaceCosts.walls).toBe(expectedWalls);
    expect(estimate.surfaceCosts.ceiling).toBe(expectedCeiling);
  });

  test("produces stable fixture output for a full estimate", () => {
    const rooms = [
      {
        ...createEmptyRoom(1),
        name: "Primary Bedroom",
        length: 16,
        width: 13,
        height: 9,
        includeCeiling: true,
        includeBaseboards: true,
        doorSides: 2,
      },
      {
        ...createEmptyRoom(2),
        name: "Kitchen",
        length: 14,
        width: 12,
        height: 9,
        includeCeiling: true,
        includeCrownMolding: true,
      },
    ];

    const estimate = calculateEstimate(rooms, "better");

    expect({
      laborCost: estimate.laborCost,
      materialCost: estimate.materialCost,
      totalCost: estimate.totalCost,
      wallCeilingGallons: Number(estimate.wallCeilingGallons.toFixed(4)),
      trimGallons: Number(estimate.trimGallons.toFixed(4)),
      surfaceCosts: estimate.surfaceCosts,
    }).toEqual({
      laborCost: 2236,
      materialCost: 688,
      totalCost: 2924,
      wallCeilingGallons: 6.83,
      trimGallons: 0.375,
      surfaceCosts: {
        walls: 1707,
        ceiling: 617,
        baseboards: 218,
        doors: 142,
        crown: 241,
        wainscoting: 0,
      },
    });
  });
});
