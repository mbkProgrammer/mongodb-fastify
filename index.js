const posts = require("./model/PostModel");
const mongoose = require("mongoose");
const mongodb = require("./configs/mongoDb");

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// mongoose
//   .connect("mongodb://localhost/mydatabase", { useNewUrlParser: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// Declare a route
fastify.get("/", async (request, reply) => {
  return await posts.find({})
    .then((docs) => {
      console.log(docs);
      return docs;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
});

mongodb.connect()

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
