import React from "react";
import loadable from "utils/loadable";
import { PlaceHolderMediaCard } from "./MediaCard";

export default loadable(() => import("./MediaCard"), {
  fallback: <PlaceHolderMediaCard />
});
