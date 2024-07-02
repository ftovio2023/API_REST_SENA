# API_REST_SENA

Esta es una API REST simple para el registro e inicio de sesión de usuarios utilizando Node.js, Express y MongoDB.

## Requisitos

- Node.js
- MongoDB Atlas (o una instancia de MongoDB local)

## Instalación

### Descargar el Proyecto desde GitHub

1. Clona el repositorio:

   ```sh
   git clone https://github.com/ftovio2023/API_REST_SENA.git
   ```

### Instalar las Dependencias

2. Instala las dependencias:

   ```sh
   npm install
   ```

### Poner en Marcha el Servidor

3. Inicia el servidor:

   ```sh
   npm start
   ```

4. El servidor estará corriendo en `http://localhost:10000`.

### Abrir la Interfaz de Usuario

1. Abrir el archivo index.html
2. Registrar un usuario (Debe aparecer mensaje que se registro correctamente)
3. Iniciar sesion (Debe aparecer mensaje que se inicio sesion correctamente) 


### Ver los Usuarios Registrados con una Petición GET en Postman

1. Abre Postman.
2. Crea una nueva solicitud.
3. Selecciona el método `GET`.
4. Introduce la URL `http://localhost:10000/api/user/all`.
5. Haz clic en "Send".
6. Deberías recibir una respuesta con una lista de usuarios registrados en formato JSON.
