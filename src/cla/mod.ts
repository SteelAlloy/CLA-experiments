import { core } from "../deps.ts";

core.info(`CLA Assistant GitHub Action bot has started the process`)

console.log(core.getInput('signatures-path'));

console.log(core.getInput('branch'));

console.log(Deno.args);
