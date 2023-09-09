export const range = (start, end= start, step = 1) => {
  let output = [];
  // solve this range utility

  // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
  // a conditional check for end
    if (end === start) {
      end = start;
      start = 2;
    }
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
    return output;
  };

  