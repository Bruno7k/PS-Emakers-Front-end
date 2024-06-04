import React, { useState, useEffect } from 'react';

import tela from '../../imagens/capa-god-of-war.png';
import horizon from '../../imagens/capa-horizon.png';
import days from '../../imagens/capa-days-gone.png';
import Imagens from '../../components/imagens/imagensCampos'
import bloodborne from '../../imagens/capa-bloodborne.png'
import ds2 from '../../imagens/ds2.png'
import ds1 from '../../imagens/ds1.png'
import dmc from '../../imagens/dmc.png'
import elden from '../../imagens/elden.png'
import tew from '../../imagens/tew.png'
import got from '../../imagens/got.png'
import cls from '../../imagens/cls.png'
import mnc from '../../imagens/mnc.png'
import otl2 from '../../imagens/otl2.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth <= 1035;
    const isTablet = windowWidth > 1035 && windowWidth < 1435;

    const paginationConfig = isMobile || isTablet
    ? {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    }
    : {
        clickable: true,
        renderBullet: function (index, className) {
            if (index >= 4) { // Limitar a quantidade de bullets
                return '';
            }
            return '<span class="' + className + '">' +'</span>';
        },
    };
    return (
        <Swiper
            cssMode={true}
            spaceBetween={1}
            slidesPerView={1}
            slidesPerGroup={1}
            keyboard={{
                enabled: true,
            }}
            pagination={paginationConfig}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
        >
        {isMobile ? (
                <>
                    <SwiperSlide>
                        <Imagens tipo='tipo3' imagem={days} desconto="-15%" preco="R$ 169,90"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo3' imagem={horizon} desconto="-25%" preco="R$ 149,99"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo3' imagem={bloodborne} desconto="-10%" preco='R$ 139,90'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo3' imagem={ds2} desconto="-15%" preco='R$ 159,80'/>
                    </SwiperSlide>
                </>
            ) : isTablet ? (
                <>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={tela} desconto="-40%" preco="R$ 119,95"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={ds1} desconto="-40%" preco="R$ 99,90"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={tew} desconto="-30%" preco="R$ 189,90"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={got} desconto="-10%" preco="R$ 249,90"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={otl2} desconto="-85%" preco='R$ 8,54'/>
                    </SwiperSlide>
                </>
            ) : (
                <>
                    <SwiperSlide>
                        <Imagens tipo='tipo3' imagem={days} desconto="-15%" preco="R$ 169,90"/>
                        <Imagens tipo='tipo3' imagem={horizon} desconto="-25%" preco="R$ 149,99"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={tela} desconto="-40%" preco="R$ 119,95"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={ds1} desconto="-40%" preco="R$ 99,90"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo3' imagem={bloodborne} desconto="-10%" preco='R$ 139,90'/>
                        <Imagens tipo='tipo3' imagem={ds2} desconto="-15%" preco='R$ 159,80'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo3' imagem={dmc} desconto='-50%' preco="R$ 50,00"/>
                        <Imagens tipo='tipo3' imagem={elden} desconto='-5%' preco="R$ 399,89"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={tew} desconto="-30%" preco="R$ 189,90"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo2' imagem={got} desconto="-10%" preco="R$ 249,90"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Imagens tipo='tipo3' imagem={cls} desconto="-5%" preco='R$ 179,90'/>
                        <Imagens tipo='tipo3' imagem={mnc} desconto="-15%" preco='R$ 139,90'/>
                    </SwiperSlide>
                </>
            )}
        </Swiper>
    );
}
