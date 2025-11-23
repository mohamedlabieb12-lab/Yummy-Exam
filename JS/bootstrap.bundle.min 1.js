// ===== Config =====
const DURATION_MS = 1800; // total time from 0 -> 100
const START_AT = 0; // starting percent
const END_AT = 850; // ending percent
const DECIMALS = 0; // 0 for whole %, 1-2 if you want 0.1% steps

// Optional: run again by calling startCounter() manually
// or attach to visibility change if you want replay behavior.

// ===== Easing (easeOutCubic) =====
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// ===== Counter Animation =====
function animateCounter(el, from, to, duration, easing, decimals = 0) {
  const start = performance.now();
  function frame(now) {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / duration);
    const eased = easing ? easing(t) : t;
    const value = from + (to - from) * eased;
    el.textContent = `${value.toFixed(decimals)}`;
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// ===== Boot =====
const counterEl = document.querySelector(".counter");
const countEl = document.getElementById("count");

// Mount effect for the number itself (blur/opacity/scale)
requestAnimationFrame(() => counterEl.classList.add("ready"));

// Start the numeric animation
function startCounter() {
  animateCounter(
    countEl,
    START_AT,
    END_AT,
    DURATION_MS,
    easeOutCubic,
    DECIMALS
  );
}

// Auto-start once DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startCounter);
} else {
  startCounter();
}
