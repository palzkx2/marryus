import React from 'react';
import './Footer.css'
import instagram from '../s_images/instagram.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <p style={{color:'#fff', fontWeight:'bold', fontSize:'32px', marginTop:'36px'}}>Sinbuya</p>
                <p style={{color:'#fff', fontSize:'9pt'}}>신부야</p>
                <p style={{color:'gray', fontSize:'9pt', marginTop:'16px'}}>(주)케이앤엠코퍼레이션</p>
                <p style={{color:'gray', fontSize:'9pt',}}>대표이사 XXX</p>
                <p style={{color:'gray', fontSize:'9pt',}}>COPYRIGHT 2018 SINBUYA ALL RIGHTS RESERVED.</p>
            </div>

            <div style={{paddingLeft:'20px', paddingTop:'30px', marginLeft:'80px'}}>
                <p style={{marginTop:'20px'}}>
                    <img src={instagram} alt='instargram' width={22} height={22}></img>
                    <img src={instagram} alt='instargram' width={22} height={22} style={{paddingLeft:'15px'}}></img>
                    <img src={instagram} alt='instargram' width={22} height={22} style={{paddingLeft:'15px'}}></img>
                    <img src={instagram} alt='instargram' width={22} height={22} style={{paddingLeft:'15px'}}></img>
                    <img src={instagram} alt='instargram' width={22} height={22} style={{paddingLeft:'15px'}}></img>
                    <img src={instagram} alt='instargram' width={22} height={22} style={{paddingLeft:'15px'}}></img>
                </p>
                <p style={{paddingTop:'15px', color:'white', fontSize:'9pt'}}>Infomation</p>
                <p style={{color:'gray', fontSize:'9pt', marginTop:'16px'}}>사업자등록번호 789 88 00488</p>
                <p style={{color:'gray', fontSize:'9pt'}}>통신판매업신고 제2017-서울강남-03227호</p>
                <p style={{color:'gray', fontSize:'9pt'}}>개인정보관리책임자 <strong>XXX</strong></p>
            </div>

            <div style={{marginLeft:'100px'}}>
                <div style={{flexDirection:'row', display:'flex', fontSize:'10pt', color:'white', paddingTop:'30px', marginTop:'20px'}}>
                    <p>회사소개</p>
                    <p style={{paddingLeft:'40px'}}>이용약관</p>
                    <p style={{paddingLeft:'40px'}}>개인정보처리방침</p>
                    <p style={{paddingLeft:'40px'}}>오시는 길</p>
                </div>
                <p style={{paddingTop:'15px', color:'white', fontSize:'9pt'}}>Contact Us</p>
                <p style={{color:'gray', fontSize:'9pt', marginTop:'16px'}}>오전 10:00 - 오후 07:00 (화요일-토요일)</p>
                <p style={{color:'gray', fontSize:'9pt'}}><strong>T</strong> 02 3444 6061&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<strong>F</strong> 02 3444 6062</p>
                <p style={{color:'gray', fontSize:'9pt'}}>서울특별시 강남구 논현동 102-24 금농빌딩 2층 신부야</p>
            </div>
        </div>
    );
};

export default Footer;