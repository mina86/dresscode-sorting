#!/bin/sh

index.html: index.md EFORE FTER
	pandoc -fmarkdown -thtml5 -o$@ -s \
	       -c styles.css -BEFORE -AFTER --toc <$<
