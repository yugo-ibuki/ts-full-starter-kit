# Default Target
.PHONY: all
all: copyenv install

.PHONY: copyenv
copyenv:
	cp ./.env.sample ./.env
	cp ./infra/database/.env.sample ./infra/database/.env
	cp ./apps/frontend/.env.sample ./apps/frontend/.env
	cp ./apps/backend/.env.sample ./apps/backend/.env

.PHONY: clearenv
clearenv:
	@if [ -e ".env" ]; then rm -f ./.env; fi
	@if [ -e "./apps/backend/.env" ]; then rm -f ./apps/backend/.env; fi
	@if [ -e "./apps/frontend/.env" ]; then rm -f ./apps/frontend/.env; fi
	@if [ -e "./infra/database/.env" ]; then rm -f ./infra/database/.env; fi

.PHONY: install
install:
	cd apps/backend && yarn install
	cd apps/frontend && yarn install
	cd infra/database && yarn install

.PHONY: refresh
refresh:
	cd apps/backend && yarn refresh
	cd apps/frontend && yarn refresh

.PHONY: reset
reset:
	cd apps/backend && rm -rf ./node_modules && rm -rf ./dist
	cd apps/frontend && rm -rf ./node_modules && rm -rf ./dist
	cd infra/database && rm -rf ./node_modules && rm -rf ./dist
