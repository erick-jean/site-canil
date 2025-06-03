import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();
  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      image: "allanimals.jpg",
    },
    list
  });
};
export const dogs = (req: Request, res: Response) => {
let list = Pet.getFromType("dog");
  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      image: "banner_dog.jpg",
    },
    list
  });
};
export const cats = (req: Request, res: Response) => {
let list = Pet.getFromType("cat");
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      image: "banner_cat.jpg",
    },
    list
  });
};
export const fishes = (req: Request, res: Response) => {
let list = Pet.getFromType("fish");
  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      image: "banner_fish.jpg",
    },
    list
  });
};
