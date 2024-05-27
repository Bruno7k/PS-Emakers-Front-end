import React from 'react';

import tela from '../../imagens/capa-god-of-war.png';
import horizon from '../../imagens/capa-horizon.png';
import days from '../../imagens/capa-days-gone.png';
import Imagens1 from '../../components/imagens/imagensCampos1';
import Imagens from '../../components/imagens/imagensCampos2';
import bloodborne from '../../imagens/capa-bloodborne.png'
import ds2 from '../../imagens/ds2.png'
import ds1 from '../../imagens/ds1.png'
import dmc from '../../imagens/dmc.png'
import elden from '../../imagens/elden.png'
import tew from '../../imagens/tew.png'
import got from '../../imagens/got.png'
import cls from '../../imagens/cls.png'
import mnc from '../../imagens/mnc.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <Swiper
            cssMode={true}
            spaceBetween={1}
            slidesPerView={1}
            slidesPerGroup={1}
            keyboard={{
                enabled: true,
            }}
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                    if (index >= 4) { // Limitar a quantidade de bullets
                        return '';
                    }
                    return '<span class="' + className + '">' +'</span>';
                },
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className>
                <Imagens imagem={days} desconto="-15%" preco="R$ 169,90"/>
                <Imagens imagem={horizon} desconto="-25%" preco="R$ 149,99"/>
            </SwiperSlide>
            <SwiperSlide className>
                <Imagens1 imagem={tela} desconto="-40%" preco="R$ 119,95"/>
            </SwiperSlide>
            <SwiperSlide>
                <Imagens1 imagem={ds1} desconto="-40%" preco="R$ 99,90"/>
            </SwiperSlide>
            <SwiperSlide>
                <Imagens imagem={bloodborne} desconto="-10%" preco='R$ 139,90'/>
                <Imagens imagem={ds2} desconto="-15%" preco='R$ 159,80'/>
            </SwiperSlide>
            <SwiperSlide>
                <Imagens imagem={dmc} desconto='-50%' preco="R$ 50,00"/>
                <Imagens imagem={elden} desconto='-5%' preco="R$ 399,89"/>
            </SwiperSlide>
            <SwiperSlide>
                <Imagens1 imagem={tew} desconto="-30%" preco="R$ 189,90"/>
            </SwiperSlide>
            <SwiperSlide>
                <Imagens1 imagem={got} desconto="-10%" preco="R$ 249,90"/>
            </SwiperSlide>
            <SwiperSlide>
                <Imagens imagem={cls} desconto="-5%" preco='R$ 179,90'/>
                <Imagens imagem={mnc} desconto="-15%" preco='R$ 139,90'/>
            </SwiperSlide>
        </Swiper>
    );
}
