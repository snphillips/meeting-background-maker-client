
skinnyGottaGo() {
  let preSelectedImages = this.state.preSelectedImages
  console.log("3) BEFORE skinnyGottaGo() preSelectedImages are:", preSelectedImages, preSelectedImages.length)
  preSelectedImages.forEach( (item) => {

     let imageUrl = item.images[0].b.url

    Jimp.read(imageUrl, (err, meetingBackground) => {
      if (err) throw err;

      let width = meetingBackground.bitmap.width
      let height = meetingBackground.bitmap.height


      if ( (height > width) && ((height / width) > 2) ) {
        console.log("4)", item.id, "SKINNY PORTRAIT, REMOVE!")
        let newArray = _Lodash.without(this.state.preSelectedImages, item)
        this.setState({preSelectedImages: newArray}, () => {
          console.log("5) AFTER skinnyGottaGo() preSelectedImages are:", this.state.preSelectedImages, this.state.preSelectedImages.length)
        })
      }
      else if ( (width > height) && ((width / height) > 2) ) {
        console.log("4)", item.id, "SKINNY LANDSCAPE, REMOVE!")
        let newArray = _Lodash.without(this.state.preSelectedImages, item)
        this.setState({preSelectedImages: newArray}, () => {
          console.log("5) AFTER skinnyGottaGo() preSelectedImages are:", this.state.preSelectedImages, this.state.preSelectedImages.length)
        })
      }
      else {
        console.log("4)", item.id, "Not skinny. It can stay.")
      }
    })
  })

}
