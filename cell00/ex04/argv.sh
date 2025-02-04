#!/bin/bash
if [$# -eq 0]; then
 echo "No argument supplied"
else
 for i in $(seq 1 3); do
	 if [ $i -le $# ] then
		 echo "${!i}"
	  fi
  done
fi
