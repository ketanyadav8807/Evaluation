import React , {useState , useEffect} from 'react'

export const ProductInput = () => {

    const [formData , setFormData] = useState({});
  
    const handelData = (e) => {
      let {name , value} = e.currentTarget ;
     
     console.log(name , value);

      setFormData(
          {...formData , [name]:value }
        );
        
    }
    
    const handelDataSend = () => {
        fetch("http://localhost:3000/prod",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    

    return (

        <div>
            <h1>Add New Products</h1>

            <form>
            <div>
                <label>Title :</label>
                <input value={formData.title} name="title" type="text" placeholder=" + Title ..." 
                onChange={handelData}/>
            </div>
            <div>
                <label>Cost :</label>
                <input value={formData.cost} name="cost" type="number" placeholder=" + Cost ..." 
                onChange={handelData}
                />
            </div>
            <div>
                <label>Image :</label>
                <input value={formData.image} name="image" type="url" placeholder=" + Image Url ..."
                onChange ={handelData}
                />
            </div>
            <div>
                <label>Category :</label>
                <select value={formData.category} name="category" onChange={handelData}>
                    <option>Choose Category</option>
                    <option>Vegetable</option>
                    <option>Fruits</option>
                    <option>Provisions</option>
                </select>
            </div>
            </form>

            <button onClick={handelDataSend}>Send Data</button>
        </div>

    );
}
