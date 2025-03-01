// src/appwrite.js

import { Client, Account, Databases } from 'appwrite';

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

// Replace with your Appwrite endpoint and project ID
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);                    

export { client, account, databases };
