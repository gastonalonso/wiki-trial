---
title: Maps and projections
description: A map projection flattens the curved Earth onto a plane, and every projection distorts shape, area, distance or direction in some way.
---

A **map projection** is a systematic way of transferring the curved surface of the Earth to a flat map. No projection can do this without distortion, a fact first proved mathematically by Carl Friedrich Gauss, so every flat map is a compromise between preserving shape, area, distance and direction.

![A 1794 wall map of the world drawn in two hemispheres](/wiki-trial/images/maps-and-projections.jpg)

*Photo: [Thomas Kitchin](https://commons.wikimedia.org/wiki/File:1794_Samuel_Dunn_Wall_Map_of_the_World_in_Hemispheres_-_Geographicus_-_World2-dunn-1794.jpg), Public domain, via Wikimedia Commons.*

## How projections work

Imagine a light inside a transparent globe, shining its grid of [latitude and longitude](../latitude-and-longitude/) onto a surface. Projections are often grouped by that surface. A cylinder wrapped around the globe gives cylindrical projections, a cone gives conic ones, and a flat sheet touching one point gives azimuthal ones. Mathematical methods can also produce compromise maps that fit none of these.

Projections are described by what they keep true. A **conformal** map preserves local angles and shapes, an **equal-area** map keeps relative sizes correct, and a compromise map balances several errors.

## Common projections compared

| Projection | Type | Strength | Main distortion |
| --- | --- | --- | --- |
| Mercator | Conformal cylindrical | Straight lines are constant compass bearings, so useful for navigation | Areas swell greatly near the poles; Greenland looks as big as Africa |
| Robinson | Compromise | Looks balanced and familiar for world maps | Distorts shapes near the poles and edges |
| Winkel tripel | Compromise | Low overall distortion of area, direction and distance | Poles are lines, with some shape distortion |
| Gall-Peters | Equal-area cylindrical | Shows true relative sizes of countries | Shapes are stretched, tall near the equator |

The Mercator projection, published in 1569, is still the basis of most web maps, although it exaggerates the size of high-latitude regions such as [Canada](../../world/north-america/canada/) and [Antarctica](../../world/antarctica/). The Winkel tripel has been used by the National Geographic Society for its world maps since 1998.

:::caution[Check what a map keeps true]
Comparing the sizes of countries on a Mercator map is misleading. Africa is about 14 times larger than Greenland, but it does not look it.
:::

## Choosing a projection

Navigators prefer conformal maps, statisticians want equal-area maps, and general wall maps usually use a compromise. For small regions the distortion is negligible, so national mapping agencies pick a projection tuned to their territory. See also [time zones](../time-zones/) for another way of structuring the globe.

## See also

- [Latitude and longitude](../latitude-and-longitude/)
- [Superlatives](../superlatives/)
- [Glossary](../glossary/)
- [Oceans](../../physical/water/oceans/)
