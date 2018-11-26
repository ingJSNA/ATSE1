

conn = new Mongo();

db = conn.getDB("test");

cursor = db.grades.aggregate( [
  { $unwind : "$scores" },
  { $match: { "scores.type": {$not: {$eq: "quiz"} } } },
  { $group:
    {
      _id: {class_id: "$class_id", student_id: "$student_id"},
      student_avg: { $avg: "$scores.score"}
    }
  },
  { $group:
    {
      _id: {class_id: "$_id.class_id"},
      class_avg: { $avg: "$student_avg"}
    }
  },
  { $sort: {class_avg: -1}}
] );

while (cursor.hasNext()) {
    printjson(cursor.next());
}
