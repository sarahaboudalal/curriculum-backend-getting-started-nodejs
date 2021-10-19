const request = require("supertest");
const server = require("../app");
const expect = require("chai").expect;

describe("GET /", () => {
    it("responds with correct text", (done) => {
        request(server)
            .get("/")
            .expect("Content-Type", "text/plain")
            .expect(200, (req, res) => {
                expect(res.text).to.be.equal("Welcome to Re:Coded's Backend Bootcamp!");
            });
            done();
    });
});

describe("GET /practice", () => {
    it("responds with correct text", (done) => {
        request(server)
            .get("/practice")
            .expect("Content-Type", "text/plain")
            .expect(200,(req, res) => {
                expect(res.text).to.be.equal("Practice is done!");
            });
            done();
    });
});