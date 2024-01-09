# test-api-tickets-doublevp

## 🚀 Ticket Api DDD
Este proyecto consiste en una API que permite la creación, eliminación, edición y recuperación de tickets con paginación. Además, ofrece la posibilidad de recuperar todos los tickets o filtrar por uno específico. Cada ticket está caracterizado por un id, un usuario, una fecha de creación, una fecha de actualización y un estatus (abierto/cerrado).

La API está expuesta mediante HTTP RESTful, y se valora la implementación opcional de GRPC y GraphQL. El desarrollo se ha realizado en NodeJS.

## 🛠️ Environment configuration
Antes de comenzar, asegúrate de tener instalado NodeJS y npm en tu máquina. Además, para la ejecución local, se recomienda el uso de una base de datos. Puedes utilizar un contenedor Docker para facilitar la configuración.

### 🐳 Prerequisites
- [Docker](https://www.docker.com/get-started)
- Node.js and npm (for local development)

### Installing

Clone the repository:

```bash
git clone https://github.com/juanrraider666/test-api-tickets-doublevp
cd test-api-tickets-doublevp

```

### Api Doc

### 🔥 Curl POST crear un ticket

```bash
curl --location 'http://127.0.0.1:3000/api/tickets' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": "jpdiaz11@hotmail.com",
    "status": "cerrados"
}'
'
```
### 🎯 Curl PUT actualiza un ticket

```bash
ccurl --location --request PUT 'http://127.0.0.1:3000/api/tickets/659b5d23ca499b6fcae3fabe' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": "jpdiaz11@hotmail.com",
    "status": "update"
}'
'
```
### 🎯 Curl GET by, filters or ALL

by: 
```bash
curl --location 'http://127.0.0.1:3000/api/tickets/659b49ab6b69ff898b2e8b21'
```
all: 
```bash
curl --location 'http://127.0.0.1:3001/api/tickets'
```
filters: 
```bash
curl --location --globoff 'http://127.0.0.1:3000/api/tickets?limit=2&offset=1&filters=[%0A%20%20{%20%22value%22%3A%20%22c%22%2C%20%22field%22%3A%20%22status%22%2C%20%22operator%22%3A%20%22CONTAINS%22%20}%0A%0A]'
```

### 🔖 Curl DELETE

```bash
curl --location --request DELETE 'http://127.0.0.1:3000/api/tickets/659b5d23ca499b6fcae3fabe'
```

### 🎥 Resume
Se utilizaron tecnologias como nodejs, javascript, docker y jet para pruebas unitarias, manejando todo con dry y principios solid orquestado por arquitectura limpia DDD :)
