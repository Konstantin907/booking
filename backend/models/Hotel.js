//in models all schemas for MongoDB:
import mongoose from 'mongoose'
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    imgSrc: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String], //ovo znaci da je array
        ref: "Room"
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
});


export default mongoose.model('Hotel', HotelSchema)
//nakon ovoga ides u routes/hotels.js