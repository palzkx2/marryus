import React from 'react';
import sdmImg from '../s_images/sdmImage.jpg'

const SdmArticle = () => {
    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                <div style={{width:'1400px', height:'350px', display:'flex', justifyContent:'center', alignContent:'center', backgroundImage:`url(${sdmImg})`, backgroundSize:'cover', backgroundPosition:`center calc(100% + 300px)`}}>
                    <p style={{marginTop:'140px', fontSize:'32pt', fontWeight:'bold', color:'#F8D3D3', textShadow:'2px 2px 2px rgba(0,0,0, 0.5)'}}>♥ 스/드/메 ♥</p>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                <div style={{width:'1400px', height:'800px', display:'flex', justifyContent:'start', alignContent:'start'}}>
                    <div style={{width:'900px', height:'550px', margin:'70px', marginRight:'15px'}}>
                        <img src={sdmImg} alt='' style={{width:'900px', height:'550px'}}/>
                    </div>
                    <div style={{width:'350px', height:'480px', margin:'70px', marginLeft:'15px'}}>
                        <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                            <div style={{marginTop:'25px'}}>
                                <p style={{fontSize:'20pt'}}>Marry Us</p>
                            </div>
                        </div>

                        <hr/>

                        <div style={{display:'flex', justifyContent:'start', alignContent:'start'}}>
                            <div style={{marginLeft:'20px'}}>
                                <p style={{fontSize:'14pt', marginTop:'15px'}}>- 상세정보</p>
                                <p style={{color:'gray'}}>아름다운 사랑의 감정을 느낄 수 있습니다.</p>
                            </div>
                        </div>

                        <div style={{display:'flex', justifyContent:'start', alignContent:'start'}}>
                            <div style={{marginTop:'15px', border:'1px solid black', width:'350px', height:'350px'}}>
                                지도
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'-160px'}}>
                <div style={{width:'1260px', height:'500px'}}>
                    <div style={{background:'green', width:'900px', height:'100px'}}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SdmArticle;