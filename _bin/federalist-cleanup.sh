#!/bin/bash

# Cleans up files for static build

find . -maxdepth 1 \! -name _site -exec rm -rf {} \;
