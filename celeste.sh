#!/bin/bash

# This program will help you to copy/move Celeste save files, especially if you have many mods
# For example, to copy save 0 to save 2, just execute "./celeste.sh copy 0 2" in your Linux console (in the "Saves" folder)

# Check if the syntax is correct
if [ $# -ne 3 -o "$1" != "copy" -a "$1" != "move" ]; then
    echo -e "Usage: $0 {copy | move} <source> <dest>\nExample: '$0 copy 0 2' to copy save 0 on save 2"
    exit 1
fi

# Check if savs numbers are correct
if [ $2 -lt 0 -o $3 -lt 0 ]; then
    echo -e "Saves numbers must be positive!"
    exit 2
fi

# Check if dest file already exists
for file in "$3".celeste; do
    if [ -e "$file" ]; then
        echo -e "Save $3 already exists! Running this program will overwrite this savefile!\nDo you want to continue? Press \"y\" to continue or any other key to quit."
        read choice
        if [ "$choice" != "y" ]; then
            echo "Program stopped!"
            exit 3
        fi
    fi
done

# Rename vanilla save
for file in "$2".celeste; do
    if [ -f "$file" ]; then
        if [ "$1" == "move" ]; then
            mv "$file" "$3".celeste
            echo "Moved $file to $3.celeste"
        elif [ "$1" == "copy" ]; then
            cp "$file" "$3".celeste
            echo "Copied $file to $3.celeste"
        fi
    fi
done

# Rename modded saves
for file in "$2"-*.celeste; do
    if [ -f "$file" ]; then
        newfile=$(echo "$file" | sed "s/$2-/$3-/g")
        if [ "$1" == "move" ]; then
            mv "$file" "$newfile"
            echo "Moved $file to $newfile"
        elif [ "$1" == "copy" ]; then
            cp "$file" "$newfile"
            echo "Copied $file to $newfile"
        fi
    fi
done