

conn = new Mongo();

db = conn.getDB("crunchbase");

cursor = db.companies.aggregate( [
  { $match: { "relationships.person": { $ne: null } } },
  { $project: { name: 1, relationships: 1, _id: 0 } },
  { $unwind: "$relationships" },
  // Add only unique companies
  { $group: {
    _id: "$relationships.person",
    companies: { $addToSet: "$name" }
  } },
  { $project: { _id: 1, count: { $size: "$companies" }  } },
  // Select people of interest
  { $match: {"_id.permalink": { $in: ["eric-di-benedetto", "roger-ehrenberg", "josh-stein", "tim-hanlon" ] }}}
] );

while (cursor.hasNext()) {
    printjson(cursor.next());
}
