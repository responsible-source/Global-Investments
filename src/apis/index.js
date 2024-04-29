import axios from "../axios";


export const login = async(data) => {
    try{
        console.log(data);
        const res = await axios.post("/login", JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        return res.data ;
    }catch(e){
        console.log(e.message)
    }
}


   export const signUp = async(data) => {
     try{
            console.log(data)
        const res = await axios.post('/register',JSON.stringify(data), {
            headers: {
                "Content-Type":"application/json",
                "Accept" : "application/json"
            }
        });
     }
     catch(e){
        console.log(e.message)
     }
   }