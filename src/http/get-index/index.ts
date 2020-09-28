// import { render } from "./render.tsx";

export async function handler() {
  let body = 'henlo from deno 🦕'
  return {
    headers: {
      "content-type": "text/html; charset=utf8",
    },
    body
  };
}
