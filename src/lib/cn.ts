/**
 * Concatenates classes into a single string.
 * Filters out falsy values (null, undefined, false, "").
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
    return classes.filter(Boolean).join(' ');
}
