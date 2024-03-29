
// note: creating imageURL key & value with getter
// https://www.programiz.com/javascript/getter-setter

const awsURLCurated = 'https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/'
const setName = "kolomanMoser/"

const kolomanMoser = {
  setName: "Koloman Moser",
  machineName: "kolomanMoser",
  images:[
    {
      id: '18670519',
      title: "Print, Tapete Masken (Masks Wallpaper), plate 20, in Die Quelle: Flächen",
      url: "https://collection.cooperhewitt.org/objects/18670519//",
      originalImageURL: "https://images.collection.cooperhewitt.org/.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '18670545',
      title: "Print, Frau Nolda Gewebter Wandbehang (Madame Nolda, Woven Wall Hanging), plate 24, in Die Quelle: Flächen Schmuck (The Source: Ornament for Flat...",
      url: "https://collection.cooperhewitt.org/objects/18670545/",
      originalImageURL: "https://images.collection.cooperhewitt.org/51502_584cf62bd9d976e6_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '18670503',
      title: "Print, Bedruckter Stoff Silvanus (Silvanus Printed Fabric), plate 23, in Die Quelle: Flächen Schmuck (The Source: Ornament for Flat Surfaces), 1901;",
      url: "https://collection.cooperhewitt.org/objects/18670503/",
      originalImageURL: "https://images.collection.cooperhewitt.org/51501_6cf832e47e50246c_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '18670531',
      title: "Print, Die reciproken Tänzerinnen (Reciprocal Dancers), Plate 25, in Die Quelle: Flächen Schmuck (The Source: Ornament for Flat Surfaces), 1901;",
      url: "https://collection.cooperhewitt.org/objects/18670531/",
      originalImageURL: "https://images.collection.cooperhewitt.org/93343_b43b767df6cf24c5_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '18670539',
      title: "PRINT, WANDDECOR DECEMBER (DECEMBER WALL DECORATION), PLATE 27, IN DIE QUELLE: FLÄCHEN SCHMUCK (THE SOURCE: ORNAMENT FOR FLAT SURFACES), 1901",
      url: "https://collection.cooperhewitt.org/objects/18670539/",
      originalImageURL: "https://images.collection.cooperhewitt.org/b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '18670543',
      title: "",
      url: "https://collection.cooperhewitt.org/objects/18670543/",
      originalImageURL: "https://images.collection.cooperhewitt.org/51489_0439e01275eb159a_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '18670493',
      title: "PRINT, MOBELBEZUG ARACHNE (ARACHNE UPHOLSTERY FABRIC), PLATE 18, IN DIE QUELLE: FLÄCHEN SCHMUCK (THE SOURCE: ORNAMENT FOR FLAT SURFACES), 1901",
      url: "https://collection.cooperhewitt.org/objects/18670493/",
      originalImageURL: "https://images.collection.cooperhewitt.org/51496_b2cd0009205b8dee_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '18670529',
      title: "Print, Donauwellen Wanddekor fur ein Badezimmer (Danube Wave Wall Decoration...",
      url: "https://collection.cooperhewitt.org/objects/18670529/",
      originalImageURL: "https://images.collection.cooperhewitt.org/51483_6e1bb300f33d5081_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    }
    ]
  }

  export default kolomanMoser

