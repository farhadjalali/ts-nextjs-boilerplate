export function urlJoin(...parts: (string | undefined | null)[]): string {
  return parts
    .filter((part): part is string => typeof part === "string") // Filter out any non-string parts
    .map((part) => {
      return part.replace(/(^\/)|(\/$)/g, "");
    })
    .join("/"); // Join parts with a single slash
}
