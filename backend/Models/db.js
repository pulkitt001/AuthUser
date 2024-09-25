const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pulkitpal0001:Ct9MaBrT0CsHFq8Y@cluster0.izhi0.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
