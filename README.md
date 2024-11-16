# Sistema de Reservas de Hotel

Este es un sistema de reservas de hotel donde los usuarios pueden realizar reservas de habitaciones, ver sus reservas existentes y gestionar las fechas de su estancia.

## Tecnologías Utilizadas

- **Frontend**: React.js
- **Backend**: Java 17, Spring Boot, MySQL
- **Base de datos**: MySQL

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener los siguientes requisitos instalados:

### Backend:
- **Java 17** o superior
- **Maven** o **Gradle** para la gestión de dependencias
- **MySQL** para la base de datos

### Frontend:
- **Node.js** (al menos v14)
- **npm** o **yarn** para gestionar las dependencias

## Instrucciones de Instalación

### 1. Backend

#### Clonar el Repositorio del Backend

```bash
git clone https://github.com/tuusuario/hotel-reservas-backend.git
cd hotel-reservas-backend

Configuración de la Base de Datos
Crea una base de datos en MySQL llamada hotel_reservas_db.
Configura la conexión a la base de datos en el archivo src/main/resources/application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/hotel_reservas_db
spring.datasource.username=root
spring.datasource.password=tucontraseña
spring.jpa.hibernate.ddl-auto=update

Ejecutar el Backend
Para iniciar el servidor backend, ejecuta el siguiente comando:

bash
Copiar código

mvn spring-boot:run

sto iniciará el backend en http://localhost:8080.

2. Frontend
Clonar el Repositorio del Frontend

git clone https://github.com/tuusuario/hotel-reservas-frontend.git
cd hotel-reservas-frontend

Instalar Dependencias
Instala las dependencias de Node.js ejecutando:

npm install

npm start

Esto iniciará el frontend en http://localhost:3000.

Rutas del Backend
POST /api/reservas: Registrar una nueva reserva
GET /api/reservas: Obtener todas las reservas
GET /api/reservas/{id}: Obtener una reserva por su ID
PUT /api/reservas/{id}: Actualizar una reserva existente
DELETE /api/reservas/{id}: Eliminar una reserva
Descripción de Funcionalidades
Registro de Reservas
Los usuarios pueden registrar una nueva reserva proporcionando la siguiente información:

Nombre completo
Fecha de ingreso
Fecha de salida
Número de personas
Lista de Reservas
Los usuarios pueden ver todas sus reservas previas, con detalles de cada una (nombre, fecha de ingreso, fecha de salida y número de personas).

Actualización y Cancelación de Reservas
Los usuarios pueden actualizar o cancelar sus reservas a través de la interfaz.

Contribuciones
Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b nueva-funcionalidad).
Realiza tus cambios y haz commit de ellos (git commit -am 'Agrega nueva funcionalidad').
Haz push a la rama (git push origin nueva-funcionalidad).
Crea un Pull Request.
