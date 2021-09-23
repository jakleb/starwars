import { ChangeEvent, MouseEvent } from "react";

export interface QueryPeople {
    allPeople: People;
}
export interface People {
    people: Person[];
}

export interface Person {
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: number;
    mass: number;
    skinColor: string;
    homeworld: any;
    _tech_films: Films;
    species: Species;
    id: string;
  }

  export interface HomeWorld{
    name?: string;
    diameter: number;
    gravity: string;
    population: number;
  }

  export interface Species{
    name: string;
    language: string;
  }

  export interface Films{
    films:Film[];
  }

  export interface Film{
    title: string;
    description: string;
  }
  

  export interface FieldDetail {
      caption: string;
      value: string;
  }

  export interface UrlMatch {
      match: { params: { pageid: string; personid: string } };
  }

  export enum ButtonKind {
    success = "custom-success-btn",
    error = "custom-error-btn",
    warning = "custom-warning-btn",
    primary = "custom-primary-btn"
  }

  export interface ButtonProps {
    caption: string;
    click: (e: MouseEvent<HTMLButtonElement>) => void;
    kind: ButtonKind;
  }

  export interface PageChangeType{
    selected: number
  }

  export interface ISearchContext {
    value: string;
    onSearchTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }


