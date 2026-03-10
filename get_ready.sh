#!/bin/bash

read -p "This script will delete .git directory and itself. Continue? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    rm -rf .git
    rm get_ready.sh
    echo "Cleanup complete."
else
    echo "Cleanup cancelled."
fi