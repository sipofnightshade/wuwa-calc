<script lang="ts">
  type Props = { url: string; count: string };

  let { url, count }: Props = $props();
</script>

<div class="flex items-end gap-0.5">
  <img class="h-10 w-10" src={url} alt="item" />
  <span class="text-lg font-bold">x{count}</span>
</div>
