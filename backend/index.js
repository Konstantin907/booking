<<<<<<< HEAD
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import bookingsRoute from './routes/bookings.js'
import propertyRoute from './routes/property.js'
import cookieParser from 'cookie-parser'
=======
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import reviewsRoute from './routes/review.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
>>>>>>> 961ca77e82629da6d22b4f8c3a997133192454df

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', 
        credentials: true
    }
});

// Database Connection
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    throw err;
});

<<<<<<< HEAD
//middlewares:
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
=======
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected!');
});
>>>>>>> 961ca77e82629da6d22b4f8c3a997133192454df

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected!');
});

<<<<<<< HEAD
app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)
app.use('/api/property', propertyRoute)
=======
// Middlewares
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
>>>>>>> 961ca77e82629da6d22b4f8c3a997133192454df

// Routes
app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/reviews', reviewsRoute);

// Socket.io Chat Logic
io.on('connection', (socket) => {
    console.log('User connected', socket.id);

    socket.on('send_message', (data) => {
        io.emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
