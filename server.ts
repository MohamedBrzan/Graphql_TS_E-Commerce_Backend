import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import MongoDb from './Database/MongoDb';
import mongoose from 'mongoose';
import StartApolloServer from './Apollo/StartApolloServer';
import I18nTranslations from './I18n/I18nTranslations';

mongoose.set('strictQuery', false);

dotenv.config();

const app = express();

app.use(cors<cors.CorsRequest>());
app.use(I18nTranslations);
app.use(cookieParser());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: false }));

MongoDb();

StartApolloServer();
