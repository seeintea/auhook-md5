class Suika {
  #appName: string;

  constructor() {
    this.#appName = "Suika";
  }

  getAppName(): string {
    return this.#appName;
  }

  setAppName(appName: string): void {
    this.#appName = appName;
  }
}

export default Suika;
