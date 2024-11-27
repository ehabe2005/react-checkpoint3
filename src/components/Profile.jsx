import { useState } from "react";

function Profile (){
const Person ={
    fullName:"Ihab",
    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imgSrc:"https://media.istockphoto.com/id/544676786/it/foto/casablanca-moschea.webp?a=1&b=1&s=612x612&w=0&k=20&c=l9z_YnwybyZPBV6wOyBOTVcG4-xQViqXRyK64vEsaCE=",
    profession:"Software developer",
}
const [show, setShow]=useState(false)


/*prevShow is the current value (true, false), the toggleProfile function is used to alternate it for each click*/
const toggleProfile = () => { 
    setShow((prevShow) => !prevShow);
   
}
/* If show is true, the text on the botton will be "hide profile"*/ 
return ( 
    <div className="profile-container">
      <button onClick={toggleProfile}>
        {show ? "hide profile" : "show profile"}
      </button>

     {/* If show is true, then this block of code is rendered.*/}
      {show && ( 
        <div className="profile">
          <h2>{Person.fullName}</h2>
          <p>{Person.bio}</p>
          <img src={Person.imgSrc} alt={Person.fullName} />
          <p>{Person.profession}</p>
        </div>
      )}
    </div>
  );
}
export default  Profile
   

