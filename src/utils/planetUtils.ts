import { Planet, PlanetData, Wiki } from "../types/planetType";

const colors: Record<Planet, Record<string, string>> = {
  mercury: { accent: 'bg-mercury-500 border-white/0', nav: 'bg-mercury-600' },
  venus: { accent: 'bg-venus-500 border-white/0', nav: 'bg-venus-600' },
  earth: { accent: 'bg-earth-500 border-white/0', nav: 'bg-earth-600' },
  mars: { accent: 'bg-mars-500 border-white/0', nav: 'bg-mars-600' },
  jupiter: { accent: 'bg-jupiter-500 border-white/0', nav: 'bg-jupiter-600' },
  saturn: { accent: 'bg-saturn-500 border-white/0', nav: 'bg-saturn-600' },
  uranus: { accent: 'bg-uranus-500 border-white/0', nav: 'bg-uranus-600' },
  neptune: { accent: 'bg-neptune-500 border-white/0', nav: 'bg-neptune-600' },
};

const options = Object.values(Planet);
const wikiOptions = Object.values(Wiki);

const getData = async (planet: string) => {
  return fetch(`${window.location.host.includes('localhost') ? '' : '/planets.netlify'}/json/data.json`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data.find((planetData: PlanetData) => planetData.name.toLowerCase() === planet));
};

let image;

const getInternalImage = (wiki: Wiki, planetData?: PlanetData) => {
  if (wiki === Wiki.STRUCTURE) {
    image = planetData?.images.internal;
    return image?.replace('.', '');
  }
};

const getPlanetImage = (wiki: Wiki, planetData?: PlanetData) => {
  if (wiki === Wiki.OVERVIEW) {
    image = planetData?.images.planet
    return image?.replace('.', '');
  }
};

const getSurfaceImage = (wiki: Wiki, planetData?: PlanetData) => {
  if (wiki === Wiki.SURFACE) {
    image = planetData?.images.geology
    return image?.replace('.', '');
  }
};

const getRadius = (planetData?: PlanetData) => {
  const radius = planetData?.radius.match(/\d+/g)?.[0];
  return radius;
};

const getWikiInfo = (wiki: Wiki, planetData?: PlanetData) => {
  if (wiki === Wiki.SURFACE) {
    return planetData?.geology;
  }
  return planetData?.[wiki]
};

export const PlanetUtils = {
  colors,
    getData,
    getPlanetImage,
    getInternalImage,
    getSurfaceImage,
    getRadius,
    getWikiInfo,
    options,
    wikiOptions,
}