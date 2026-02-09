const request = require("supertest");
const app = require("../index");
describe("Pruebas sobre la API de empresa", () => {
  
  test("GET /api/empresas: Obtiene la lista de empresas", async () => {
    const res = await request(app).get("/api/empresas");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.datos)).toBe(true);
  });
  test("GET /api/empresas/id: Comprobar la existencia de un dato.", async () => {
    const res = await request(app)
      .get("/api/empresas/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.datos).toHaveProperty("id_empresa",1);
  });
  test("GET /api/empresas/id: Comprobar la existencia de un dato.", async () => {
    const res = await request(app)
      .get("/api/empresas/-1");
    expect(res.statusCode).toBe(404);
  });
});