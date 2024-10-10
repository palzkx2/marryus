import React from 'react';
import img1 from '../s_images/weddingHall/1.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Bar from './mypage/Bar';

const WeddingHallArticle = () => {
    return (
        <div className='alignGood'>
            <div className='mainContainere'>
                <Bar/>
                <div className='artiImgConBox'>
                    <div style={{display:'flex'}}>
                        <img style={{width:'600px',padding:'20px 10px 0px 23px',borderRadius:'3%'}} src={img1}/>
                        <div>
                            <div className='artiSub'>이름</div>
                            <div className='artiSub'>평점</div>
                            <div className='artiSub'>위치</div>
                            <div className='artiSub'>태그</div>
                            <div className='artiSub'>가격</div>
                            <div className='conBox'>
                            <Link to='/myPage'><p className='byeBtn'>견적 내기</p></Link>
                            <Link to='#'><p className='byeBtn'>장바구니</p></Link>
                    </div>
                        </div>
                        
                    </div>
                    <div style={{display:'flex',paddingLeft:'23px'}}>
                        <img className='artiImage' src={img1}/>
                        <img className='artiImage' src={img1}/>
                        <img className='artiImage' src={img1}/>
                        <img className='artiImage' src={img1}/>
                        <img className='artiImage' src={img1}/>
                        <img className='artiImage' src={img1}/>
                    </div>
                </div>

                <div>
                    오우오우 싸발적이고
                </div>
            </div>
        </div>
    );
};

export default WeddingHallArticle;