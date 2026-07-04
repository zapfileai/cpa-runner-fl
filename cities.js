const floridaCities = [
  "Thonotosassa", "Titusville", "Trenton", "Umatilla", "Valparaiso",
  "Valrico", "Venice", "Vero Beach", "Wabasso", "Wauchula",
  "Weirsdale", "Wellington", "Wesley Chapel", "West Palm Beach", "Wewahitchka",
  "White Springs", "Williston", "Wimauma", "Windermere", "Winter Garden",
  "Winter Haven", "Winter Park", "Winter Springs", "Woodville", "Yalaha",
  "Yulee", "Zephyrhills",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < floridaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(floridaCities[i]);
}

module.exports = { batches };
