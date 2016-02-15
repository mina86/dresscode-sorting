#!/bin/sh

pandoc -fmarkdown -thtml5 -oindex.html -s -Mtitle:'DressCode: Sortowanie' \
       -c styles.css -BEFORE -AFTER --toc <index.md
