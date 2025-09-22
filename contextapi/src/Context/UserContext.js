import {createContext} from "react";

const UserContext = createContext();

export default UserContext;




//context  provider deta hai,har ek context ek provider hota hai,and context ko global varible ki tarah use kar sakte hai.
//jitne bhi component hote jinko hum wrap krte hai <usercontext></usercontext/> ke aandar vo sare component us context ko access kr sakte hai.
//like this- 
//<UserContext>
//ye components hai jo hum usercontext ke aandar rakhege
//<Login />
//<Home />
//<Profile />
//<About />
//<Dashboard />
//ye sare component usercontext ke aandar hone ki wajah se ye sare component usercontext ko access kar sakte hai.


//</UserContext>