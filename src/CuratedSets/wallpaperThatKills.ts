// note: creating imageURL key & value with getter
// https://www.programiz.com/javascript/getter-setter

const awsURLCurated = 'https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/'
const setName = "wallpaperThatKills/"


const wallpaperThatKills = {
  setName: "wallpaper that kills",
  machineName:"wallpaperThatKills",
  images:[
    {
      id: '18797535',
      title: "Sample Book, Decor Photowalls, 1975",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "https://images.collection.cooperhewitt.org/296081_1746631c1ea4afff_b.jpg",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
        {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    },
    {
      id: '',
      title: "",
      url: "https://collection.cooperhewitt.org/users/snphillips/shoebox/132628927/",
      originalImageURL: "",
      get imageURL() {
        return awsURLCurated + setName + this.id + ".jpg"
      }
    }]
  }


export default wallpaperThatKills
