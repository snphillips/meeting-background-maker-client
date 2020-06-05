  removeBlacklistedImages() {

    let preSelectedImagesArray = this.state.preSelectedImages
    console.log("remove blacklisted items from collection", preSelectedImagesArray)


    preSelectedImagesArray.forEach( (object) => {
      console.log("object.id to check against blacklist:", object.id)

      blacklist.forEach( (item) => {

        console.log("item.blacklist for: ", item.filterTerm, item.blacklistId)

        if (item.blacklistId == object.id) {
          console.log("same. kick out!")
          _Lodash.remove(preSelectedImagesArray, object)
        }
      });

    this.setState({preSelectedImages: preSelectedImagesArray})
    });
  }