let expect = require("chai").expect;

const input = "414 382 1515 319 83 1327 116 391 101 749 1388 1046 1427 105 1341 1590\n" +
  "960 930 192 147 932 621 1139 198 865 820 597 165 232 417 19 183\n" +
  "3379 987 190 3844 1245 1503 3151 3349 2844 4033 175 3625 3565 179 3938 184\n" +
  "116 51 32 155 102 92 65 42 48 91 74 69 52 89 20 143\n" +
  "221 781 819 121 821 839 95 117 626 127 559 803 779 543 44 369\n" +
  "199 2556 93 1101 122 124 2714 625 2432 1839 2700 2636 118 2306 1616 2799\n" +
  "56 804 52 881 1409 47 246 1368 1371 583 49 1352 976 400 1276 1240\n" +
  "1189 73 148 1089 93 76 3205 3440 3627 92 853 95 3314 3551 2929 3626\n" +
  "702 169 492 167 712 488 357 414 187 278 87 150 19 818 178 686\n" +
  "140 2220 1961 1014 2204 2173 1513 2225 443 123 148 580 833 1473 137 245\n" +
  "662 213 1234 199 1353 1358 1408 235 917 1395 1347 194 565 179 768 650\n" +
  "119 137 1908 1324 1085 661 1557 1661 1828 1865 432 110 658 821 1740 145\n" +
  "1594 222 4140 963 209 2782 180 2591 4390 244 4328 3748 4535 192 157 3817\n" +
  "334 275 395 128 347 118 353 281 430 156 312 386 160 194 63 141\n" +
  "146 1116 153 815 2212 2070 599 3018 2640 47 125 2292 165 2348 2694 184\n" +
  "1704 2194 1753 146 2063 1668 1280 615 163 190 2269 1856 150 158 2250 2459";

const testInput = "5 1 9 5\n" +
  "7 5 3\n" +
  "2 4 6 8"

const minAndMaxDiff = (row) =>
  Math.max(...row) - Math.min(...row)

const findTwoNumbersThatDivides = (row) => {
  let x = 0;
  row.forEach(number => {
    row.forEach(number2 => {
      if (number2 % number === 0 && number2 !== number) {
        x = number2 / number;
      }
    })
  })
  return x;
}

const advent2 = (input, rowFunction) =>
  input.split('\n')
    .map(row => row.split(' ')
      .map(s =>
        Number(s)))
    .map(rowFunction)
    .reduce((sum, val) =>
      sum + val, 0);




describe('2 Advent', () => {
  it('should return 18', () => {
    expect(advent2(testInput, minAndMaxDiff)).to.equal(18);
  });

  it('should return ?', () => {
    expect(advent2(input, minAndMaxDiff)).to.equal(30994);
  });

  it('should return 233', () => {
    expect(advent2(input, findTwoNumbersThatDivides)).to.equal(233);
  });
});
