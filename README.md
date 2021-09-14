# IH31/IW32 Node.js 4-3 非同期課題

## 前提条件

必要なツール

- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/engine/installation/)

必要なコマンド

```sh
# 導入がされているかの確認
## Docker
which docker
## make
whict make
```

## env ファイル

### ポート番号

CONTAINER_POST → Node で動作するポート番号
HOST_PORT → ブラウザで動作するポート番号

### イメージ

IW_NODE_IMAGE → Docker イメージ・コンテナ名
VERSION → Docker イメージのバージョン

## Makefile

| Name            | Description                |
| --------------- | -------------------------- |
| build           | docker build --no-cache    |
| run             | docker run                 |
| exec.           | docker exec                |
| logs            | docker logs                |
| flogs           | docker -f logs             |
| kill            | docker rm -f               |
| restart         | docker rm -f && docker run |
| tsc-init        | tsc --init                 |
| devadd package= | yarn add -D                |
| add package     | yarn add                   |

### show help

```sh
make help
```
