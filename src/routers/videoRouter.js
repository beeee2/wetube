import express from "express";
import { watch, getEdit, postEdit, deleteVedio, upload, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVedio);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;      