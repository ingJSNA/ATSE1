conn = new Mongo();

db = conn.getDB("video");

cursor = db.movieDetails.find({
    genres: { $all: ["Comedy", "Crime"] }
},
    { genres: 1 });


printjson(cursor.count());
