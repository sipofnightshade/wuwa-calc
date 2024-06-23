<script lang="ts">
  type Props = {
    title: string;
    subtitle: string;
    src: string;
  };

  let { title, subtitle, src }: Props = $props();
</script>

<div class="flex gap-x-4">
  <img class="h-16 w-16 border border-zinc-700 bg-zinc-800" {src} alt={title} />

  <div class="flex flex-col justify-between">
    <h3 class="text-2xl font-bold uppercase">{title}</h3>
    <p class="text-zinc-400">{subtitle}</p>
  </div>
</div>
