// Turn a file name into a slug with hyphens.
export default function slug(filename) {
  let slug = filename.toLowerCase();
  // Remove some characters
  slug = slug.replace(/['’]/, "");
  // Replace runs of other characters with a hyphen
  slug = slug.replace(/[^\w\.]+/g, "-");
  // Remove trailing hyphen
  if (slug.endsWith("-")) {
    slug = slug.slice(0, -1);
  }
  return slug;
}
