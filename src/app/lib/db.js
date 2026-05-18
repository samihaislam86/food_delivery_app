import dns from 'dns';
dns.setServers(['8.8.8.8']);



const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
export const connectionStr = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.jwa0exx.mongodb.net/Food_deliverydb?appName=Cluster0`;