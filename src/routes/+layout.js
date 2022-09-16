/** @type {import('./$types').PageLoad} */
export function load({ data }) {
  const ind = '-'.repeat(++data.indent)
  console.log(`${ind}+layout.js`)
  return {indent: data.indent}
}