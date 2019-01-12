const Generation = require('./index');
const GenerationTable = require('./table');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.timer);
  }

  get currentGeneration() {
    return this.generationId;
  }

  buildNewGeneration(id = 1) {
    const generation = new Generation();

    GenerationTable.storeGeneration(generation)
      .then(({ generationId }) => {
        this.generation = generation;
        this.generation.generationId = generationId;

        this.timer = setTimeout(
          () => this.buildNewGeneration(generationId),
          this.generation.expiration.getTime() - Date.now()
        );

      })
      .catch(error => console.log(error));


  }
}

module.exports = GenerationEngine;
