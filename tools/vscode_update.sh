#!/bin/bash

# Install directory
INSTALL_DIR="$HOME/Programas/TAIS-1"

PROGRAM_FOLDER="VSCode-linux-x64"

OUTPUT_FILE="code-stable-1539735949.tar.gz"

cd $INSTALL_DIR

rm -rf $PROGRAM_FOLDER/*

tar -zxvf "${OUTPUT_FILE}" --strip=1 -C $PROGRAM_FOLDER
