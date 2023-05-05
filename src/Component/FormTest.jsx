import React, { useState } from 'react'


function FormTest() {
    const [register,setregister]=useState({
        name:"",
        email:"",
        Quantity:"",
        description:"",
    })
    const[rec,setrec]=useState([])
  const[err,seterr]=useState(false)
  const[email,setemail]=useState(false)
  const[des,setdes]=useState(false)

 const handelinput=(e)=>{
    // const name=e.target.name;
    // const value=e.target.value;
    const {name, value} = e.target
    if(register.name.length<3 || register.name.length>15)
    {
seterr(true)
    }
    else{
        seterr(false)
    }
        if (!register.email.match(emailregex)) {
          setemail(true);
        } else {
          setemail(false);
        }
        if(register.description.length > 50)
        {
        setdes(true)
        }
        else{
            setdes(false)
        }
    
    console.log(name,value);
 setregister({...register ,[name]:value});
 }
 const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const handlesumit=(e)=>{
    e.preventDefault(); 
    const newrecod={...register, id: new Date().getTime().toString()}
    console.log(rec)

    setrec([...rec,newrecod])
    console.log(rec)
    setregister({name:"",email:"",Quantity:"",description:""})
    // if(register.password!==register.Password){
    //     alert("password and confirm password must be same")
    // }
    // else{
    //     props.register(register)
    // }
}
const handleDelete = (id) => {
    setrec(rec.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const editedTodo = rec.find((item) => item.id === id);
    const newRec = rec.filter((item) => item.id !== id);
    setregister({
      name: editedTodo.name,
      email: editedTodo.email,
      description: editedTodo.description,
      Quantity: editedTodo.Quantity,
    });
    setrec(newRec);
  };
  


  return (
    <div>
    <div className='Auth-Name-Container'>
    <h2>Category </h2>
    <form className='Register-from' onSubmit={handlesumit}>
    <label htmlFor="name">Name</label>
     <input value={register.name} autoComplete='off' onChange={handelinput} type="text" name='name' id ="name" placeholder='Name'  required/>
    <br />
    {
        err? <span>The mim Name length 2 && Max name length 15</span>:""
    }
     <label htmlFor="email">Email</label>
   <input value={register.email}  autoComplete='off'onChange={handelinput} type="email" typeof='email'name='email' id ="email" placeholder='youremail@gmail.com' required />
  <br />
   { email? <span> Please enter a valid email address</span>:""}
   <label htmlFor="Quantity">Quantity</label>
   <input value={register.Quantity}  autoComplete='off'onChange={handelinput} type="Quantity" typeof='Quantity'name='Quantity' id ="Quantity" placeholder='Quantity' required/>
   <label htmlFor="description">Description</label>
   
   <input value={register.description}  autoComplete='off'onChange={handelinput} type="text" placeholder='description' name='description' id="description"  required/>
   <br />
   { des? <span> canot be enter 50+ chr</span>:""}
   <button type='submit' className="btn-primary" disabled={err || email ||des || !register.name || !register.email ||!register.Quantity || !register.description}>
  Submit
</button>

   </form>
   {/* <button className="btn-link"  onClick={()=>props.onFromSwitch("login")}>Already have a  account Register here?</button> */}

</div>
<ul class="list-group mt-4">
        {rec.length > 0 ? (
          rec.map((item) => {
            return (
              <>
                <li class="list-group-item border-bottom d-flex justify-content-between align-items-center">
                  <div>{item.name}</div>
                  <div>{item.email}</div>
                  <div>{item.description}</div>
                  <div>{item.Quantity}</div>

                  <div>
                    <button
                      className="btn btn-info mx-1"
                      onClick={() => handleEdit(item.id)}
                    >
                      <i className="fa-solid fa-pen text-white">Edit</i>
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleDelete(item.id)}
                    >
                 <i className="fa-duotone fa-trash">Delete</i>
                    </button>
                
                  </div>
                </li>
              </>
            );
          })
        ) : (
          <li class="list-group-item border-bottom d-flex justify-content-center align-items-center">
            <span className="text-danger fw-bold"> No Record</span>
          </li>
        )}
      </ul>
</div>



  )
}

export default FormTest
