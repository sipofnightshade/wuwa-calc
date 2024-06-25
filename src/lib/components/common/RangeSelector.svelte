<script lang="ts">
  let { value = $bindable(0), label, ...restProps } = $props();
</script>

<div class="flex w-full items-end gap-2">
  <label class="mb-[18px] flex w-full flex-col gap-5">
    <span class="text-zinc-400">{label}</span>
    <input
      type="range"
      class="sliderThumb to h-0.5 cursor-pointer appearance-none bg-gradient-to-r from-zinc-700 from-[1%] via-zinc-100 to-zinc-700"
      {...restProps}
      bind:value
    />
  </label>

  <div class="flex h-full items-end">
    <p class="mb-[11px] w-6 text-right text-lg font-bold leading-none">{value}</p>
  </div>
</div>

<style>
  .sliderThumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    border: 0;
    background: url("data:image/svg+xml,<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.82843 14L14 2.82843L25.1716 14L14 25.1716L2.82843 14Z' fill='%230A0A0A' stroke='white' stroke-width='4'/></svg>");
    cursor: pointer;
  }
</style>
