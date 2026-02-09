const express = require("express");
const path = require("path");
const cors = require("cors");

const empresaRoutes = require("./routes/empresaRoutes");
const proveedorRoutes = require("./routes/proveedorRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api/empresas", empresaRoutes);
app.use("/api/proveedores", proveedorRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log("Servidor activo en el puerto ", port);
  });
}
module.exports = app;
