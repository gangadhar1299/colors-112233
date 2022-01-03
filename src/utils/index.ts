import { Color } from "..";
import { Car } from "../types/Car";
import { Person } from "../types/Person";
import { name } from "faker";

export function getCar(): Car {
  return {
    color: "red",
    fuel: "petrol",
    milage: 37.99,
    model: "Ferrari",
    price: 1222122.99,
    year: 2013,
  };
}

export function getColor(): Color {
  return { red: 123, green: 201, blue: 100 };
}

export function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

export function getPerson(): Person {
  return {
    name: name.firstName(),
    age: getRandomNumber(100),
    gender: ["Male", "Female"][getRandomNumber(1)],
  };
}
