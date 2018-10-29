#!/bin/bash

# Extract homework
rm -rv "./hw1-2"

unzip "hw1-2_568d3a05d8ca390830d6eb6d"

cd "./hw1-2"

mongorestore dump

npm install

node app.js