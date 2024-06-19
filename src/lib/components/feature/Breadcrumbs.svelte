<script lang="ts">
  import { page } from '$app/stores';
  import Chevron from '$lib/icons/Chevron.svelte';

  let crumbs: { path: string; label: string }[] = $state([]);
  let currentPath: string = $state('');

  $effect(() => {
    const pathTokens = $page.url.pathname.split('/').filter((token) => token);

    currentPath = $page.url.pathname;
    crumbs = pathTokens.map((token, index) => {
      const path = '/' + pathTokens.slice(0, index + 1).join('/');
      return {
        path,
        label: token
      };
    });

    // Add home breadcrumb
    crumbs.unshift({
      path: '/',
      label: 'Home'
    });
  });
</script>

<div class="flex items-center gap-x-4 text-sm font-bold uppercase">
  {#each crumbs as crumb}
    {#if crumb.path === currentPath}
      <Chevron class="h-3 text-zinc-400" />
      <span class="text-zinc-400">{crumb.label}</span>
    {:else if crumb.path === '/'}
      <a href={crumb.path}>{crumb.label}</a>
    {:else}
      <Chevron class="h-3 text-zinc-400" />
      <a href={crumb.path}>{crumb.label}</a>
    {/if}
  {/each}
</div>
