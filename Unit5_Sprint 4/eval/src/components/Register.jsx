import React , {useState} from 'react'

export const Register = ({setIsRegister}) => {

    const [formData , setFormData] = useState({});
  
    const handelData = (e) => {
      let {name , value} = e.currentTarget ;

      setFormData(
          {...formData , [name]:value }
        );
        
    }

    const handelSignUp = (formData)=>{
        fetch("http://localhost:3000/signupData",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setIsRegister(true);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <form>
            <label>Full_Nmae :</label>
            <input type="text" placeholder='+ Full Name' value={formData.name} name="name" onChange ={handelData}/><br/>
            <label>Email :</label>
            <input type="email" placeholder='+ Email' value={formData.email} name="email" onChange ={handelData}/><br/>
            <label>Password :</label>
            <input type="password" placeholder="+ Password" value={formData.password} name="password" onChange ={handelData}/>
        </form>
        <button onClick={()=> handelSignUp(formData)} >Sign Up</button>
    </div>
  )
}
