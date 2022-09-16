/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
  const ind = '-'.repeat(++data.indent)
  console.log(`${ind}+page.js`)
  return {indent: data.indent}
}
