export interface curatedBackgroundImageType {
  id: string; 
  imageURL: string; 
  originalImageURL: string; 
  title: string;
  url: string; 
}

export interface curatedSetsType {
  images: curatedBackgroundImageType[];
  machineName: string;
  setName: string;
}