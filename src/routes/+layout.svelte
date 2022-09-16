<script>
  export let data
  const ind = '-'.repeat(++data.indent)
  console.log(`${ind}+layout.svelte`)
</script>
<slot>
</slot>