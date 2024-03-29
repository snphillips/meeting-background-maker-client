// note: creating imageURL key & value with getter
// https://www.programiz.com/javascript/getter-setter

const awsURLCurated = 'https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/'
const setName = "gourmet/"

const gourmet = {
  setName: "gourmet",
  machineName: "gourmet",
  images:[
    {
      id: '18644315',
      title: "Postcard, Restaurant Florent: Time line/ food, 1988",
      url: "https://collection.cooperhewitt.org/objects/18644315/",
      originalImageURL: "https://images.collection.cooperhewitt.org/200236_bad6f56a37daeaa6_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 

    },
    {
      id: '1159162379',
      title: "0907, Living Plates, 2017",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132627611/",
      originalImageURL: "https://images.collection.cooperhewitt.org/334801__b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18645775',
      title: "Poster, Processed Food, ca. 1980;",
      url: "https://collection.cooperhewitt.org/objects/18645775/",
      originalImageURL: "https://images.collection.cooperhewitt.org/324687_2701c76a3093743a_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
        {
      id: '18631737',
      title: "Drawing, Textile Design: Himmelobst (Heavenly Fruit);",
      url: "https://collection.cooperhewitt.org/objects/18631737/",
      originalImageURL: "https://images.collection.cooperhewitt.org/50567_12a9cce4a922aaf8_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18692013',
      title: "Drawing, Button Design: Striped Fruit and Vegetables, 1940–1950;",
      url: "https://collection.cooperhewitt.org/objects/18692013/",
      originalImageURL: "https://images.collection.cooperhewitt.org/238564_2b728074ec184b62_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18645409',
      title: "Sidewall, Petite Panier, 1955–60;",
      url: "https://collection.cooperhewitt.org/objects/18645409/",
      originalImageURL: "https://images.collection.cooperhewitt.org/82613_fc86387f2fa32507_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18392713',
      title: "Sidewall, Garden Baskets, 1950–52;",
      url: "https://collection.cooperhewitt.org/objects/18392713/",
      originalImageURL: "https://images.collection.cooperhewitt.org/60160_9b20ba1642696612_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    },
    {
      id: '18407039',
      title: "Sidewall - Sample, Summer Stock, 1956;",
      url: "https://collection.cooperhewitt.org/objects/18407039/",
      originalImageURL: "https://images.collection.cooperhewitt.org/45243_f5c41b7ef2cc6a25_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      } 
    }
    ]
  }

  export default gourmet

