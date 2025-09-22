# 🦋 Backend MongoDB - Mariposas de Oceanía  

## 📖 Descripción del Proyecto  
Este backend forma parte de un proyecto colaborativo de **5 integrantes**, donde desarrollamos una API con MongoDB Atlas para complementar el **frontend** creado por otras compañeras de nuestro curso

La aplicación permite:  
- 🔍 Consultar información detallada de mariposas oceánicas  
- 📊 Gestionar datos a través de MongoDB Atlas (cloud)  
- 🌐 API REST completa con operaciones CRUD  
- 🔒 Validaciones robustas de datos  

---

## 🗂️ Estructura del Proyecto  

```

Backend/
┣ controllers/ # Lógica de controladores
┣ database/ # Configuración MongoDB Atlas
┣ models/ # Modelos Mongoose
┣ node_modules/ # Dependencias del proyecto
┣ routes/ # Definición de rutas API
┣ server/ # Configuración del servidor
┃ ┗ scripts/ # Scripts de base de datos
┃ ┣ seedDatabase.js # Script de inicialización
┃ ┗ butterflies-data.json # Datos de mariposas
┣ test/ # Tests unitarios
┣ validations/ # Validaciones de entrada
┣ .env # Variables de entorno (crear)
┣ .env.keys # Ejemplo de claves de entorno
┣ .gitignore # Archivos ignorados por Git
┣ app.js # Configuración principal
┣ package-lock.json # Lock de dependencias
┗ package.json # Dependencias y scripts

Frontend/
┣ dist/ # Archivos compilados
┣ node_modules/ # Dependencias frontend
┣ public/ # Archivos públicos estáticos
┣ server/ # Configuración servidor frontend
┣ src/ # Código fuente React
┣ .gitignore # Archivos ignorados
┣ eslint.config.js # Configuración ESLint
┣ index.html # HTML principal
┣ package-lock.json # Lock de dependencias
┣ package.json # Dependencias frontend
┣ README.md # Documentación frontend
┗ vite.config.js # Configuración Vite

```
---
## 🚀 Instalación y Configuración  

### 1. Clonar el repositorio  
```bash
git clone https://github.com/tu-usuario/mariposas-oceania-mongodb.git
cd mariposas-oceania-mongodb
```
### 2. Instalar dependencias del backend
```bash
cd Backend
npm install
```

### 3. Configurar MongoDB Atlas

1. Crear cuenta en MongoDB Atlas

2. Crear un cluster 

3. Configurar acceso a la base de datos (usuario y contraseña)

4. Configurar acceso de red (Allow Access from Anywhere 0.0.0.0/0 para desarrollo)

5. Obtener la connection string desde el cluster

### 4. Configurar variables de entorno

Crear un archivo .env en Backend/ usando .env.keys como referencia:

```env
# Configuración del servidor
PORT=5000
NODE_ENV=development

# Configuración MongoDB Atlas
MONGODB_URI=mongodb+srv://<username>:<password>@butterflies-cluster.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
DB_NAME=butterflies_app
```

⚠️ Reemplaza <username>, <password> y <dbname> con tus datos reales.

### 5. Inicializar la base de datos con datos
```bash
npm run seed
```

### 6. Ejecutar el servidor

```bash
npm run dev
```

Servidor disponible en http://localhost:8000

### 7. Instalar y ejecutar el frontend
```bash
cd ../Frontend
npm install
npm run dev
```

Frontend disponible en http://localhost:5173

--- 
# 🛠️ Tecnologías Utilizadas
## Backend

⚡ Node.js - Entorno de ejecución

🚀 Express.js - Framework web

🍃 MongoDB Atlas - Base de datos NoSQL en la nube

🛠️ Mongoose - ODM para MongoDB

🔒 bcryptjs - Encriptación de contraseñas

✅ express-validator - Validación de datos

🌐 cors - Manejo de CORS

🔧 dotenv - Variables de entorno

🧪 jest - Testing framework

## Frontend (compañeras de equipo)

⚛️ React.js - Librería UI

🎨 CSS/SCSS - Estilos

📦 Vite - Build tool

🌐 Axios - Cliente HTTP

--- 

### 📚 Endpoints de la API
### Mariposas

GET /api/butterflies → Obtener todas las mariposas

GET /api/butterflies/:id → Obtener mariposa por ID

POST /api/butterflies → Crear nueva mariposa

PUT /api/butterflies/:id → Actualizar mariposa

DELETE /api/butterflies/:id → Eliminar mariposa

---
### 🗄️ Estructura de Datos (MongoDB)

Colección: butterflies

```json
{
  "_id": "ObjectId",
  "name": "Mariposa Monarca",
  "scientificName": "Danaus plexippus",
  "habitat": "Jardines, campos abiertos",
  "description": "Una mariposa migratoria famosa...",
  "wingspan": "8.9-10.2 cm",
  "conservationStatus": "Preocupación menor",
  "imageUrl": "https://example.com/monarch.jpg",
  "region": "Oceanía",
  "colors": ["naranja", "negro", "blanco"],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

---

### 📝 Scripts Disponibles

npm run dev → Servidor en modo desarrollo con nodemon

npm run seed → Inicializar BD con datos de mariposas

npm run test → Ejecutar tests

---

### 🌟 Características Técnicas

✅ API RESTful completa con MongoDB Atlas

🔒 Validaciones robustas con express-validator

🔄 Manejo de errores centralizado

🧪 Tests unitarios con Jest

🚀 Preparado para producción

---
### 👩‍💻 Equipo de Desarrollo (5 integrantes)

Este backend fue desarrollado en equipo dentro del bootcamp, complementando el trabajo frontend realizado por nuestras compañeras:

👤 Esther Tapias

👤 Luisa Silva

👤 Irina Tiron
 
👤 Priscelis Codrington

👤 Rocio Coronel 
