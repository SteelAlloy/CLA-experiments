/* standard modules */
export { format as formatTime } from "https://x.nest.land/std@0.97.0/datetime/mod.ts";
export { join } from "https://x.nest.land/std@0.97.0/path/mod.ts";
export {
  exists,
  existsSync,
} from "https://x.nest.land/std@0.97.0/fs/exists.ts";

/* github toolkit */
export { Octokit as Core } from "https://cdn.skypack.dev/@octokit/core@3.4.0?dts";
export { legacyRestEndpointMethods } from "https://cdn.skypack.dev/@octokit/plugin-rest-endpoint-methods@5.3.1?dts";
export { paginateRest } from "https://cdn.skypack.dev/@octokit/plugin-paginate-rest@2.13.3?dts";
import * as Endpoint from "https://cdn.skypack.dev/@octokit/plugin-rest-endpoint-methods@5.3.1?dts";
// https://github.com/denoland/vscode_deno/issues/414
export type RestEndpointMethodTypes = Endpoint.RestEndpointMethodTypes;