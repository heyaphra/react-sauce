const express = require("express");

const { healthcheck } = require("../controllers");

class Routing {
  constructor(app) {
    this.app = app;
  }

  /** Set up middleware */
  configure() {
    const { app } = this;
    app.use(express.json());
    app.use(express.raw());
    app.use(express.text({ type: "text/*" }));
    app.disable("x-powered-by");
    // To do: Use Winston as logging middleware
    //   app.use((req, res, next) => {
    //     next();
    //   });
  }

  /** Initialize routes */
  init() {
    const { app } = this;
    app.get("/api/v1/status", (req, res) => healthcheck(req, res));
  }
}

module.exports = async ({ app }) => {
  const routing = new Routing(app);
  routing.configure();
  routing.init();
};
