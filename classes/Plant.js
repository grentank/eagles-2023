class Plant {
  constructor(options) {
    this.name = options?.name || 'any plant';
    this.height = options?.height ?? 1;
  }

  photosynthesize() {
    return `${this.name} is photosynthesizing!`;
  }

  static getPlantType(plant) {
    return Object.getPrototypeOf(plant).constructor.name;
  }
}

module.exports = Plant;
