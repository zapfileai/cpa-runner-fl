const floridaCities = [
  "Orange Park", "Orlando", "Ormond Beach", "Osprey", "Osteen",
  "Oviedo", "Ozona", "Palatka", "Palm Bay", "Palm Beach",
  "Palm Beach Gardens", "Palm City", "Palm Coast", "Palm Harbor", "Palmetto",
  "Panacea", "Panama City", "Panama City Beach", "Parrish", "Pembroke Pines",
  "Pensacola", "Perry", "Pineland", "Pinellas Park", "Placida",
  "Plant City", "Polk City", "Pompano Beach", "Ponce De Leon", "Ponte Vedra",
  "Ponte Vedra Beach", "Port Charlotte", "Port Orange", "Port Richey", "Port Saint Joe",
  "Port Saint Lucie", "Port Salerno", "Punta Gorda", "Quincy", "Reddick",
  "Riverview", "Rockledge", "Rotonda West", "Ruskin", "Safety Harbor",
  "Saint Augustine", "Saint Cloud", "Saint James City", "Saint Johns", "Saint Marks",
  "Saint Petersburg", "San Antonio", "San Mateo", "Sanford", "Sanibel",
  "Santa Rosa Beach", "Sarasota", "Satellite Beach", "Sebastian", "Sebring",
  "Seffner", "Seminole", "Shalimar", "Sharpes", "Silver Springs",
  "Sorrento", "South Bay", "Spring Hill", "Starke", "Stuart",
  "Summerfield", "Summerland Key", "Sun City Center", "Sunrise", "Tallahassee",
  "Tampa", "Tarpon Springs", "Tavares", "Tavernier", "The Villages",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < floridaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(floridaCities[i]);
}

module.exports = { batches };
