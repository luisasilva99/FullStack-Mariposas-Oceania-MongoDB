import mongoose from 'mongoose';

const butterflySchema = new mongoose.Schema({
    // nombre común de la mariposa - Obligatorio
    commonName: {
        type: String,
        required: true
    },
    
    // nombre científico - Obligatorio y único
    scientificName: {
        type: String,
        required: true,
        unique: true
    },
    
    // Familia - Obligatorio
    family: {
        type: String,
        required: true
    },
    
    // región de la mariposa - Obligatorio
    region: {
        type: String,
        required: true
    },
    
    // Localización específica
    specificLocation: {
        type: String,
        default: null
    },
    
    // Hábitat de la mariposa
    habitat: {
        type: String,
        default: null
    },
    
    // Tamaño de la ala de la mariposa
    wingspan: {
        type: Number,
        default: null
    },
    
    // Unidad de medida de la ala
    wingspanUnit: {
        type: String,
        default: null
    },
    
    // descripción de la mariposa
    description: {
        type: String,
        default: null
    },
    
    // estado de conservación de la mariposa
    conservationStatus: {
        type: String,
        default: null
    },
    
    // Nivel de preocupación - Obligatorio
    threatLevel: {
        type: String,
        required: true
    },
    
    // cantidad actual de la mariposa
    population: {
        type: String,
        default: null
    },
    
    // Temporada de vuelo (array de 6 datos)
    flightSeason: {
        type: [String],
        default: []
    },
    
    // Plantas hospederas (array de datos)
    hostPlants: {
        type: [String],
        default: []
    },
    
    // Fuentes de néctar (array de 3 datos)
    nectarSources: {
        type: [String],
        default: []
    },
    
    // Comportamiento de la mariposa
    behavior: {
        type: String,
        default: null
    },
    
    // Coordenadas
    coordinates: {
        latitude: {
            type: Number,
            default: 0
        },
        longitude: {
            type: Number,
            default: 0
        }
    },
    
    // Color primario
    colorPrimary: {
        type: String,
        default: null
    },
    
    // Tags (array de 4 datos)
    tags: {
        type: [String],
        default: []
    },
    
    // ID público para Cloudinary
    publicId: {
        type: String,
        default: null
    }
}, {
    timestamps: false // Para mantener consistencia con tu modelo anterior
});

// Crear el modelo
const ButterflyModel = mongoose.model('Butterfly', butterflySchema);

export default ButterflyModel;
ButterflyModel.js
