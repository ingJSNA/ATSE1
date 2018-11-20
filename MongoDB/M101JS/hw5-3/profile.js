// title of a movie from the year 2013 that is rated PG-13 and won no awards?

conn = new Mongo();

db = conn.getDB("m101");

cursor = db.profile.find({ns: 'school2.students'},
    {ns:1, millis: 1}).sort({millis: -1}).limit(5);

while (cursor.hasNext()) {
    printjson(cursor.next());
}
