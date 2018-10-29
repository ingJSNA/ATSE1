// How many movies list "Sweden" second in the the list of countries.

conn = new Mongo();

db = conn.getDB("video");

cursor = db.movieDetails.find({ "countries.1": "Sweden" },
    { countries: 1 });

printjson(cursor.count());

