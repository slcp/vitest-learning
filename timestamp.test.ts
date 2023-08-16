import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { timestamp } from "./timestamp";

describe("timestamp", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(1692195343490));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return the timestamp of now", () => {
    expect(timestamp()).toEqual("1692195343490");
  });
});
