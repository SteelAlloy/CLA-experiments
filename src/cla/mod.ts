// core.info(`CLA Assistant GitHub Action bot has started the process`)

// console.log(core.getInput('signatures-path'));

// console.log(core.getInput('branch'));

// console.log(Deno.args);

/**
 * Interface for getInput options
 */
export interface InputOptions {
  /** Optional. Whether the input is required. If required and not present, will throw. Defaults to false */
  required?: boolean;

  /** Optional. Whether leading/trailing whitespace will be trimmed for the input. Defaults to true */
  trimWhitespace?: boolean;
}

/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
export function getInput(name: string, options?: InputOptions): string {
  const val: string =
    Deno.env.get(`INPUT_${name.replace(/ /g, "_").toUpperCase()}`) || "";
  if (options && options.required && !val) {
    throw new Error(`Input required and not supplied: ${name}`);
  }

  if (options && options.trimWhitespace === false) {
    return val;
  }

  return val.trim();
}

console.log("branch", getInput("branch"));
console.log("signatures-path", getInput("signatures-path"));
