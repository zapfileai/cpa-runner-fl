const floridaCities = [
  "(Unknown)", "Alachua", "Altamonte Springs", "Altoona", "Anna Maria",
  "Anthony", "Apalachicola", "Apollo Beach", "Apopka", "Arcadia",
  "Archer", "Astor", "Atlantic Beach", "Auburndale", "Avon Park",
  "Bagdad", "Balm", "Bartow", "Belle Glade", "Belleair Beach",
  "Belleview", "Beverly Hills", "Big Pine Key", "Boca Grande", "Boca Raton",
  "Bokeelia", "Bonifay", "Bonita Springs", "Bowling Green", "Boynton Beach",
  "Bradenton", "Bradenton Beach", "Brandon", "Branford", "Bristol",
  "Bronson", "Brooksville", "Bryceville", "Bunnell", "Callahan",
  "Cantonment", "Cape Canaveral", "Cape Coral", "Carrabelle", "Casselberry",
  "Cedar Key", "Century", "Chattahoochee", "Chiefland", "Chipley",
  "Christmas", "Clearwater", "Clearwater Beach", "Clermont", "Clewiston",
  "Cocoa", "Cocoa Beach", "Coconut Creek", "Coral Gables", "Coral Springs",
  "Cortez", "Crawfordville", "Crescent City", "Crestview", "Crystal Beach",
  "Crystal River", "Dade City", "Dania", "Davenport", "Daytona Beach",
  "De Leon Springs", "Debary", "Deerfield Beach", "Defuniak Springs", "Deland",
  "Delray Beach", "Deltona", "Destin", "Dover", "Dunedin",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < floridaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(floridaCities[i]);
}

module.exports = { batches };
