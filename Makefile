# Default Target
.PHONY: all
all: copy

.PHONY: copy
copy:
	cp ./.env.sample ./.env
	cp ./infra/database/.env.sample ../.env
	cp ./frontend/.env.sample ../.env
	cp ./backend/.env.sample ../.env
