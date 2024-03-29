
// note: creating imageURL key & value with getter
// https://www.programiz.com/javascript/getter-setter

const awsURLCurated = 'https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/'
const setName = "gardenParty/"

const gardenParty = {
  setName: "garden party",
  machineName: "gardenParty",
  images:[
    {
      id: '18633659',
      title: "Textile, Carina; Designed by Jutta Huneke ; Germany; 1990-105-2",
      url: "https://collection.cooperhewitt.org/objects/18633659/",
      originalImageURL: "https://images.collection.cooperhewitt.org/153842_3e4b4a720b5c58e4_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18370265',
      title: "Sidewall, Branching Floral, ca. 1940;",
      url: "https://collection.cooperhewitt.org/objects/18370265/",
      originalImageURL: "https://images.collection.cooperhewitt.org/238779_5f241b9cc2a7f16e_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18419481',
      title: "Drawing, Floral design for printed textiles; Designed by Louis-Albert DuBois (Swiss, 1752–1818);",
      url: "https://collection.cooperhewitt.org/objects/18419481/",
      originalImageURL: "https://images.collection.cooperhewitt.org/118564_b0c09e00ed12555d_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18631587',
      title: "Drawing, Textile Design: Alpenveilchen (Cyclamen); ",
      url: "https://collection.cooperhewitt.org/objects/18631587/",
      originalImageURL: "https://images.collection.cooperhewitt.org/50654_c29f858a086dfb0b_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '136300661',
      title: "Sidewall, Bloom, 2015",
      url: "https://collection.cooperhewitt.org/objects/136300661/",
      originalImageURL: "https://images.collection.cooperhewitt.org/221332_72430cf94a181603_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18452157',
      title: "Sidewall, The True Vine, 1962",
      url: "https://collection.cooperhewitt.org/objects/18452157/",
      originalImageURL: "https://images.collection.cooperhewitt.org/40572_a22da9d8a18d6634_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18670429',
      title: "Drawing, Red Cherries and White Stars on Pink Ground, Wallpaper Design, 1940s",
      url: "https://collection.cooperhewitt.org/objects/18670429/",
      originalImageURL: "https://images.collection.cooperhewitt.org/43567_6f8ac022621f5413_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18685999',
      title: "Sidewall, Asters, 1959–65",
      url: "https://collection.cooperhewitt.org/objects/18685999/",
      originalImageURL: "https://images.collection.cooperhewitt.org/42845_b2c895e55c0eef32_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18210797',
      title: "Drawing, Design for a printed framing, pattern no. 4 of the Fabrique de St. Ruf, 1795–1810",
      url: "https://collection.cooperhewitt.org/objects/18210797/",
      originalImageURL: "https://images.collection.cooperhewitt.org/45839_a58faa0a3e993ed3_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18471351',
      title: 'Sample Book, Justema Wallpatterns, 1968',
      url: "https://collection.cooperhewitt.org/objects/18471351/",
      originalImageURL: "https://images.collection.cooperhewitt.org/283338_92351ffd3e8469cc_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18383471',
      title: "Sidewall - Floral (France), 1904;",
      url: "https://collection.cooperhewitt.org/objects/18383471/",
      originalImageURL: "https://images.collection.cooperhewitt.org/261559_7ec62975277a7e11_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    }
    ]
  }


export default gardenParty
