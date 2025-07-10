<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let height: number = 400; // px
  export let duration: number = 10; // seconds
</script>

<section class="auto-scroll-screenshot mx-auto max-w-4xl pt-8">
  <div
    class="relative w-full rounded-lg shadow-lg border border-gray-800 mb-12 overflow-hidden"
    style={`height: ${height}px;`}
  >
    <img
      {src}
      {alt}
      class="absolute left-0 w-full auto-scroll-img"
      style={`min-height: 100%; will-change: transform; animation-duration: ${duration}s;`}
    />
  </div>
</section>

<style>
@keyframes vertical-scroll {
  0% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(calc(-100% + var(--auto-scroll-height, 400px)));
  }
  100% {
    transform: translateY(calc(-100% + var(--auto-scroll-height, 400px)));
  }
}
.auto-scroll-img {
  animation-name: vertical-scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
