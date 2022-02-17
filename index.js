const { parse } = require('csv-parse');
const fs = require('fs');

const habitalPlanet = [];

function isHabitalPlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => {
    if (isHabitalPlanet(data)) {
      habitalPlanet.push(data);
    }
  })
  .on('error', (err) => {
    console.log('ERRR>>>', err);
  })
  .on('end', () => {
    console.log(`${habitalPlanet.length} habital planets!`);
    console.log('WE DONE!!!!');
  })

// parse();