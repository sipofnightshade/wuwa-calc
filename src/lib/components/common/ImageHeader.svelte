<script lang="ts">
  type Props = {
    title: string;
    subtitle: string;
    src: string;
  };

  let { title, subtitle, src }: Props = $props();
</script>

<div class="flex items-end gap-x-4">
  <img class="h-14 w-14 border border-zinc-700 bg-zinc-800" {src} alt={title} />

  <div class="flex h-full flex-col justify-end gap-y-1">
    <h3 class="text-xl font-bold uppercase">{title}</h3>
    <p class="text-zinc-400">{subtitle}</p>
  </div>
</div>
