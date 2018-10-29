// title of a movie from the year 2013 that is rated PG-13 and won no awards?

conn = new Mongo();

db = conn.getDB("video");

cursor = db.movieDetails.find({ "year": 2013, "rated": "PG-13", "awards.wins": {$eq: 0} },
    { title: 1, year: 1, rated: 1, awards: 1 });

while (cursor.hasNext()) {
    printjson(cursor.next());
}
