// En app.js se va a instaciar exprees
import express from "express";

import { user, story, auth } from "./componentes";

import { checkToken } from "./auth";

// por ende por ahora esta archivo solo va a exportar app
export const app = express();

app.use(express.json()); //activador para req.body, por post o por put
app.use(express.urlencoded({ extended: true }));

app.use("/user", checkToken, user);
app.use("/story", story);

app.use("/auth", auth);