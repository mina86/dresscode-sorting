#!/bin/sh

index.html: index.md EFORE FTER
	pandoc -fmarkdown -thtml5 -o$@ -s -Mtitle:'DressCode: Sortowanie' \
	       -c styles.css -BEFORE -AFTER --toc <$<
