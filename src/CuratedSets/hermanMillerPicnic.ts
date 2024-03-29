// note: creating imageURL key & value with getter
// https://www.programiz.com/javascript/getter-setter

const awsURLCurated = 'https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/';
const setName = 'hermanMillerPicnic/';

const hermanMillerPicnic = {
  setName: 'herman miller picnic',
  machineName: 'hermanMillerPicnic',
  images: [
    {
      id: '18617415',
      title: 'Poster, Summer Picnic, 1971',
      url: 'https://collection.cooperhewitt.org/objects/18617415/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/80024_022fd2e74d9d2d00_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18617399',
      title: 'Poster, Summer Picnic, 1976',
      url: 'https://collection.cooperhewitt.org/objects/18617399/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/80018_e92dbc123ee3a473_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18617419',
      title: 'Poster, Herman Miller, Summer Picnic, July 26, 1980, 1980',
      url: 'https://collection.cooperhewitt.org/objects/18617419/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/80026_2799ffb21e8192f6_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18758367',
      title: 'Poster, Herman Miller Summer Picnic, 1982, 1982',
      url: 'https://collection.cooperhewitt.org/objects/18758367/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/44519_9f37394830da3bac_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18758381',
      title: 'POSTER, HERMAN MILLER SUMMER PICNIC, JULY 28, 1984, 1984',
      url: 'https://collection.cooperhewitt.org/objects/18758381/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/44526_9fb441bdf5d95f61_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18758375',
      title: 'Poster, Herman Miller Summer Picnic, July 26, 1986, 1986',
      url: 'https://collection.cooperhewitt.org/objects/18758375/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/44523_03458ddca244b5f3_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18758377',
      title: 'Poster, Herman Miller Summer Picnic, 1985, 1985',
      url: 'https://collection.cooperhewitt.org/objects/18758377/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/44524_61ca6424232817d6_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
    {
      id: '18758369',
      title: 'Poster, Herman Miller Summer Picnic, 1989, 1989',
      url: 'https://collection.cooperhewitt.org/objects/18758369/',
      originalImageURL: 'https://images.collection.cooperhewitt.org/44520_a0adda28cbab8472_b.jpg',
      get imageURL() {
        return awsURLCurated + setName + this.id + '.jpg';
      },
    },
  ],
};

export default hermanMillerPicnic;
