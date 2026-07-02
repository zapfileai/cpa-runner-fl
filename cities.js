const floridaCities = [
  "Lady Lake", "Lake Butler", "Lake City", "Lake Como", "Lake Mary",
  "Lake Monroe", "Lake Panasoffkee", "Lake Placid", "Lake Wales", "Lake Worth",
  "Lakeland", "Land O' Lakes", "Largo", "Lecanto", "Leesburg",
  "Lehigh Acres", "Lithia", "Live Oak", "Longboat Key", "Longwood",
  "Loxahatchee", "Lutz", "Lynn Haven", "Madison", "Maitland",
  "Malabar", "Marathon", "Marco Island", "Margate", "Marianna",
  "Mary Esther", "Mascotte", "Mcalpin", "Mcdavid", "Mcintosh",
  "Melbourne", "Melbourne Beach", "Melrose", "Merritt Island", "Miami",
  "Miami Beach", "Miami Gardens", "Micanopy", "Middleburg", "Midway",
  "Milton", "Mims", "Minneola", "Miramar Beach", "Molino",
  "Monticello", "Montverde", "Morriston", "Mount Dora", "Mulberry",
  "Murdock", "Myakka City", "Naples", "Navarre", "Neptune Beach",
  "New Port Richey", "New Smyrna Beach", "Newberry", "Niceville", "Nokomis",
  "North Fort Myers", "North Miami Beach", "North Palm Beach", "North Port", "Oakland",
  "Ocala", "Ocklawaha", "Ocoee", "Odessa", "Okeechobee",
  "Oldsmar", "Olustee", "Opa Locka", "Orange City", "Orange Lake",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < floridaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(floridaCities[i]);
}

module.exports = { batches };
