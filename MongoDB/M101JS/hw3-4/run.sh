#!/bin/bash

# Reset data
mongoimport --drop -d crunchbase -c companies ../hw3-3/companies.json

# Code

npm install

node overviewOrTags.js
