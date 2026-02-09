const request = require("supertest");
const app = require("../index");
describe("Pruebas sobre la API de proveedor", () => {
  
  test("GET /api/proveedores: Obtiene la lista de proveedores", async () => {
    const res = await request(app).get("/api/proveedores");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.datos)).toBe(true);
  });
  test("GET /api/proveedores/id: Comprobar la existencia de un dato.", async () => {
    const res = await request(app)
      .get("/api/proveedores/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.datos).toHaveProperty("id_proveedor", 1);
  });
  test("GET /api/proveedores/id: Comprobar la inexistencia de un dato.", async () => {
    const res = await request(app)
      .get("/api/proveedores/-1");
    expect(res.statusCode).toBe(404);
  });
});