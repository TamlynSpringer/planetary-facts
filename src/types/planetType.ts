export enum Planet {
  MERCURY = 'mercury',
  VENUS = 'venus',
  EARTH = 'earth',
  MARS = 'mars',
  JUPITER = 'jupiter',
  SATURN = 'saturn',
  URANUS = 'uranus',
  NEPTUNE = 'neptune',
};

export enum Wiki {
  overview = 'overview',
  structure = 'structure',
  geology = 'geology',
};

export interface WikiInfo {
  content: string;
  source: string;
};

export interface PlanetData {
  geology: WikiInfo;
  images: { overview: string; structure: string; geology: string };
  name: string;
  overview: WikiInfo;
  radius: string;
  revolution: string;
  rotation: string;
  structure: WikiInfo;
  temperature: string;
};