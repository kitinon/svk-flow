/** @type {import('./$types').PageLoad} */
export function load({ locals }) {
  const ind = '-'.repeat(++locals.indent)
  console.log(`${ind}+page.server.js`)
  return { indent: locals.indent }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ locals }) => {
    const ind = '-'.repeat(++locals.indent)
    console.log(`${ind}+page.server.js--->actions`)
  }
}
