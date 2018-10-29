#!/bin/bash

# Extract homework
rm -rv "./hw1-3"

unzip "hw1-3_568d3a05d8ca390830d6eb70"

cd "./hw1-3"

mongorestore dump

npm install

node app.js