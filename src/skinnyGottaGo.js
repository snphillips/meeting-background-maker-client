        skinnyGottaGo() {

          let preSelectedImages = this.state.preSelectedImages
            // console.log("snake jazz", preSelectedImages )

          preSelectedImages.forEach( (object) => {

            let imageUrl = object.images[0].b.url

            Jimp.read(imageUrl, (err, meetingBackground) => {
              if (err) throw err;

              let width = meetingBackground.bitmap.width
              let height = meetingBackground.bitmap.height
              console.log(object.id, "width: ", width, "height: ", height)

              console.log("snek", object.images[0].b.url)

              if ( (height > width) && ((height / width) > 2.5) ) {
                _Lodash.remove(this.state.preSelectedImages, object)
                console.log("2)", object.id, "Skinny PORTRAIT, REMOVE!")
              }
              else if ( (width > height) && ((width / height) > 2.5) ) {
                _Lodash.remove(this.state.preSelectedImages, object)
                console.log("2)", object.id, "Skinny LANDSCAPE, REMOVE!")
              }
              else {
                console.log("2)", object.id, "Not skinny. It can stay.")
              }
            })

          })
      }