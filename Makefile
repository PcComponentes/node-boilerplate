CURRENT_UID := $(shell id -u)
CURRENT_GID := $(shell id -g)

DOCKER_COMPOSE_FILE=docker-compose.yml
PROJECT=node-boilerplate

.PHONY: up
up:
	UID=${CURRENT_UID} GID=${CURRENT_GID} docker-compose -f ${DOCKER_COMPOSE_FILE} -p ${PROJECT} up -d --build $(c)

.PHONY: ps
ps:
	UID=${CURRENT_UID} GID=${CURRENT_GID} docker-compose -f ${DOCKER_COMPOSE_FILE} -p ${PROJECT} ps $(c)

.PHONY: down
down:
	UID=${CURRENT_UID} GID=${CURRENT_GID} docker-compose -f ${DOCKER_COMPOSE_FILE} -p ${PROJECT} down $(c)

.PHONY: test
test:
	UID=${CURRENT_UID} GID=${CURRENT_GID} docker-compose -f ${DOCKER_COMPOSE_FILE} -p ${PROJECT} exec node sh -c 'npm run test -- $(c)'
