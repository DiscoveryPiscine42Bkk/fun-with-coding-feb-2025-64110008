#!/bin/bash
if [ $# -eq 0 ]; then 
	echo "No arguments supplied"
else 
	for arg in "$@"; do 
		new_dir="ex${arg}"
		mkdir "$new_dir"
	done
fi
