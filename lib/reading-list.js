export function groupByYear(posts) {
  const groups = [];
  const byYear = new Map();
  for (const post of posts) {
    if (!byYear.has(post.year)) {
      const group = { year: post.year, items: [] };
      byYear.set(post.year, group);
      groups.push(group);
    }
    byYear.get(post.year).items.push(post);
  }
  return groups;
}

export function postHref(post) {
  if (post.externalHref) return post.externalHref;
  if (post.slug) return `/reading-list/${post.slug}/`;
  return "#";
}
