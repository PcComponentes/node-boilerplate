import { Router } from "express";

export const router = Router();

router.get("/hello-world", (req, res) => {
  res.send({ text: "hello world" });
});
