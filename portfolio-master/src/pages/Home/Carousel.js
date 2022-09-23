import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Section from 'components/Section'

import img0 from '../../assets/0/0.jpg';
// import img1 from '../../assets/01.jpg';
import img2 from '../../assets/0/2.jpg';
import img3 from '../../assets/0/3.jpg';
// import img4 from '../../assets/04.jpg';
import img5 from '../../assets/0/5.jpg';
import img6 from '../../assets/0/6.jpg';
import img7 from '../../assets/0/7.jpg';
// import img8 from '../../assets/08.jpg';
import img1 from '../../assets/0/1.jpg';
// import img22 from '../../assets/2.jpg';
// import img33 from '../../assets/3.jpg';
import img4 from '../../assets/0/4.jpg';
// import img55 from '../../assets/5.jpg';
// import img66 from '../../assets/6.jpg';
// import img77 from '../../assets/7.jpg';
import img8 from '../../assets/0/8.jpg';
//
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style,  background: "red" ,width:"10px" }}
//             onClick={onClick}
//         />
//     );
// }
//
// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, background: "green" }}
//             onClick={onClick}
//         />
//     );
// }


export default function SimpleSlider({id, visible, sectionRef}) {
    const titleId = `${id}-title`
    var settings = {
        dots: true,
        infinite: true,
        // lazyLoad: true,
        adaptiveHeight: false,
        draggable: false ,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        className:"cur",
        slidesToShow:1,
        easing:true,
        // arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };
    return (
        <Section
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1}
            className="parkCarousel"
        >
            <div className="container_wrapper">
                <div className="container">
                    <Slider {...settings}>

                        <div>
                            <img src={img0} alt="" className="bottom-border"/>
                            <a>复兴公园（Fuxing Garden）位于上海雁荡路105号，东邻重庆南路，南临复兴中路，西近思南路，北与科学会堂等为界。1995年全园面积为8.89万平方米。复兴公园是上海一座保留法国古典式风格的园林，也是近代上海中西园林文化交融的杰作。融中西式为一体，突出法国规则式造园风格，这里的花坛采用下沉式，时下爱称沉床园，利用地面高差使人们的视点抬高，能更好地俯视花坛整体的效果，为公园的一大特点。</a>
                        </div>

                        <div>
                            <img src={img5} alt="" className="bottom-border"/>
                            <a>黄浦公园（Huangpu park），位于上海市中山东一路28号，占地31亩，绿化面积10.92亩。东濒黄浦江，南邻外滩绿带，西沿中山东一路，北接吴淞江（苏州河）。建成于1868年8月，经过多次改建，用过多个名称：公花园、外国花园、公家花园、大桥公园、外摆渡公园、黄浦滩公园等。公园把上海市人民英雄纪念塔、外滩历史纪念馆等与公园园林景观融为一体，集观光、休闲、教育之功能，是外滩重要景观之一。</a>
                        </div>

                        <div >
                            <img src={img4} alt="" className="bottom-border"/>
                            <a>中山公园（Zhong Shan Park），原名兆丰公园，位于上海市长宁区长宁路780号（近定西路），1914 年英国人兆丰在沪时建立的，是当时上海最负盛名的公园。公园以英国式自然造园风格为主，融中国园林艺术之精华，中西合壁，风格独特，是上海原有景观风格保持最为完整的老公园。获得过“上海市四星级公园”的荣誉称号。中山公园占地面积约20万平方米，全园可分为大小不等的景点约120余处。</a>
                        </div>

                        <div>
                            <img src={img3} alt="" className="bottom-border"/>
                            <a>鲁迅公园（Lu Xun Park），原名虹口公园，位于上海市虹口区四川北路甜爱支路280号，是上海主要历史文化纪念性公园和中国第一个体育公园。园内有国家级文物保护单位——鲁迅墓，上海鲁迅纪念馆，震撼近代史的尹奉吉义举纪念地梅园。有山有水有瀑布，山水之间，堤桥相连，景色优美。总体上保留了英国风景园的特点。上海鲁迅纪念馆内陈列品重点表现了鲁迅在上海10年的社会活动和文化生活。</a>
                        </div>

                        <div>
                            <img src={img1} alt="" className="bottom-border"/>
                            <a>豫园（Yu Garden）位于上海市老城厢的东北部，北靠福佑路，东临安仁街，西南与上海老城隍庙毗邻，是江南古典园林，始建于明代嘉靖、万历年间，占地三十余亩。豫园的绿化布局合理，植物配置得当，层次分明，其特点是古树名木多、大盆景多、摆花多，园内还有穗堂、铁狮子、快楼、得月楼、玉玲珑、积玉水廊、听涛阁、涵碧楼、内园静观大厅、古戏台等亭台楼阁以及假山、池塘等四十余处古代建筑。</a>
                        </div>

                        <div>
                            <img src={img2} alt="" className="bottom-border"/>
                            <a>古猗园（Guyi Garden）位于上海市嘉定区南翔镇，国家AAAA级旅游景点，上海五大古典园林之一。古猗园初名猗园，建于明代嘉靖年间（公元1522—1566年），为时任河南通判闵士籍所建。取《诗卫风淇奥》“绿竹猗猗”为美盛貌，融嵇康《琴赋》“微风余音，靡靡猗猗，余音袅袅”为一炉而得“猗园”名。由明代嘉定竹刻名家朱三松精心设计，有“十亩之园，五亩之宅”的规模。</a>
                        </div>

                        <div>
                            <img src={img6} alt="" className="bottom-border"/>
                            <a>秋霞圃（Qiu Xia Pu）是中国江南著名的古典园林，位于上海嘉定区嘉定镇东大街，东邻秋霞公寓，西毗陆俨少艺术院，南连东大街，北依启良路。秋霞圃是一座具有独特风格的明代园林，由三座私家园林明代龚氏园、沈氏园、金氏园和邑庙（城隍庙）合并而成，全园面积45.36亩。该园分为四个景区：桃花潭景区（原龚氏园）、凝霞阁景区（原沈氏园）、清镜塘景区（原金氏园）及邑庙景区。</a>
                        </div>

                        <div>
                            <img src={img8} alt="" className="bottom-border"/>
                            <a>醉白池（Zuibai Pool）是江南著名的古典园林之一，是上海的旅游胜地，已有九百余年历史。醉白池历经300余年，仍保存有堂，轩，亭，舫，榭等古建筑，并保持着明清江南园林风貌。园内古木葱笼，亭台密布，古迹甚多，有四面厅、乐天轩、疑肪、雪海堂、宝成楼、池上草堂等亭台楼阁及邦彦画像石刻、《赤壁赋》真迹石刻、《难得糊涂》石刻等艺术瑰宝，还有树龄在三四百年的古银杏、古樟树，年龄在百年以上的牡丹。
                            </a>
                        </div>

                        <div>
                            <img src={img7} alt="" className="bottom-border"/>
                            <a>曲水园（Qushui Garden）位于上海青浦区公园路612号。初建于清乾隆十年（公元1745年）。据说为了建此园，曾向城中每个居民征募一文钱，故又有“一文园”之称。乾隆四十九年（公元1784年），拓地池筑堤累石，增建楼台，前后历四十余年，建成二十四景，三十余庙的园林。园内一石一水，一亭一阁，尽皆成趣。嘉庆三年改园名为曲水园。因园在大盈浦旁，取王羲之《兰亭集序》中的“曲水流觞”之意。</a>
                        </div>

                        {/*<img src={img11} alt=""/>*/}


                        {/*<div>*/}
                        {/*    <img src={img22} alt={""}/>*/}
                        {/*</div>*/}


                        {/*<div>*/}
                        {/*    <img src={img33} alt={""}/>*/}
                        {/*</div>*/}



                        {/*<div>*/}
                        {/*    <img src={img4} alt=""/>*/}
                        {/*</div>*/}


                        {/*<div>*/}
                        {/*    <img src={img55} alt=""/>*/}
                        {/*</div>*/}

                        {/*<div className="no-left">*/}
                        {/*    <img src={img66} alt=""/>*/}
                        {/*</div>*/}


                        {/*<div className="no-left">*/}
                        {/*    <img src={img77} alt=""/>*/}
                        {/*</div>*/}



                        {/*<div>*/}
                        {/*    <img src={img8} alt=""/>*/}
                        {/*</div>*/}

                    </Slider>
                </div>
            </div>
        </Section>
    );
}