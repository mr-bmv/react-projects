export default class SwapiService {
  _apiBase = "https://swapi.co/api";

  getResource = async url => {
    const response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw new Error(
        `Could NOT fetch ${url}, response has status - ${response.status}`
      );
    }
    return await response.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource("/people/");
    return res.results.map(this._transformPerson);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource("/planets/");
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarShips = async () => {
    const res = await this.getResource("/starships/");
    return res.results.map(this._transformStarShip);
  };

  getStarShip = async id => {
    const starShip = await this.getResource(`/starships/${id}`);
    return this._transformStarShip(starShip);
  };

  _extractId = obj => {
    const indxRegExp = /\/([0-9]*)\/$/; // https://regex101.com/
    const id = obj.url.match(indxRegExp)[1];
    return id;
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      eyeColor: person.eye_color,
      birthYear: person.birth_year,
      gender: person.gender
    };
  };

  _transformStarShip = starShip => {
    return {
      id: this._extractId(starShip),
      name: starShip.name,
      model: starShip.model,
      length: starShip.length,
      maxSpeed: starShip.max_atmosphering_speed,
      crew: starShip.crew,
      cargoCapacity: starShip.cargo_capacity
    };
  };
}
