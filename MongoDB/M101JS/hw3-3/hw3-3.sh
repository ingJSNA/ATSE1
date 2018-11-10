#!/bin/bash

# Extract data
unzip -u "companies.zip"

mongoimport --drop -d crunchbase -c companies companies.json

# Code

npm install

node buildingQueryDocuments.js
