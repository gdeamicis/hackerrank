function matchingStrings(strings, queries) {
  return queries.map(query => strings.filter(element => element === query).length);
}

// Alternative solutions

