"use client";

import { useSyncExternalStore } from "react";

export type DeviceTier = "reduced-motion" | "mobile" | "desktop";

function getTier(): DeviceTier {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "reduced-motion";
  }
  const isNarrow = window.matchMedia("(max-width: 768px)").matches;
  const isLowPower =
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= 4;
  return isNarrow || isLowPower ? "mobile" : "desktop";
}

const noopSubscribe = () => () => {};

/**
 * Resolves the device/motion tier once on the client. Returns null on the
 * server and on the very first client snapshot check — React's
 * useSyncExternalStore reconciles that automatically without the
 * hydration warnings a useState+useEffect "mounted" flag would cause.
 */
export function useDeviceTier(): DeviceTier | null {
  return useSyncExternalStore(noopSubscribe, getTier, () => null);
}
