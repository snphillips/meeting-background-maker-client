// note: creating imageURL key & value with getter
// https://www.programiz.com/javascript/getter-setter

const awsURLCurated =
  'https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/';
const setName = 'cocktailHour/';

const cocktailHour = {
  setName: 'cocktail hour',
  machineName: 'cocktailHour',
  images: [
    {
      id: '18458571',
      title: 'Chromolithograph Print, Advertising poster for a bottled beverage, ca. 1898;',
      url: 'https://collection.cooperhewitt.org/objects/18458571/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/188354_daec815eadbecf40_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18641495',
      title: 'Drawing, Design for Signpost, after 1934; Designed by William Hunt',
      url: 'https://collection.cooperhewitt.org/objects/18641495/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/330952_6b82523990799cc0_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '907130443',
      title: 'Cocktail Set, 1928',
      url: 'https://collection.cooperhewitt.org/objects/907130443/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/325194_7ba84f2e7fc8ac1b_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18420481',
      title: 'Sidewall, Salud, 1950–58',
      url: 'https://collection.cooperhewitt.org/objects/18420481/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/89286_40904f6909ab33bc_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18486705',
      title: 'Drawing, Design for Carpet: Guitars and Cocktail Glasses for Radio City Music Hall',
      url: 'https://collection.cooperhewitt.org/objects/18486705/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/39571_f51cbee0bcf81169_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18680713',
      title: 'Drawing, Design for Corner Serving Table, 1900–05',
      url: 'https://collection.cooperhewitt.org/objects/18680713/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/155203_a42ace55852a053a_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18606935',
      title: "SIDEWALL - SAMPLE, PAIR O'DICE CLUB, 1946–1947",
      url: 'https://collection.cooperhewitt.org/objects/18606935/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/48840_d6c6f3959b1afbc9_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
  ],
};

export default cocktailHour;
