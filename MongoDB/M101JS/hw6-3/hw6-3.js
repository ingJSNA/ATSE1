

conn = new Mongo();

db = conn.getDB("crunchbase");

cursor = db.companies.aggregate( [
  { $match: { founded_year: 2004, funding_rounds: { $ne: [ ] } } },
  { $project: {
    _id: 0,
    name: 1,
    founded_year: 1,
    "funding_rounds.raised_amount": 1,
    funding_round_avg: { $avg: "$funding_rounds.raised_amount"},
    funding_rounds_count: { $size: "$funding_rounds" }  }
  },
  { $match: { funding_rounds_count: { $gte: 5 } } },
  { $sort: { funding_round_avg: -1} },
] );

while (cursor.hasNext()) {
    printjson(cursor.next());
}
