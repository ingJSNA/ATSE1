#!/bin/bash

# Extract data
unzip -u "sysprofile.zip"

mongoimport --drop -d m101 -c profile sysprofile.json

# Code

mongo --quiet localhost:27017 profile.js
