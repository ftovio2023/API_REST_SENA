# API_REST_SENA

# API de Autenticación

Esta es una API REST simple para el registro e inicio de sesión de usuarios utilizando Node.js, Express y MongoDB.

## Requisitos

- Node.js
- MongoDB Atlas (o una instancia de MongoDB local)

## Instalación

### Descargar el Proyecto desde GitHub

1. Clona el repositorio:

   ```sh
   git clone <url_del_repositorio>
   cd rest_api
   ```

### Instalar las Dependencias

2. Instala las dependencias:

   ```sh
   npm install
   ```

### Configurar la Base de Datos

3. Crea un archivo `.env` en la raíz del proyecto y añade tu URI de MongoDB:

   ```
   MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/test?retryWrites=true&w=majority
   ```

### Poner en Marcha el Servidor

4. Inicia el servidor:

   ```sh
   npm start
   ```

5. El servidor estará corriendo en `http://localhost:10000`.

### Ver los Usuarios Registrados con una Petición GET en Postman

1. Abre Postman.
2. Crea una nueva solicitud.
3. Selecciona el método `GET`.
4. Introduce la URL `http://localhost:10000/api/user/all`.
5. Haz clic en "Send".
6. Deberías recibir una respuesta con una lista de usuarios registrados en formato JSON.
