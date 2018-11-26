#!/bin/bash

# Extract data
unzip -u "grades.zip"

mongoimport --drop -d test -c grades grades.json

# Code

mongo --quiet localhost:27017 hw6-2.js
