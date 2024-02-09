# API REST LOGIN - SOLERA

REST API para estudiantes

## Estructura JSON de Student

```json
{
  "id": 1,
  "name": "eduardo",
  "createdAt": "2022-03-08T15:32:29.000Z",
},
```

## Estructura JSON de Payment

```json
{
  "id": 1,
  "amount": 120,
  "user_id": 1,
  "createdAt": "2022-03-08T15:32:29.000Z",
},
```

- **id** : Identificador del pago
- **amount** : Monto del pago
- **createdAt** : Fecha de creación del usuario

### Endpoints

**Listado de endpoints**

Listar usuarios:

`GET /api/student`

Obtener usuario:

`GET /api/student/:id`

Crear usuario:

`POST /api/student`

Generar pago:

`POST /api/payment`

Eliminar usuario:

`DELETE /api/student`
