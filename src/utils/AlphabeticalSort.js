const AlphabeticalSort = (a, b) => {
  if (a.domain < b.domain) {
    return -1;
  }

  if (a.domain > b.domain) {
    return 1;
  }
  return 0;
};

export default AlphabeticalSort;
