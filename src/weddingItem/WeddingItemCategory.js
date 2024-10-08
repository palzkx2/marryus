import React from 'react';
import './weddingItemCategory.css'
import suit from '../s_images/suit.jpg'
import comaMain from '../s_images/comaMain.jpg'
 
const WeddingItemCategory = () => {

    return (
        <div>
            {/* 대표이미지 */}
            <div className='sub_visual'>
                <img src={comaMain} className='bg' style={{border:'2px solid black'}}/>
            </div>

            {/* 혼수 카테고리 */}
            <div className='con_inner'>
                <div className='left_con'>
                    <ul className='coma_tab'>
                        <li className='m1'>
                            <a href='#' style={{textDecoration:'none'}}>
                                <p className='text'>전체</p>
                            </a>
                        </li>

                        <li className='m2'>
                            <a href='#' style={{textDecoration:'none'}}>
                                <p className='text'>예물</p>
                            </a>

                        </li>

                        <li className='m3'>
                            <a href='#' style={{textDecoration:'none'}}>
                                <p className='text'>부케</p>
                            </a>
                        </li>

                        <li className='m4'>
                            <a href='#' style={{textDecoration:'none'}}>
                                <p className='text'>예복</p>
                            </a>
                        </li>
                    </ul>
                    <br/>
                    {/* 상품 리스트 */}
                    <ul className='studio_list'>
                        <li>
                            <a href='#'>
                                <div className='img_box'>
                                    <img src={suit} alt=''/>
                                </div>
                            </a>
                            {/* 상품 소개 */}
                            <div className='info_box'>
                                <table>
                                    <colgroup>
                                        <col style={{width: 'auto'}}/>
                                        <col style={{width:45}}/>
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td className='suit_name'>
                                                <a href='#'>
                                                    <strong>슈트패브릭</strong>
                                                </a><br/>
                                                <em>서울특별시 강남구 테헤란로 123</em>
                                            </td>
                                            <td className='suit_info'>

                                                모던 수트 스타일은 최신 트렌드를 반영한 고급
                                                맞춤 양복을 전문으로 하는 양복점입니다. 고객의
                                                개성과 체형에 맞춰 정교하게 제작된 수트를 제공
                                                합니다. 세련된 디자인과 품질 높은 원단을 사용
                                                하여, 비즈니스 미팅부터 결혼식까지 다양한 행사에
                                                적합한 양복을 만나보실 수 있습니다. 친절한
                                                서비스와 전문적인 상담을 통해 고객의 만족을
                                                최우선으로 생각합니다.

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>

                        <li>
                            <a href='#'>
                                <div className='img_box'>
                                    <img src={suit} alt=''/>
                                </div>
                            </a>
                            {/* 상품 소개 */}
                            <div className='info_box'>설명</div>
                        </li>

                        <li>
                            <a href='#'>
                                <div className='img_box'>
                                    <img src={suit} alt=''/>
                                </div>
                            </a>
                            {/* 상품 소개 */}
                            <div className='info_box'>설명</div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default WeddingItemCategory;