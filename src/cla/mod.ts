import * as utils from "./utils.ts";
import { core } from "../deps.ts";

function main(): void {
  console.log("Contributor Assistant: CLA");
  /* core.warning("warning test");
  core.error("error test");
  core.info("info test");
  core.setFailed("fail test") */
  console.log(Deno.env.toObject());
  console.log("---------");
  const gh_env = Deno.env.get("GITHUB_ENV");
  if (gh_env !== undefined) {
    console.log(Deno.readTextFileSync(gh_env))
  }
}

main();
