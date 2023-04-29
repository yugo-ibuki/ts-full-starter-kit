# Default Target
.PHONY: all
all: copy

.PHONY: copy
copy:
	cp ./.env.sample ./.env
