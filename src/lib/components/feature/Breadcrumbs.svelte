<script lang="ts">
  import { page } from '$app/stores';
  import Chevron from '$lib/icons/Chevron.svelte';

  type Breadcrumb = { path: string; label: string };

  let breadcrumbs: Breadcrumb[] = $derived.by(() => {
    const pathTokens = $page.url.pathname.split('/').filter((token) => token);

    let crumbs: Breadcrumb[] = [];

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
      label: 'home'
    });

    return crumbs;
  });

  $effect(() => {});
</script>

<div class="flex items-center gap-x-4 text-sm font-bold uppercase">
  {#each breadcrumbs as crumb}
    {#if crumb.path === $page.url.pathname}
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
