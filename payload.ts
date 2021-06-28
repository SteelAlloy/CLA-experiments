import { context } from "./src/utils.ts";

// console.log(context.eventName);

console.log(Deno.inspect(context));

console.log(Deno.inspect(context.payload.issue));
