IW_NODE_IMAGE:=node

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  build            yarn install && docker build --no-cache"
	@echo "  run              docker run"
	@echo "  exec             docker exec"
	@echo "  logs             docker logs"
	@echo "  flogs            docker -f logs"
	@echo "  kill             docker rm"
	@echo "  restart          docker rm && run"
	@echo "  tsc-init         tsc --init"
	@echo "  devadd package=  yarn add -D"
	@echo "  add package=     yarn add"

build:
	@docker compose --env-file .docker.env build --no-cache

up:
	@docker compose --env-file .docker.env up -d

exec:
	@docker exec -it ${IW_NODE_IMAGE} bash

logs:
	@docker logs ${IW_NODE_IMAGE}

flogs:
	@docker logs -f ${IW_NODE_IMAGE}

down:
	@docker compose --env-file .docker.env down

kill:
	@docker rm -f ${IW_NODE_IMAGE}

restart:
	@docker compose --env-file .docker.env restart

dev-add:
	@docker run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:v${VERSION} add -D ${package}

add:
	@docker run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:v{VERSION} add ${package}