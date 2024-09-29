export const css = `/* infinite-carousel - css */
#css-infinite-carousel {
    --speed: 60s;
    --gap: 1em;
    --play-state: running;
    --dir: normal;
    --radius: 4px;
    --pad: 0px;
    --grid-border: 1px;
    display: flex;
    overflow: hidden;
}

#css-infinite-carousel .ticker {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 0;
    gap: var(--gap);
    min-width: 100%;
    animation: slide var(--speed) linear infinite;
    animation-play-state: var(--play-state);
    animation-direction: var(--dir);
    padding-right: calc(var(--gap) + (var(--grid-border) * 2));
}

#css-infinite-carousel .ticker img {
    border: var(--grid-border) solid #ddd;
    flex-shrink: 0;
    border-radius: var(--radius);
    padding: var(--pad);
    transition: all 0.3s linear;
}

@keyframes slide {
    form {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.controller:has(#radius:checked) ~ #css-infinite-carousel {
    --radius: 100%;
    --pad: 10px;
}

.controller:has(#pause:checked) ~ #css-infinite-carousel {
    --play-state: paused;
}

.controller:has(#reverse:checked) ~ #css-infinite-carousel {
    --dir: reverse;
}

.controller:has(#normal:checked) ~ #css-infinite-carousel {
    --speed: 60s;
}

.controller:has(#slow:checked) ~ #css-infinite-carousel {
    --speed: 120s;
}
.controller:has(#medium:checked) ~ #css-infinite-carousel {
    --speed: 30s;
}

.controller:has(#fast:checked) ~ #css-infinite-carousel {
    --speed: 5s;
}
`