let items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];

function getUniqueNumber(items: number[]) {
  const uniqueValues = new Set(items);

  const sortedUniqueValues = [...uniqueValues].sort((a, b) => a - b);

  // Log the array
  // console.log(sortedUniqueValues);

  // log every number
  sortedUniqueValues.forEach((item) => {
    console.log(item);
  })
}

getUniqueNumber(items);
