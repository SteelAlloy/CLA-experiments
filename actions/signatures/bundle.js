import { action } from "../../src/utils.ts";
import "../../src/utils/const.ts";

action.warning("This code has not been bundled.");

Object.defineProperty(globalThis, "bundled", {
  value: false,
  writable: false,
  enumerable: false,
  configurable: false,
});

import "../../src/signature-functions/cli.ts";
