import { getImageUrlV2 } from '../utils/utils';

type Person = {
  name: string;
  imageId: string;
};

type MyAvatarProps = {
  person: Person;
  size: number;
};
 
function MyAvatar({ person, size }: MyAvatarProps) { 

  const imageSize = size < 90 ? "s" : "b";

  return ( 
    <img 
      className="avatar" 
      src={getImageUrlV2(person.imageId, 'b')} 
      alt={person.name} 
      width={size} 
      height={size} 
    /> 
  ); 
} 
 
export default function MyProfile() {
  return (
    <div>
        <MyAvatar
          size={40}
          person={{
            name: "Gregorio Y. Zara",
            imageId: "7vQD0fP",
          }}
        />
        <MyAvatar
          size={120}
          person={{
            name: "Gregorio Y. Zara",
            imageId: "7vQD0fP",
          }}
        />
    </div>
  );
}