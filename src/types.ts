export interface CuratedBackgroundImageType {
  id: string; 
  imageURL: string; 
  originalImageURL: string; 
  title: string;
  url: string; 
}

export interface CuratedSetsType {
  images: CuratedBackgroundImageType[];
  machineName: string;
  setName: string;
}

export interface MuseumItemType {
  accession_number: null | string;
  creditline: null | string;
  date: null | string;
  decade: null | string;
  department_id: null | string;
  description: null | string;
  dimensions: null | string;
  dimensions_raw: null | any;
  gallery_text: null | string;
  has_no_known_copyright: null | string;
  id: string;
  images: null | any;
  inscribed: null | string;
  is_loan_object: null | 0 | 1;
  justification: null | string;
  label_text: null | string;
  markings: null | string;
  media_id: null | string;
  medium: null | string;
  on_display: null | string;
  participants: null | any;
  period_id: null | string;
  provenance: null | string;
  signed: null | string;
  title: null | string;
  title_raw: null | string;
  'tms:id': null | string;
  type: null | string;
  type_id: null | string;
  url: null | string;
  videos: null | string;
  'woe:country': null | string;
  'woe:country_id': null | string;
  'woe:country_name': null | string;
  year_acquired: null | string;
  year_end: null | number;
  year_start: null | number;
}

export type FilterTagsType = (
  'African'|
  'abstract'|
  'abstraction'|
  'accessories'|
  'adornment'|
  'advertising'|
  'angular'|
  'animals'|
  'architects'|
  'architecture'|
  'art'|
  'art deco'|
  'art nouveau'|
  'artists'|
  'asymmetry'|
  'bauhaus'|
  'beads'|
  'birds'|
  'black and white'|
  'borders'|
  'bouquets'|
  'buildings'|
  'ceramics'|
  'chair'|
  'chairs'|
  'children'|
  'circles'|
  'circular'|
  'classical'|
  'clients'|
  'clouds'|
  'collapsible'|
  'collectors'|
  'color'|
  'colorful'|
  'columns'|
  'communication'|
  'community'|
  'container'|
  'contrast'|
  'cubism'|
  'curtain'|
  'curved'|
  'curving line'|
  'dance'|
  'decoration'|
  'decorative'|
  'design'|
  'designers'|
  'diamonds'|
  'dining'|
  'display'|
  'domestic'|
  'dots'|
  'drawing'|
  'drinking'|
  'eating'|
  'education'|
  'enamel'|
  'engraving'|
  'entertainment'|
  'event poster'|
  'exhibition'|
  'faces'|
  'fashion'|
  'figure study'|
  'figures'|
  'fish'|
  'floral'|
   'flowers'|
  'foliage'|
  'foliate'|
  'food'|
  'fruit'|
  'furniture'|
  'garden design'|
  'geometric'|
  'gilt'|
  'girls'|
  'glass'|
  'gold'|
  'gradient'|
  'graphic design'|
  'grid'|
  'grotesque'|
  'grotesques'|
  'handle'|
  'home'|
  'innovative'|
  'instruction'|
  'interior'|
  'interior design'|
  'intricate'|
  'jewelry'|
  'kitchen'|
  'lamp'|
  'landscape'|
  'leaves'|
  'leisure'|
  'lighting'|
  'line'|
  'luxury'|
  'men'|
  'metal'|
  'metallic'|
  'metalwork'|
  'mid-century modern'|
  'minimalism'|
  'mobility'|
  'model'|
  'modern'|
  'modernism'|
  'monochrome'|
  'monsters'|
  'movement'|
  'multicolored'|
  'music'|
  'mythology'|
  'nature'|
  'neoclassical'|
  'numbers'|
  'offices'|
  'op art'|
  'organic'|
  'ornament'|
  'overlap'|
  'palm trees'|
  'paper'|
  'pattern'|
  'pattern'|
  'personal'|
  'photography'|
  'plants'|
  'plastic'|
  'playful'|
  'portable'|
  'portrait'|
  'posters'|
  'postmodern'|
  'preparatory'|
  'promotion'|
  'propaganda'|
  'protection'|
  'public'|
  'putti'|
  'recording'|
  'rectangular'|
  'repetition'|
  'reuse'|
  'rounded'|
  'royalty'|
  'science'|
  'scrolls'|
  'sculpture'|
  'seating'|
  'shapes'|
  'sidewall'|
  'sidewall'|
  'silver'|
  'simple'|
  'sketch'|
  'smoking'|
  'smooth'|
  'spirals'|
  'squares'|
  'stars'|
  'storage'|
  'streamlined'|
  'stripes'|
  'study'|
  'stylized'|
  'symmetry'|
  'system'|
  'tableware'|
  'textile'|
  'textile design'|
  'textiles'|
  'texture'|
  'theater'|
  'tool'|
  'traditional'|
  'transportation'|
  'travel'|
  'trees'|
  'triangles'|
  'typography'|
  'utility'|
  'vase'|
  'vases'|
  'vegetal'|
  'vessel'|
  'vessels'|
  'vines'|
  'wall decoration'|
  'wallcovering'|
  'wallpaper'|
  'water'|
  'women'|
  'wood'|
  'writing'
)