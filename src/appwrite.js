// src/appwrite.js
import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Your project ID

const databases = new Databases(client);

export { client, databases };
