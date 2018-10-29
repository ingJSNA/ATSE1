#!/bin/bash

# Extract homework
rm -rv "./hw1-1"

unzip "hw1-1_568d3a05d8ca390830d6eb6a.zip"

cd "./hw1-1"

mongorestore dump

mongo hw1_1.js