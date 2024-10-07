import React, { useEffect, useState } from 'react';
import './navBar.css'

const NavBar = () => {

    const [windowScroll, setWindowScroll] = useState(0);

    useEffect(() => {
        function scrollView() {
            setWindowScroll(window.scrollY)
        }
        
        window.addEventListener('scroll', scrollView);
        return () => window.removeEventListener('scroll', scrollView);
    }, [])

    useEffect(() => {

        if(windowScroll >= 200){
            document.querySelector('.topNav').classList.add('ModalOpen');
            document.querySelector('.topNav').classList.remove('ModalClose');
        } else {
            document.querySelector('.topNav').classList.add('ModalClose');
            document.querySelector('.topNav').classList.remove('ModalOpen');
        }

    }, [windowScroll])

    return (
        <div>

            <nav className="topNav">
                
            </nav>

            <div style={{justifyContent:'center', alignContent:'center', display:'flex', margin:'30px 0'}}>
                <div className='login' style={{display:'flex', flexDirection:'row'}}>
                    <p>로그인</p>
                    <p style={{paddingLeft:'50px'}}>회원가입</p>
                    <p style={{paddingLeft:'50px'}}>마이페이지</p>
                    <strong style={{margin:'0 300px', fontSize:'36pt'}}>Marry Us</strong>
                    <input type='text' placeholder='검색 할 내용을 입력하세요.' style={{height:'20px', margin:'16px 0', width:'292px', fontSize:'10pt'}}/>
                </div>
            </div>
            <hr style={{width:'100%'}}/>
            <div style={{justifyContent:'center', alignContent:'center', display:'flex', marginTop:'10px'}}>
                <div className='category' style={{display:'flex', flexDirection:'row'}}>
                    <p>전체메뉴</p>
                    <p>웨딩홀</p>
                    <p>스드메</p>
                    <p>혼수컬렉션</p>
                    <p>신혼여행지</p>
                </div>
                <div style={{margin:'0 440px'}}></div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <p>홈으로</p>
                    <p style={{paddingLeft:'20px', marginRight:'21px'}}>고객센터</p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;