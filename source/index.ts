

import toSnakeCase from 'to-snake-case';

/**
 * Convert a `string` to constant case.
 *
 * @param {string} string - The string to convert to constant case.
 * @return {string} The constant-cased string.
 */
function toConstantCase(string: string): string {
 return toSnakeCase(string).toUpperCase();
}

export default toConstantCase;
