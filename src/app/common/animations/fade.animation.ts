import { trigger, transition, style, animate } from "@angular/animations";

export const fade = trigger("fade", [
  transition(":enter", [
    style({ /* backgroundColor: "yellow", */ opacity: 0 }),
    animate(1000)
  ]),
  transition(":leave", [animate(2000, style({ opacity: 0 }))])
]);

export const slide = trigger("slide", [
  transition(":enter", [style({ left: "-100%" }), animate(1000)]),
  transition(":leave", [animate("0.5s ease-out", style({ left: "-100%" }))])
]);
