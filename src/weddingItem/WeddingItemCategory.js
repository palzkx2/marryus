import React from 'react';
import './weddingItemCategory.css'

const WeddingItemCategory = () => {
    return (
        <body>
            <div id='wrap'>
                <div id='container'>
                    <div className='sub_visual'>
                        <img src='#' alt className='bg' style={{border:'2px solid black'}}/>
                    </div>

                    <div className='con_inner'>
                        <div className='left_con'>
                            <ul className='honeymoon_tab' style={{display:'flex', border:10}}>
                                <li className='m1'>
                                    <a href='#'>
                                        <span className='hide'>전체</span>
                                    </a>
                                </li>

                                <li className='m2'>
                                    <a href='#'>
                                        <span className='hide'>예물</span>
                                    </a>
                                </li>

                                <li className='m3'>
                                    <a href='#'>
                                        <span className='hide'>부케</span>
                                    </a>
                                </li>

                                <li className='m1'>
                                    <a href='#'>
                                        <span className='hide'>예복</span>
                                    </a>
                                </li>
                            </ul>

                            <ul className='studio_list'>
                                <li>
                                    <a href='#'>
                                        <div className='img_box' style={{border:'2px solid black'}}>
                                            <img src='#' alt='로이스테일러'/>
                                        </div>
                                    </a>

                                    <div className='info_box'></div>
                                </li>

                                <li>
                                    <a href='#'>
                                        <div className='img_box' style={{border:'2px solid black'}}>
                                            <img src='#' alt='슈트패브릭'/>
                                        </div>
                                    </a>

                                    <div className='info_box'></div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default WeddingItemCategory;