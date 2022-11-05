import React,{useState} from 'react'
import styled from 'styled-components'
import {db} from '../Base'
import { addDoc, Timestamp, collection} from 'firebase/firestore'
import {Link} from 'react-router-dom'

const SentWishes = () => {
  const [name, setName] = useState(" ")
  const [quote, setQuote] = useState(" ")

  const useRef = collection(db, "birthday")  

  
  const postName = async()=>{
    await addDoc(useRef, {
      name,
      quote,
      time:Timestamp.now().toDate(),
    })
    
    .then(()=>{
  
      console.log('summited')
    })
    .catch((err)=>{
      console.log(err)
    })
    setName(""); 
    setQuote("")
    // reset("")
  }



  return (
   <>
    <Con>
        <Wrap>
            <Card>
              <Text>Make A Wish</Text>
              <input type='text' placeholder='Input Your Name' required onChange={(e)=>{
                setName(e.target.value)
              }}/>
              <TextArea placeholder='Say a prayer for the celebrant' required onChange={(e)=>{
                setQuote(e.target.value)}}></TextArea>

<Linkr to='/'> <button onClick={(() => {
               postName();
           })}>Send</button></Linkr>
            </Card> 
        </Wrap>
    </Con>
   </>
  )
}

export default SentWishes
const Text = styled.div`
font-family: poppins;
margin-bottom: 10px;
font-size: 20px;
`

const Input1 = styled.input`
width:80%;
margin-top: 20px;
outline: none;
padding-left: 5px;
font-size: 500;
height: 45px;
border-radius: 5px;
padding-right: 5px;
border: 2px solid  #E6B938;
::placeholder{
  color:black;
}
`
const Input = styled.textarea`
width:80%;
margin-top: 20px;
outline: none;
padding-left: 5px;
font-size: 500;
height: 45px;
border: 2px solid  #E6B938;
border-radius: 5px;
padding-right: 5px;
::placeholder{
  color:black;
}
`

const Con = styled.div`
width: 100%;
display: flex;
justify-content: center;
/* padding-top: 20px;
padding-bottom: 20px; */

`

const Wrap = styled.div`
width:80%;
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
`

const Card = styled.div`
width: 400px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 20px;
flex-direction: column;
display: flex;
align-items: center;

button{
  width:150px;
  background-color: green;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin-top: 20px;
  border:none;
  border-radius: 5px;
  font-family: poppins;
}
input{
  width:80%;
margin-top: 20px;
outline: none;
padding-left: 5px;
font-size: 500;
height: 45px;
border-radius: 5px;
padding-right: 5px;
border: 2px solid  #E6B938;
}

`
const TextArea = styled.textarea`
width:80%;
margin-top: 20px;
outline: none;
padding-left: 5px;
font-size: 500;
height: 45px;
border-radius: 5px;
padding-right: 5px;
border: 2px solid  #E6B938;
color: black;
`
const Linkr = styled(Link)`
  text-decoration: none
`