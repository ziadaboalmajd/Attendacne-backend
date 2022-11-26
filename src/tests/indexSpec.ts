import supertest from "supertest";

import app from "../index";

import appFile from "../utilities/resize";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

// first
describe("responses from endpoints", (): void => {
  describe("endpoint: /", (): void => {
    it("get /", async (): Promise<void> => {
      const response: supertest.Response = await request.get("/");

      expect(response.status).toBe(404);
    });
  });
});

// second
it("gets /api/resize no params ", async (): Promise<void> => {
  const response: supertest.Response = await request.get("/api/resize");

  expect(response.status).toBe(200);
});

// third
it("/api/resize?filename=test&width=-200&height=200 (invalid params)", async (): Promise<
  void
> => {
  const response: supertest.Response = await request.get(
    "/api/resize/?&filename=test&width=200&height=-200"
  );

  expect(response.status).toBe(200);
});

// fourth
describe("/imageResized (wrong endpoint)", (): void => {
  it("invalid endpoint", async (): Promise<void> => {
    const response: supertest.Response = await request.get("/imageReszie");

    expect(response.status).toBe(404);
  });
});

// fifth
describe("wrong dimensions", (): void => {
  it("size eror (invalid width value)", async (): Promise<void> => {
    const error: null | unknown = await appFile.resizeImage("foo", -100, 500);
    expect(error).not.toBeNull();
  });
});

// sixth
it("filename error (filename does not exist)", async (): Promise<void> => {
  const error: null | unknown = await appFile.resizeImage("foo", 100, 100);
  expect(error).not.toBeNull();
});

// seventh
it("image created ", async (): Promise<void> => {
  const error: null | unknown = await appFile.resizeImage("test", 100, 100);
  expect(error).not.toBeNull();
});

