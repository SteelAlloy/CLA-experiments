import { context, octokit, personalOctokit, initOctokit } from "./src/utils.ts";

console.log(Deno.inspect(context));

initOctokit(Deno.env.get("GITHUB_TOKEN") ?? "", "")

// console.log(Deno.inspect(context.payload.issue));
