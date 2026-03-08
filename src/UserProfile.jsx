export const UserProfile = ({name,isOnline}) => {
   if (isOnline) {
    return (
      <div>
        <h1>{name}</h1>
        <p style={{color:"green"}}>Online</p>
      </div>
    )
   } else {
    return (
      <div>
        <h1>{name}</h1>
        <p style={{color:"red"}}>Offline</p>
      </div>
    )
   }
};