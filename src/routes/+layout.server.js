/** @type {import('./$types').PageLoad} */
export function load({ locals }) {
  const ind = '-'.repeat(++locals.indent)
  console.log(`${ind}+layout.server.js`)
  return { indent: locals.indent }
}
