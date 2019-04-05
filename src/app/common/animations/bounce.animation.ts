import { trigger, transition, keyframes, animation, style, animate, useAnimation } from "@angular/animations";

export const bounceOutLeftAnimation = animation(
    animate("0.5s ease-in", keyframes([
        style({
            offset: 0.2, opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1, opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
);

export const bounceInRightAnimation = animation(
    animate("0.5s ease-out", keyframes([
        style({
            offset: 0.2, opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1, opacity: 1,
            transform: 'translateX(0)'
        })
    ]))
);
export const bounceInLeftAnimation = animation(
    animate("0.5s ease-out", keyframes([
        style({
            offset: 0.2, opacity: 1,
            transform: 'translateX(-20px)'
        }),
        style({
            offset: 1, opacity: 1,
            transform: 'translateX(0)'
        })
    ]))
);
export const bounceOutRightAnimation = animation(
    animate("0.5s ease-in", keyframes([
        style({
            offset: 0.2, opacity: 1,
            transform: 'translateX(-20px)'
        }),
        style({
            offset: 1, opacity: 0,
            transform: 'translateX(100%)'
        })
    ]))
);

/* Enter */
export const bounceInLeftTrigger = trigger('bounceInLeft', [
    transition(":enter", [
        useAnimation(bounceInLeftAnimation)
    ])
]);

export const bounceInRightTrigger = trigger('bounceInRight', [
    transition(":enter", [
        useAnimation(bounceInRightAnimation)
    ]),
    transition(":leave", [
        useAnimation(bounceOutLeftAnimation)
    ])
]);

/* Exit */
export const bounceOutLeftTrigger = trigger('bounceOutLeft', [
    transition(":leave", [
        useAnimation(bounceOutLeftAnimation)
    ])
]);

export const bounceOutRightTrigger = trigger('bounceOutRight', [
    transition(":leave", [
        useAnimation(bounceOutRightAnimation)
    ])
]);