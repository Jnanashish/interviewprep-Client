import React ,{useState, useEffect} from 'react'

// import css
import "../../CSS/link.css"
import "../../CSS/updateData.css"

// import components
import LinkCard from "../UiComponent/LinkCard"

const UpdateData = () => {
    useEffect(() => {
        getData();
    }, [])
    const deleteData = (id) =>{
        fetch(`https://interviewprep-api.herokuapp.com/delete/${id}`, { method: 'DELETE' })
        .then((res) => 
            getData()
        ) 
        .catch((err) => {
            window.alert(err)
        })        
    }

    const [data, setData] = useState([]);
    const getData = async() =>{
        try {
            const res = await fetch('https://interviewprep-api.herokuapp.com/get', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
             });
             const data = await res.json();  
             setData(data);

        } catch (error) {
              console.log("no");
        }
    }

    return (
        <div>   
                <h2>Total Job is : {data.length}</h2> 
               
               {data.map(item => { 
                return(
                    <div className = "updateData">
                        <LinkCard key={item._id} title = {item.title} position = {item.position} degree = {item.degree} batch = {item.batch} imagePath = {item.imagePath}/>
                        <button onClick={() => deleteData(item._id)} className = "update">Delete</button>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"><button className = "update">Visit Link</button></a>
                        <hr className = "line" />
                    </div>
                )
            })}
        </div>
    )
}

export default UpdateData;