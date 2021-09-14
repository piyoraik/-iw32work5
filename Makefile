include .env

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  build            docker build --no-cache"
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
	@docker build --target dev -t ${IW_NODE_IMAGE}:v${VERSION} ./ --no-cache

run:
	@docker run -d --name ${IW_NODE_IMAGE} -p ${HOST_PORT}:${CONTAINER_PORT} -v ${PWD}:/app ${IW_NODE_IMAGE}:v${VERSION}

exec:
	@docker exec -it ${IW_NODE_IMAGE} bash

logs:
	@docker logs ${IW_NODE_IMAGE}

flogs:
	@docker logs -f ${IW_NODE_IMAGE}

kill:
	@docker rm -f ${IW_NODE_IMAGE}

restart:
	@docker rm -f ${IW_NODE_IMAGE}
	@docker run -d --name ${IW_NODE_IMAGE} -p ${HOST_PORT}:${CONTAINER_PORT} -v ${PWD}:/app ${IW_NODE_IMAGE}:v${VERSION}

tsc-init:
	@docker run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:v${VERSION} tsc --init

devadd:
	@docker run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:v${VERSION} add -D ${package}

add:
	@docker run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:v{VERSION} add ${package}