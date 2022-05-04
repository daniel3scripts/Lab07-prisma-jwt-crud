import { Router } from "express";

import * as controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(controller.index);
testRouter.route("/post_user").post(controller.storage);
testRouter.route("/update_user/:id").put(controller.update);
testRouter.route("/delete_user/:id").delete(controller.destroy);


export default testRouter;