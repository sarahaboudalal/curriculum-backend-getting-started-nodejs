let request = require("supertest");
request = request("http://localhost:3000");

const expect = require("chai").expect;

describe("GET /practice", () => {
    it("responds with correct text", (done) => {
        request
            .get("/practice")
            .expect("Content-Type","text/plain")
            .expect(200,(req,res) => {
                expect(res.text).to.be.equal("Practice is done!");
            })
            done();
    })
})