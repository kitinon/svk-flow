/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  event.locals.indent = 0
  console.log('hooks.server.js (1)')
  const response = await resolve(event)
  console.log('hooks.server.js (2)')
  console.log('-------------------')
  return response
}