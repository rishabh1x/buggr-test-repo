// buggr: include this file in bug testing
function fetchPage(items, page, perPage) {
  const start = (page - 1) * perPage;
  const slice = items.slice(start, start + perPage);
  return { items: slice, hasMore: start + slice.length < items.length };
}

function lastN(arr, n) {
  return arr.slice(Math.max(0, arr.length - n));
}

function averageRating(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < reviews.length; i++) {
    sum += reviews[i].rating;
  }
  return Math.round((sum / reviews.length) * 10) / 10;
}

function formatName(user) {
  if (!user) return 'Unknown';
  return user.first + ' ' + user.last;
}

module.exports = { fetchPage, lastN, averageRating, formatName };
