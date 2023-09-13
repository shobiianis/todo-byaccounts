import { userAuth } from "../context/AuthContext";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../config/firebase";
import { doc, getDocs, collection,setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import SignOut from "../component/SignOut";


const Account = () => {
   const [list,setList]=useState([])
   const[text,setText]=useState("")
  
   const { user } = userAuth();
   
 
   const userId=user.uid
  
  
  

 
  const sendData=async()=>{
      const todosRef=collection(db,'todos')
      try{

        await setDoc(doc(todosRef,uuidv4()),{
           text,
           userId,

        })
        }catch(err){
        console.log(err)
      }

      console.log("data sende3d")

    }


    const getData = async () => {
      const todosRef = collection(db, `todos`);
      
      try {
        const todosSnap = await getDocs(todosRef);
        let todos = todosSnap.docs.map((todo) => todo.data());
        todos=todos.filter((eachTodo)=>eachTodo.userId==userId )
          console.log(todos) 
        
        setList(todos)  

      } catch (err) {
        console.log(err);
      }
    };
    
    useEffect(() => {
      getData();
    }, [user]);
  
  return (
    
    <div>
      {user?.displayName}
      <SignOut />

    
     <input type="text" placeholder="write your task" onChange={(e)=>setText(e.target.value)} />
     
      <button onClick={sendData}>Send</button> 
      

  {list.map((item)=>{
    return( <h1>{item.text}</h1> )
  })}



  </div>
  );
};

export default Account;
