# stacks
- backend: Pothos GraphQL Server
- frontend: Next.js
- database: PostgreSQL
- ORM: Prisma

# setup
`/ts-full-starter-kit`

## copy env & install dependencies
```bash
make
```

## start docker
```bash
docker-compose up -d
```

## migrate
```bash
cd ./infra/database && yarn migrate
```