import request from "supertest";
import { app } from "../src/app";

///method get
describe("Lista de users", () => {
    test("Metohod get", async() => {
        const result = await request(app).get("/user");

        expect(result.status).toBe(200);
        expect(result.ok).toBe(true);

    });
});

///method post
describe("Creacion de users", () => {
    test("Method post", async() => {
        const body = {
            name: "Jefry",
            email: "foquita_10delacalle@gmail.com",
            phone: "919999993",
        };
        const result = await request(app).post("/user/post_user").send(body);

        expect(result.status).toBe(201);
        expect(result.ok).toBe(true);

    });
});