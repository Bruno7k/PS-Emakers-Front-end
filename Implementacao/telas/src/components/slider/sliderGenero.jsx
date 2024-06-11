import React from 'react';
import './sliderGenero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import bob from '../../imagens/bob-sponja.png';
import death from '../../imagens/death-stranding.png';
import deliver from '../../imagens/deliver-mars.png';
import god from '../../imagens/god-of-war.png';
import perish from '../../imagens/perish.png';
import spell from '../../imagens/spell-force.png';
import red from '../../imagens/red.png';
import batman from '../../imagens/batman.png';
import mad from '../../imagens/mad-max.png';
import gta from '../../imagens/gta.png';
import bdl from '../../imagens/borderlands.png';
import qb from '../../imagens/quantum.png';
import ac from '../../imagens/assassins.png';
import lord from '../../imagens/lords.png';
import tomb from '../../imagens/tomb.png'
import tw from '../../imagens/the-witcher.png'
const SliderGenero =({ tipo }) => {
    return (
        <>
            {tipo == 'tipo1' &&(
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        850:{
                            slidesPerView:3,
                            spaceBetween:30,
                        },
                        1220:{
                            slidesPerView:4,
                            spaceBetween:30,
                        },
                        1420:{
                            slidesPerView:5,
                            spaceBetween:20,
                        },
                    }}
                    
                    modules={[Navigation]} 
                    className='swiperGenero'
                >
                    <SwiperSlide className='slideGenero'><img src={red}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={batman}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={mad}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={gta}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={death}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={god}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={perish}/></SwiperSlide>
                </Swiper>
            )}
            {tipo == 'tipo2'&&(
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        850:{
                            slidesPerView:3,
                            spaceBetween:30,
                        },
                        1220:{
                            slidesPerView:4,
                            spaceBetween:30,
                        },
                        1420:{
                            slidesPerView:5,
                            spaceBetween:20,
                        },
                    }}
                    modules={[Navigation]} 
                    className='swiperGenero'
                >
                    <SwiperSlide className='slideGenero'><img src={bdl}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={bob}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={deliver}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={spell}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={qb}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={death}/></SwiperSlide>
                </Swiper>
            )}
            {tipo == 'tipo3'&&(
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        850:{
                            slidesPerView:3,
                            spaceBetween:30,
                        },
                        1220:{
                            slidesPerView:4,
                            spaceBetween:30,
                        },
                        1420:{
                            slidesPerView:5,
                            spaceBetween:20,
                        },
                    }}
                    modules={[Navigation]} 
                    className='swiperGenero'
                >
                    <SwiperSlide className='slideGenero'><img src={gta}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={ac}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={red}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={lord}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={tomb}/></SwiperSlide>
                    <SwiperSlide className='slideGenero'><img src={tw}/></SwiperSlide>
                </Swiper>
            )}
        </>
    )
}
export default SliderGenero;