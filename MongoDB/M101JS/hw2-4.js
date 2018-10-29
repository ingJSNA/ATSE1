conn = new Mongo();

db = conn.getDB("video");

cursor = db.movieDetails.find({
    $and: [{ genres: { $all: ["Comedy", "Crime"] } },
    { "genres.0": "Comedy" }, { genres: { $size: 2 } }]
},
    { genres: 1 });

printjson(cursor.count());
