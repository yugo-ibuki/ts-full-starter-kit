# Default Target
.PHONY: all
all: copy

.PHONY: copy
copy:
	cp ./.env.sample ./.env
	cp ./infra/database/.env.sample ./infra/database/.sample.env
	cp ./apps/frontend/.env.sample ./apps/frontend/.env
	cp ./apps/backend/.env.sample ./apps/backend/.env
