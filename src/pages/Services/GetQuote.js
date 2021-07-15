import React,{useState, useEffect} from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import './GetQuote.css'
import {Container, FormLabel, Form, FormControl, FormGroup} from 'react-bootstrap'
require('dotenv').config();
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_a3p6omOmNTYt2qSwgeCVr");


function GetQuote() {

    const [sub, setSub] = useState("NA")
    const [name, setName] = useState("NA")
    const [email, setEmail] = useState("NA")
    const [phone, setPhone]= useState("NA")
    const [time, setTime]= useState("NA")
    const [req, setReq]= useState("NA")

    const changeEmail =(e) =>{
        setEmail(e.target.value)
    }
    const changePhone =(e) =>{
        setPhone(e.target.value)
    }
    const changeName =(e) =>{
        setName(e.target.value)
    }
    const changeTime =(e) =>{
        setTime(e.target.value)
    }
    const changeReq =(e) =>{
        setReq(e.target.value)
    }

    useEffect(()=>{

        setSub(getUrlParams())

    }, [])

    function getUrlParams (){
        const queryString = new URLSearchParams(window.location.search);
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get("service")
    }


    var templateParams = {
        from_req_type: sub,
        from_name: name,
        from_email: email,
        from_phone: phone,
        from_time: time,
        from_requirement: req,

        from_knock_type: "NA",
    };

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    async function testSleep() {
        document.getElementById('result').innerText='Please wait while we send your request to our team.'
        await sleep(3000).then(()=>{
            document.getElementById('result').innerText='Our team have received and acknowledged your request. We shall get back to you soon.Thank you.'
        });
    }
     

    function askQuotation(event) {
        
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
        //console.log(templateParams);
        event.preventDefault();
        testSleep();
    }

    return (
        <>
           <Navbar />

            <Container>
                <h2>Thank you for your interest in our service</h2>
                <h3>Please fill up following form and we shall get back to you with all possible cost-effective solutions.</h3>
                <Form>
                    <FormGroup>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl type='email' id='inputEmail'
                        onChange={changeEmail}
                        placeholder="Please enter your email ID" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl type='text'  id='inputPhone' 
                        onChange={changePhone}
                        placeholder="Please enter your phone#" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl type='text' id='inputName' 
                        onChange={changeName}
                        placeholder="Please enter your full name" />
                    </FormGroup>
                    
                    <FormGroup>
                        <FormLabel>Preferred time of Communication</FormLabel>
                        <FormControl type='time' onChange={changeTime} id='inputKnockTime'  />
                    </FormGroup>
                    
                    <FormGroup>
                        <FormLabel>Tell us what do you need</FormLabel>
                        <FormControl type='text' as='textarea' id='inputRequirement' 
                        onChange={changeReq}  
                        placeholder="Please elaborate the requirement" />
                    </FormGroup>
                    
                    <div className='btnContainer'>
                    <button
                      className='btnQuote'
                      onClick={askQuotation}
                    >
                      Submit
                    </button>
                    </div>
                </Form>
                <h4 style={{textAlign : 'center'}} id='result'>NOTE: All fields are mandatory</h4>
            </Container>

           <Footer /> 
        </>
    )
}

export default GetQuote
