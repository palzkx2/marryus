import React, { useState } from 'react';
import loginImg from '../s_images/loginImage.jpg'
import { FaHeart } from "react-icons/fa6";
import './signup.css'

const Join = () => {

    const [joinHover,setJoinHover] = useState(false)

    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                <div style={{width:'1400px', height:'350px', display:'flex', justifyContent:'center', alignContent:'center', backgroundImage:`url(${loginImg})`, backgroundSize:'cover', backgroundPosition:`center calc(100% - -130px)`}}>
                    <p style={{marginTop:'140px', fontSize:'32pt', fontWeight:'bold', color:'pink', textShadow:'2px 2px 2px rgba(0,0,0, 0.5)'}}>♥ 회원가입 ♥</p>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                <div style={{width:'1400px', height:'700px', background:'#FFF0F5'}}>
                    <h2 style={{padding:'50px 70px 0px 70px'}}>내 정보 입력</h2>
                    <div style={{width:'1250px', height:'50px', background:'white', margin:'0 70px 0 70px'}}>
                        <p>아이디</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'30px'}}>
                        <button className='signUpHover' style={{width:'150px', height:'70px', fontSize:'16pt', fontWeight:'bold', background:'#5DC060', border:'none', cursor:'pointer', borderRadius:'5px'}}
                        onMouseEnter={() => setJoinHover(true)} onMouseLeave={() => setJoinHover(false)}>
                            <FaHeart style={{marginRight:'10px'}}/>
                            {
                                joinHover ? 'Yes!' : 'Marry?'
                            }
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Join;