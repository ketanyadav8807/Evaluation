import React , {useState , useEffect} from 'react'

export const Dashboard = () => {

    const [name, setName] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/signupData")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setName(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    

  return (
    <div>
        <div>Dashboard</div>
        
    </div>
  )
}
