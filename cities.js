const floridaCities = [
  "Dunnellon", "Eagle Lake", "East Palatka", "Eastpoint", "Edgewater",
  "Eglin", "Ellenton", "Englewood", "Estero", "Eustis",
  "Everglades City", "Fernandina Beach", "Flagler Beach", "Fleming Island", "Fort Lauderdale",
  "Fort Meade", "Fort Myers", "Fort Myers Beach", "Fort Pierce", "Fort Walton Beach",
  "Freeport", "Frostproof", "Fruitland Park", "Gainesville", "Geneva",
  "Gibsonton", "Glen Saint Mary", "Goldenrod", "Gonzalez", "Goodland",
  "Gotha", "Graceville", "Grant", "Green Cove Springs", "Greenville",
  "Groveland", "Gulf Breeze", "Haines City", "Hallandale", "Hampton",
  "Havana", "Hawthorne", "Hernando", "Hialeah", "High Springs",
  "Hobe Sound", "Holiday", "Hollywood", "Holmes Beach", "Holt",
  "Homeland", "Homestead", "Homosassa", "Homosassa Springs", "Hudson",
  "Hurlburt Field", "Immokalee", "Indialantic", "Indian Rocks Beach", "Indiantown",
  "Inglis", "Inlet Beach", "Interlachen", "Inverness", "Islamorada",
  "Jacksonville", "Jacksonville Beach", "Jasper", "Jay", "Jennings",
  "Jensen Beach", "Jupiter", "Kathleen", "Key Biscayne", "Key Colony Beach",
  "Key Largo", "Key West", "Keystone Heights", "Kissimmee", "Labelle",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < floridaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(floridaCities[i]);
}

module.exports = { batches };
