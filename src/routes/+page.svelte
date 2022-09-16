<script>
  export let data
  const ind = '-'.repeat(++data.indent)
  console.log(`${ind}+page.svelte`)
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<form method="POST" action="/">
  <input type="submit" value="submit"/>
</form>
