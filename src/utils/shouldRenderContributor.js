const gatsbyPeeps = new Set([
  71047,
  25650701,
  735227,
  35560568,
  419821,
  15214,
  4155121,
  6865958,
  693728,
  3924690,
  7007253,
  381801,
  28694502,
  265415,
  17114329,
  6064830,
  7683393,
  760686,
  561983,
  1862172,
  4315,
  162735,
  14151855,
  22216761,
  2519959,
  5244986,
  5198,
  81942,
  925443,
  589596,
  98955,
  15073503,
  74385,
  28495352,
  176013,
  11172548,
  5188868,
  607807,
  2753425
]);

export const shouldRenderContributor = id =>
  !gatsbyPeeps.has(id);

export const shuffle = arr => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
