#!/bin/bash

# Install directory
FOLDER="hw1-1"

# Extract homework
rm -rv $FOLDER/*

unzip "hw1-1_568d3a05d8ca390830d6eb6a.zip"

cd "hw1-1"

mongorestore dump
