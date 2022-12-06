import express from "express";
import dotenv from "dotenv";

class Server {
  public app: express.Application;

  constructor() {
    dotenv.config();
    this.app = express();
    this.app.set("PORT", process.env.PORT);
    this.serverInitialization();
  }

  /**
   * Initialization of Server on Port :3000
   */
  public serverInitialization() {
    const PORT = this.app.get("PORT");
    this.app.listen(PORT, () => {
      console.log(`Sever connected on Port ${PORT}`);
    });
  }
}

export default Server;
