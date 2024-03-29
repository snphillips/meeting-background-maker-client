
// note: creating imageURL key & value with getter
// https://www.programiz.com/javascript/getter-setter

const awsURLCurated = 'https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/'
const setName = "colorTheory/"

const colorTheory = {
  setName: "color theory",
  machineName: "colorTheory",
  images:[
    {
      id: '1108749935',
      title: "Bookplate, DER FARBKÖRPER (The Color Body), 1927",
      url: "https://collection.cooperhewitt.org/objects/1108749935/",
      originalImageURL: "https://images.collection.cooperhewitt.org/335502_7a5877cde84063e2_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '1108749945',
      title: "Book, Spectrum Analysis, 1869",
      url: "https://collection.cooperhewitt.org/objects/1108749945/",
      originalImageURL: "https://images.collection.cooperhewitt.org/338789_3d7846d2f98bf96e_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18677457',
      title: "Collage, Textile Design: Arabesque, no. 135, May 9, 1954",
      url: "https://collection.cooperhewitt.org/objects/18677457/",
      originalImageURL: "https://images.collection.cooperhewitt.org/183650_ccd688039fc8fec9_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '1108749909',
      title: "Book, Atlas of the Munsell Color System, 1915",
      url: "https://collection.cooperhewitt.org/objects/1108749909/",
      originalImageURL: "https://images.collection.cooperhewitt.org/338583_a6e47433dc6ad9cf_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '1108749955',
      title: "Bookplate, Farbmesstafel (Color Table), 1939",
      url: "https://collection.cooperhewitt.org/objects/1108749955/",
      originalImageURL: "https://images.collection.cooperhewitt.org/337950__b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '1108749985',
      title: "Book, The Color Harmony Manual And How To Use It, 1946",
      url: "https://collection.cooperhewitt.org/objects/1108749985/",
      originalImageURL: "https://images.collection.cooperhewitt.org/337955__b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '1108749927',
      title: "Book, The Theory of Color in itls Relation to art and art industry, 1876",
      url: "https://collection.cooperhewitt.org/objects/1108749927/",
      originalImageURL: "https://images.collection.cooperhewitt.org/337918_62844f95f802b909_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18433055',
      title: "Color Wheel, 1936–37; Hilaire Hiler (1898 – 1966);",
      url: "https://collection.cooperhewitt.org/objects/18433055/",
      originalImageURL: "https://images.collection.cooperhewitt.org/334806_c6c42896d509be27_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18698059',
      title: "Sample Plate (France), ca. 1920s",
      url: "https://collection.cooperhewitt.org/objects/18698059/",
      originalImageURL: "https://images.collection.cooperhewitt.org/331485_c79c2ef420146a93_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18453625',
      title: "Drawing, Color Rhythm, from The Mathematical Basis of the Arts",
      url: "https://collection.cooperhewitt.org/objects/18453625/",
      originalImageURL: "https://images.collection.cooperhewitt.org/329354_53be7266046b4469_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18431747',
      title: "Textile, Spectrum, 1950–55",
      url: "https://collection.cooperhewitt.org/objects/18431747/",
      originalImageURL: "https://images.collection.cooperhewitt.org/50016_e04612cb1b82e4b8_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    }
    ]
  }


export default colorTheory
