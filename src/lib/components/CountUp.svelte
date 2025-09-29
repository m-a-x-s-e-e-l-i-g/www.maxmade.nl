<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import { tick } from 'svelte';

  /**
   * CountUp Component (Svelte)
   * Lightweight, dependency-free numeric tweening similar to reactbits.dev count-up example.
   *
   * Core behaviour:
   *  - Tweens from `from` -> `to` using requestAnimationFrame over `duration` milliseconds.
   *  - Optional `delay` before motion begins (still uses rAF for precision).
   *  - `easing` fn receives t in [0,1]; default uses Svelte's cubicOut.
   *  - Visibility based triggering via IntersectionObserver when `inView=true`.
   *  - If `once=true` animation will only run first time it enters viewport.
   *  - If `once=false` it rewinds to start when leaving viewport (allowing repeat on re-enter).
   *
   * Formatting:
   *  - `decimals` count of decimal places (rounded via toFixed).
   *  - `separator` thousands grouping (omit or set '' to disable).
   *  - `decimal` symbol used when decimals > 0.
   *  - `prefix` and `suffix` appended unchanged.
   *  - Custom full override by passing `format` function.
   *
   * Accessibility:
   *  - Rendered as a <span> with aria-live="off" by default (numbers are ornamental).
   *    If you need screen reader announcement, change to polite/assertive externally via bind:this.
   *
   * Imperative API (bind:this): play(), reset().
   */

  export let from: number = 0;
  export let to: number = 0;
  export let duration: number = 1500; // ms
  export let delay: number = 0; // ms
  export let easing: (t: number) => number = cubicOut;
  export let decimals: number = 0; // number of decimal places
  export let separator: string = ','; // thousands separator
  export let decimal: string = '.'; // decimal symbol
  export let prefix: string = '';
  export let suffix: string = '';
  export let autoplay: boolean = true; // start on mount or when becomes in view
  export let inView: boolean = true; // use IntersectionObserver
  export let once: boolean = true; // only run once on first enter
  export let format: ((n: number) => string) | null = null; // custom format override
  export let className: string = '';

  let el: HTMLElement | null = null;
  let frame: number | null = null;
  let startTime: number | null = null;
  let hasPlayed = false;
  let observer: IntersectionObserver | null = null;
  let current = from;

  // SSR guard: window may not exist
  const isBrowser = typeof window !== 'undefined';

  function start() {
    if (!isBrowser) return;
    if (hasPlayed && once) return;
    cancel();
    startTime = null;
    frame = requestAnimationFrame(step);
    hasPlayed = true;
  }

  function cancel() {
    if (frame) {
      cancelAnimationFrame(frame);
      frame = null;
    }
  }

  function step(timestamp: number) {
    if (startTime === null) {
      startTime = timestamp + delay;
    }
    if (timestamp < startTime) {
      frame = requestAnimationFrame(step);
      return;
    }
    const elapsed = timestamp - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easing(t);
    current = from + (to - from) * eased;
    if (t < 1) {
      frame = requestAnimationFrame(step);
    } else {
      current = to; // snap
    }
  }

  function formatNumber(n: number): string {
    if (format) return format(n);
    const fixed = n.toFixed(decimals);
    let [intPart, decPart] = fixed.split('.');
    if (separator) {
      intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    const decStr = decimals > 0 && decPart ? decimal + decPart : '';
    return prefix + intPart + decStr + suffix;
  }

  onMount(() => {
    if (!isBrowser) return;
    if (inView) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (autoplay) start();
            } else if (!once) {
              // rewind when leaving if not once & autoplay to allow replays
              current = from;
              startTime = null;
              if (autoplay) cancel();
            }
          });
        },
        { threshold: 0.2 }
      );
      if (el) observer.observe(el);
    } else if (autoplay) {
      start();
    }
  });

  onDestroy(() => {
    cancel();
    if (observer && el) observer.unobserve(el);
  });

  /** Imperative API (optional) - user can bind:this and call play() */
  export function play() { start(); }
  export function reset() {
    cancel();
    current = from;
    startTime = null;
    hasPlayed = false;
    tick().then(() => { if (autoplay && (!inView || (inView && el))) start(); });
  }
</script>

<span bind:this={el} class={className} aria-live="off" aria-label={formatNumber(current)}>{formatNumber(current)}</span>
