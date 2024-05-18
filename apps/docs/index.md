---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Calisto"
  text: "Next-Generation UI Library"
  tagline: An advanced UI-Kit designed for web applications.
  actions:
    - theme: brand
      text: See Components
      link: /recipes/button
    - theme: alt
      text: Quick Start
      link: /guides/installation
  image:
    src: /preview.png
    alt: Calisto

features:
  - title: Fully free and open source
    icon: 🕊️
    details: All Calisto packages are available under the MIT license and can be used in any project.
  - title: Type Safety
    icon: 🏗️
    details: A TypeScript-powered library.
  - title: DX
    icon: 📝
    details: Take advantage of a flexible DX, without any discomfort.
---

<style>
:root {
  --vp-home-hero-image-background-image: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
  --vp-home-hero-image-filter: blur(45px);

  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(to right bottom,#fff 30%,hsla(0,0%,100%,.5));
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>