import { AnyARecord } from 'dns';
import { getImageUrl } from '../utils/utils'; 
 
function MyAvatar({ person, size }: any) { 
  return ( 
    <img 
      className="avatar" 
      src={getImageUrl(person.imageId, 'b')} 
      alt={person.name} 
      width={size} 
      height={size} 
    /> 
  ); 
} 
 
export default function MyProfile() {
  return (
    <MyAvatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
} 