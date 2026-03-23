import axios from 'axios';

const client = axios.create({
    baseURL: '/api/v1', // Proxy configured in vite.config.ts
    headers: {
        'Content-Type': 'application/json',
    },
});

export default client;
