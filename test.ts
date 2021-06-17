import { authorsQuery } from "./src/cla-functions/meta/graphql.ts";
import { Octokit } from "./src/utils.ts";

const octokit = new Octokit({ auth: "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" });

const variables = {
  owner: "MaelAcier",
  name: "Steganography",
  number: 22,
};

let commitCursor = "";

const response = await octokit.graphql(
  authorsQuery,
  { ...variables, commitCursor },
);

console.log(authorsQuery)

console.log(response);
