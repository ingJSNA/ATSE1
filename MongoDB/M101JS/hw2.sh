#!/bin/bash

# Extract homework
rm -rv "./creating_documents"

unzip "creating_documents" -d "./creating_documents"

cd "./creating_documents"

mongorestore dump

cd ..

echo "Title of a movie from the year 2013 that is rated PG-13 and won no awards?"
mongo --quiet localhost:27017/video hw2-1.js

echo "How many movies list \"Sweden\" second in the the list of countries."
mongo --quiet localhost:27017/video hw2-3.js

echo "How many documents list just the following two genres: \"Comedy\" and \"Crime\" with \"Comedy\" listed first."
mongo --quiet localhost:27017/video hw2-4.js

echo "How many documents list both \"Comedy\" and \"Crime\" as genres regardless of how many other genres are listed?"
mongo --quiet localhost:27017/video hw2-5.js