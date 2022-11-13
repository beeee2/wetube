import Video from "../models/Video";

export const home = (req, res) => {
  return res.render("home", {pageTitle:"Home"});
}
export const watch = (req, res) => {
  const id = req.params.id;
  return res.render("watch", {pageTitle:`Watching `})
}
export const getEdit = (req, res) => {
  const id = req.params.id;
  return res.render("edit", {pageTitle: `Editing:`})
}
export const postEdit = (req, res) => {
  const {id} = req.params;
  const {title} = req.body;
  // console.log(req.body);
  return res.redirect(`/videos/${id}`);
}
export const search = (req, res) => {
  res.send("Search");
}
export const deleteVedio = (req, res) => {
  res.send("Delete Video");
}
export const getUpload = (req, res) => {
  return res.render("upload", {pageTitle:"Upload Video"});
}
export const postUpload = (req, res) => {
  // here we will add a video to the videos array.
  const {title} = req.body;
  return res.redirect("/");
}