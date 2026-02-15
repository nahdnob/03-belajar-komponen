export function getImageUrl(imageId: string, size: string = 's') { 
  return ( 
    'https://i.imgur.com/' + imageId + size + '.jpg' 
  ); 
} 
export function getImageUrlV2(imageId: string, size: string = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
} 