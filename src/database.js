
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://143.198.125.132/apiProductos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`Database is connected to ${db.connection.host}`))
  .catch((err) => console.error(err));