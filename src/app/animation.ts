import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate
} from "@angular/animations";

export const slideInAmination = trigger("routeAnimation", [
  transition("students <=> student", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({ position: "absolute", left: 0, right: 0, width: "100%" })
    ]),
    query(
      ":enter",
      style({
        left: "-100%"
      })
    ),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);
