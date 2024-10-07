import React, { useState } from 'react';
import './WeddingHall.css'
import { TbMapPinHeart } from "react-icons/tb";
import { GiBookmarklet } from "react-icons/gi";
import { GrCompare } from "react-icons/gr";
import { BsSearchHeart } from "react-icons/bs";
import proData from './proData';
import WeddingHallItem from './WeddingHallItem';




const WeddingHall = () => {

    const [data,setData] = useState(proData)


    return (
        <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>

            {/* 왼쪽 카테고리,검색 */}
            <div className='header'>
                {/* 웨딩홀 */}
                <div>
                    <div className='headerSubject'>웨딩홀</div>
                    <div className='searchBox-container'>
                        <input className='searchBox' type='text' placeholder='웨딩홀 및 태그를 검색해 보세요'/>
                        <div className='searchBoxIcon'>
                            <a href='#'>
                                <BsSearchHeart />
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className='letCategory' style={{borderTop:'3px solid  rgb(231, 103, 178)'}}>
                        전체보기
                        <div className='gt' style={{paddingLeft:'137px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        웨딩홀
                        <div className='gt' style={{paddingLeft:'149px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        호텔
                        <div className='gt' style={{paddingLeft:'161px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        하우스
                        <div className='gt' style={{paddingLeft:'149px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        스몰(100명 이하)
                        <div className='gt' style={{paddingLeft:'93px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        야외 웨딩홀
                        <div className='gt' style={{paddingLeft:'121px'}}>&gt;</div>
                    </div>
                    {/* 웨딩홀 end*/}

                    {/* 지역검색 */}
                    <div style={{marginTop:'20px',position:'sticky',top:'0px'}}>
                    <div style={{position:'sticky',top:'0px'}}>
                        <div className='headerSubject'>지역검색</div>
                        <div className='searchBox-container'>
                            <input className='searchBox' type='text' placeholder='웨딩홀 및 태그를 검색해 보세요'/>
                            <div className='searchBoxIcon'>
                                <a href='#'>
                                    <BsSearchHeart />
                                </a>
                        </div>
                    </div>
                    </div>
                    <div className='letCategory' style={{borderTop:'3px solid  rgb(231, 103, 178)'}}>
                        전체보기
                        <div className='gt' style={{paddingLeft:'137px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        웨딩홀
                        <div className='gt' style={{paddingLeft:'149px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        호텔
                        <div className='gt' style={{paddingLeft:'161px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        하우스
                        <div className='gt' style={{paddingLeft:'149px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        스몰(100명 이하)
                        <div className='gt' style={{paddingLeft:'93px'}}>&gt;</div>
                    </div>
                    <div  className='letCategory'>
                        야외 웨딩홀
                        <div className='gt' style={{paddingLeft:'121px'}}>&gt;</div>
                    </div>
                    </div>
                    {/* 지역검색 end */}
                    
                </div>
                {/* 왼쪽 카테고리,검색 end */}

                

                {/* 헤드라인 */}
                <div className='header' style={{width:'1000px'}}>

                {/* 기능별 (지도,섭외,비교) 카테고리 */}
                <div className='functionByContainer' >
                    {/* 홀 지도 */}
                    <a href='#'>
                        <div className='functionBySection'>
                            <TbMapPinHeart  className='functionByIcon'/>
                            홀 지도
                            <div className='sub'>
                                웨딩홀, 지도로 한눈에!
                            </div>
                        </div>
                    </a>

                    {/* 홀 섭외 */}
                    <a href='#'>
                        <div className='functionBySection'>
                            <GiBookmarklet className='functionByIcon'/>
                            홀 섭외
                            <div className='sub'>
                                웨딩홀 섭외리스트 신청
                            </div>
                        </div>
                    </a>

                    {/* 홀 vs 홀 */}
                    <a href='#'>
                    <div className='functionBySection'>
                        <GrCompare className='functionByIcon'/>
                        홀 vs 홀
                        <div className='sub'>
                            홀 vs 홀
                        </div>
                    </div>
                    </a>
                </div>
            {/*  기능별 카테고리 END */}

            {/* 게시판 */}
                {/* 게시판 헤더 */}
                <div className='header allProductHr' style={{marginTop:'40px'}}/>
                <div style={{display:'flex'}}>
                    <a href='#'>
                        <div className='allProduct'>
                            전체상품
                        </div>
                    </a>
                    <a href='#'>
                        <div className='allProduct'>
                        가격순
                        </div>
                    </a>
                    <a href='#'>
                        <div className='allProduct'>
                        평점순
                        </div>
                    </a>
                    <a href='#'>
                        <div className='allProduct'>
                        거리순
                        </div>
                    </a> 
                        <div className='allProduct' style={{paddingLeft:'100px'}}>
                        총 000개의 상품이 검색되었습니다.
                        </div>                  
                </div>
                <div className='header allProductHr'/>
                {/* 게시판 헤더 */}
                <div style={{all:'initial',display:'flex',flexWrap:'wrap',overflow:'auto'}}>
                    {
                        data.map((item,index)=>

                            <div style={{margin:'10px'}}>
                                <WeddingHallItem key={index} item={item}/>
                                {(index+1)%4===0 &&
                                    <div>
                                        테스트
                                        <br/>
                                    </div>
                                }
                            </div>
                    )
                }
                </div>
            </div>


        </div>
    );
};

export default WeddingHall;