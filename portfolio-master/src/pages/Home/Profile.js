import { Fragment } from 'react'
import classNames from 'classnames'
import { Transition, CSSTransition, SwitchTransition } from 'react-transition-group'
import { Button } from 'components/Button'
import DecoderText from 'components/DecoderText'
import Image from 'components/Image'
import Section from 'components/Section'
import Chen from 'assets/Chen.jpg'
import Lu from 'assets/Lu.jpg'
import Jiang from 'assets/Jiang.jpg'
// import Sun from 'assets/Sun.jpg'
import Yan from 'assets/Yan.jpg'
import { reflow } from 'utils/transition'
import Heading from 'components/Heading'
import Text from 'components/Text'
import './Profile.css'
import { useState, useEffect } from 'react'


const ProfileText = ({ status, titleId }) => {
    const [choosedAvatar, setChoosedAvatar] = useState(0)
    const [choosedResume, setChoosedResume] = useState(<div>123</div>)
    const chooseAvatar = (id) => {
        setChoosedAvatar(id)
    }

    useEffect(() => {
        const resumes = [
            // 程雪松
            <Text
                className={classNames(
                    'profile__description',
                    `profile__description--entered`
                )}
                size="m"
            >
                博士，教授，博导，现任上海大学上海美术学院设计系主任，上海美术学院学术委员会委员，设计学科组召集人。上海大学环境设计国家级一流专业建设点负责人，中国建筑学会会员，上海市美术家协会会员，上海市商业经济学会理事，2020阿联酋迪拜世博会中国馆专家委员会委员。
                <br></br> <br></br>
                主要从事城镇环境更新设计和上海设计史研究。在专业学术期刊发表学术论文四十多篇，独立或合作出版专著、教材、论文集八部，主持上海市艺术科学规划、文教结合、教育部新文科改革等科研、教研课题及相关工程实践多项。作品入选文化旅游部和中国美协展览，获上海市高等教育教学成果奖二等奖(第一完成人)，宝钢优秀教师奖，上海市育才奖。担任2019米兰三年展中国国家馆上海大学展区执行策展与艺术设计。主讲课程《商业空间设计》获上海市重点课程立项和一流课程认定。
            </Text>,
            //蒋飞
            <Text
            className={classNames(
                'profile__description',
                `profile__description--entered`
            )}
            size="m"
            >
            公共艺术专业博士，机械工程博士后，现任上海美术学院数码艺术系副主任，上海大学国际学生知华导师，美国麻省理工学院媒体实验室客座教授，教字光影技术湖北省工程设计中心客座教授。
            <br></br><br></br>
            跨学科背景横跨三个领域：艺术设计、媒体艺术和机械工程。作品专注于交互设计、可穿戴传感和沉浸式体验，作品在第16届中国国际工业博览会、第1届澳门国际设计展、上海设计大展等多个国际、国内展览展出，发表中、英文学术论文十余篇，所授的数字媒体艺术相关课程曾获得上海市高校艺术与设计类青年教师教学竞赛一等奖。
            </Text>,
            //孙继伟
            <Text
            className={classNames(
                'profile__description',
                `profile__description--entered`
            )}
            size="m"
            >
            中国首位问题管理专家，复旦大学博士，上海大学教授，大简资本创始人。历任证券公司投资经理、李嘉诚旗下合资企业总裁助理、龙创设计(832954)董事、上海静安投资集团外部董事，上海市创业指导专家，多家单位的创新创业导师。
            <br></br><br></br>
            出版《企业管理视野中的风险投资》等专著6部，领导团队7年持续研究新三板，连续6年研究发布《新三板年度盘点三部曲》，主持20多家新三板公司投资。从事创业投资研究和实践20年，主持完成多项PE/VC投资项目。给多个培训班和论坛作过”中小企业梯度融资与北交所上市”培训讲座，已实施多家”挺进北交所”的成功案例。
            <br></br><br></br>
            创办的大简投资管理（上海）有限公司获得创业投资与股权投资类私募基金管理人资质、上海中小企业服务机构荣誉（上海市经信委授牌）。
            </Text>,
            //严晓勤
            <Text
            className={classNames(
                'profile__description',
                `profile__description--entered`
            )}
            size="m"
            >
            上海大学上海美术学院设计系高级工程师，研究方向为园林景观设计。参与主持了多项海内外中国古典园林、古典建筑、现代城市景观及城市绿地系统、风景区项目的规划、设计、论证。曾任江苏省建筑园林设计院院长，完成的主要项目有南京高新区园林景观规划，南京江宁东山公园总体规划，乌鲁木齐丹凤朝阳阁及广场，安徽三祖寺、山谷流泉总规划，南京中国人家高尚墅景观设计，澳大利亚墨尔本Cohen广场棂门、唐人街改造等。
            </Text>,
            //卢俊辉
            <Text
            className={classNames(
                'profile__description',
                `profile__description--entered`
            )}
            size="m"
            >
            上海大学上海美术学院艺术设计专业研究生，研究方向为环境设计，国际青年美术设计协会会员，第二届ICAD国际当代青年美术设计大赛 铜奖，第十八届“中南星”艺术设计大赛学生组第二名，河南省优秀学士学位论文，校优秀毕业生、优秀毕业设计、优秀班干等；有多次创新创业经验；实战经验较为丰富，具备前期项目策划的能力，在本项目中主要负责支持日常各项经营管理工作，协调监督项目进展情况、进行合作洽谈，场景建模，环境设计等工作。
            <br></br><br></br>
            </Text>
        ]
        setChoosedResume(resumes[choosedAvatar])
    }, [choosedAvatar])
    return (
    <Fragment>
        <Heading
            className={classNames('profile__title', `profile__title--${status}`)}
            level={3}
            id={titleId}
        >
           <span className={'profile__subtitle'}>&nbsp;</span> <DecoderText text="关于我们" start={status !== 'exited'} delay={500} />
        </Heading>
        <Heading
            className={classNames('clear_bottom', 'profile__title', `profile__title--${status}`)}
            level={4}
        >
            <span className={'profile__subtitle'}>项目介绍</span>
        </Heading>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="m"
        >
            随着后疫情时代的到来以及“宅文化”的兴起，使得“数字原住民”不断扩增。同时，疫情的反复导致线下生活受到影响，公园常驻人群也期待能以更安全便捷地方式享受到城市公园中的自然绿意。“Metapark数幻游园”公园虚拟交互平台正是基于这样的时代背景，通过技术与艺术相结合的手段，把城市中的老公园“搬进”数字空间里，从而使人们能随时随地通过移动设备进入“城市公园元宇宙”内进行休闲、游玩和交友等活动。我们期待：让青年人看见历史，让老年人遇见科技！
        </Text>
        <Heading
            level={4}
            className={classNames('clear_bottom', 'profile__title', `profile__title--${status}`)}
        >
            <span className={classNames('profile__subtitle',`profile__subtitle--${status}`)}>团队介绍</span>
        </Heading>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="m"
        >
            我们是一支具有多元学科背景的创新型研究团队，团队负责人为上海大学上海美术学院环境设计专业研究生卢俊辉，核心成员分别来自上海大学上海美术学院、社会学院、管理学院、计算机工程与技术学院等。
我们的愿景是：让每一个人都能够在数字世界里畅想绿艺!
        </Text>
        <div className='profile__avatar-list'>
            <div className={classNames('profile__avatar-wrapper', choosedAvatar === 0 ? 'profile__avatar-wrapper-choosed' : '')}>
                <div className= "profile__avatar" onClick={() => chooseAvatar(0)}>
                    <Image src={Chen} reveal delay={200}/>
                </div>
                <div className= "profile__avatar__text">指导老师 程雪松</div>
            </div>
            <div className={classNames('profile__avatar-wrapper', choosedAvatar === 1 ? 'profile__avatar-wrapper-choosed' : '')}>
                <div className= "profile__avatar" onClick={() => chooseAvatar(1)}>
                    <Image src={Jiang} reveal delay={700}/>
                </div>
                <div className= "profile__avatar__text">指导老师 蒋飞</div>
            </div>
            {/*<div className={classNames('profile__avatar-wrapper', choosedAvatar === 2 ? 'profile__avatar-wrapper-choosed' : '')}>*/}
            {/*    <div className= "profile__avatar" onClick={() => chooseAvatar(2)}>*/}
            {/*        <Image src={Sun} reveal delay={1200}/>*/}
            {/*    </div>*/}
            {/*    <div className= "profile__avatar__text">指导老师 孙继伟</div>*/}
            {/*</div>*/}
            <div className={classNames('profile__avatar-wrapper', choosedAvatar === 3 ? 'profile__avatar-wrapper-choosed' : '')}>
                <div className= "profile__avatar" onClick={() => chooseAvatar(3)}>
                    <Image src={Yan} reveal delay={1700}/>
                </div>
                <div className= "profile__avatar__text">指导老师 严晓勤</div>
            </div>
            <div className={classNames('profile__avatar-wrapper', choosedAvatar === 4 ? 'profile__avatar-wrapper-choosed' : '')}>
                <div className= "profile__avatar" onClick={() => chooseAvatar(4)}>
                    <Image src={Lu} reveal delay={2200}/>
                </div>
                <div className= "profile__avatar__text" >负责人 卢俊辉</div>
            </div>
        </div>
        <SwitchTransition>
            <CSSTransition
                key={choosedAvatar}
                classNames='fade'
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            >
                {choosedResume}
            </CSSTransition>
        </SwitchTransition>
    </Fragment>
)}


const Profile = ({ id, visible, sectionRef }) => {
    const titleId = `${id}-title`

    return (
        <Section
            className="profile"
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1}
        >
            <Transition in={visible} timeout={0} onEnter={reflow}>
                {status => (
                    <div>      
                            <ProfileText status={status} titleId={titleId} />
                            <div className='profile__contact'>
                            <Button
                                secondary
                                className={classNames(
                                    'profile__button',
                                    `profile__button--${status}`
                                )}
                                href="/contact"
                                icon="send"
                            >
                                联系我们
                            </Button>
                            </div>
                    </div>
                )}
            </Transition>
        </Section>
    )
}

export default Profile
