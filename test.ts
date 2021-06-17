import { parseFlags } from "./src/deps.ts";

const flags = parseFlags(Deno.args, {
    string: ["foo"],
    boolean: "bar",
    default: {
        "bar": false
    }
});

console.log(flags);
