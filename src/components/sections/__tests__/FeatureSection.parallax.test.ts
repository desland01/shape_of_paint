import { describe, test, expect } from "vitest";
import { getParallaxConfig } from "../FeatureSection";

describe("FeatureSection parallax configuration", () => {

  test("defines exactly 3 parallax elements", () => {
    const config = getParallaxConfig();
    expect(Object.keys(config)).toHaveLength(3);
    expect(config).toHaveProperty("textCard");
    expect(config).toHaveProperty("image");
    expect(config).toHaveProperty("blob");
  });

  test("each element has an output range [start, end] tuple", () => {
    const config = getParallaxConfig();
    for (const [, value] of Object.entries(config)) {
      expect(value.outputRange).toHaveLength(2);
      expect(typeof value.outputRange[0]).toBe("number");
      expect(typeof value.outputRange[1]).toBe("number");
    }
  });

  test("text card has the slowest parallax speed (smallest range)", () => {
    const config = getParallaxConfig();
    const textRange = Math.abs(config.textCard.outputRange[1] - config.textCard.outputRange[0]);

    for (const [key, value] of Object.entries(config)) {
      if (key === "textCard") continue;
      const range = Math.abs(value.outputRange[1] - value.outputRange[0]);
      expect(textRange).toBeLessThan(range);
    }
  });

  test("blob has the fastest parallax speed (largest range)", () => {
    const config = getParallaxConfig();
    const blobRange = Math.abs(config.blob.outputRange[1] - config.blob.outputRange[0]);

    for (const [key, value] of Object.entries(config)) {
      if (key === "blob") continue;
      const range = Math.abs(value.outputRange[1] - value.outputRange[0]);
      expect(blobRange).toBeGreaterThan(range);
    }
  });

  test("all 3 elements have different parallax speeds", () => {
    const config = getParallaxConfig();
    const ranges = Object.values(config).map(
      (v) => Math.abs(v.outputRange[1] - v.outputRange[0])
    );
    const uniqueRanges = new Set(ranges);
    expect(uniqueRanges.size).toBe(3);
  });

  test("parallax moves elements upward as scroll progresses (negative end values)", () => {
    const config = getParallaxConfig();
    for (const [, value] of Object.entries(config)) {
      // outputRange[0] is start (positive = below), outputRange[1] is end (negative = above)
      expect(value.outputRange[0]).toBeGreaterThan(0);
      expect(value.outputRange[1]).toBeLessThan(0);
    }
  });
});
