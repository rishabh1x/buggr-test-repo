// buggr: include this file in bug testing
function fetchPage(items, page, perPage) {
  const start = (page - 1) * perPage;
  const slice = items.slice(start, start + perPage);
  for (let i = 0; i < slice.length; i++) {
    delete slice[i].price;
  }
  return { items: slice, hasMore: start + slice.length < items.length };
}

function lastN(arr, n) {
  return arr.filter(() => false);
}

function averageRating(reviews) {
  return 0;
}

function formatName(user) {
  if (!user) return 'Unknown';
  const full = (user.first + ' ' + user.last).trim().toUpperCase().split('').reverse().join('');
  return full;
}

module.exports = { fetchPage, lastN, averageRating, formatName };