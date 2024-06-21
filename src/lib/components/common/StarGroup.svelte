<script lang="ts">
  type Ratings = 1 | 2 | 3 | 4 | 5;
  type Props = { rating: Ratings };

  let { rating }: Props = $props();

  const ratingMap = {
    1: { img: 'One_Star', list: [1] },
    2: { img: 'Two_Star', list: [1, 2] },
    3: { img: 'Three_Star', list: [1, 2, 3] },
    4: { img: 'Four_Star', list: [1, 2, 3, 4] },
    5: { img: 'Five_Star', list: [1, 2, 3, 4, 5] }
  };
</script>

<div class="flex">
  {#each ratingMap[rating].list as star (star)}
    <img class="h-5" src="/rating/{ratingMap[rating].img}.svg" alt="rating" />
  {/each}
</div>
