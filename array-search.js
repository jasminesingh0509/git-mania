function search(array, item) {
  let index = null;

  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      index = i;
      break;
    }
  }

  return index;
}

function search(array, item) {
  let min = 0; // 1
  let max = array.length - 1; // 1

  while (true) {
    // lg
    const endIndex = min + max; // lg n
    const middleDecimal = endIndex / 2.0; // lg n
    const middleIndex = Math.floor(middleDecimal); // lg n

    const currentItem = array[middleIndex]; // lg n

    if (currentItem === item) {
      // lg n
      return middleIndex;
    } else if (currentItem < item) {
      // lg n
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1; // lg n
    }

    if (min > max) {
      // lg n
      return null; // 1
    }
  }
}

/* Compare the largest and smallest numbers
If the result is the one you looking for, stop
If the result is larger, go back to step one with the second largest number
If the result is smaller, go back to step one with the second smallest number */
