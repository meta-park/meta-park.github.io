import { Fragment } from 'react'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'
import { Button } from 'components/Button'
import DecoderText from 'components/DecoderText'
import Divider from 'components/Divider'
import Image from 'components/Image'
import Section from 'components/Section'
import Chen from 'assets/Chen.jpg'
import Lu from 'assets/Lu.jpg'
import { reflow } from 'utils/transition'
import { media } from 'utils/style'
import Heading from 'components/Heading'
import Text from 'components/Text'
import './Profile.css'

const ProfileText = ({ status, titleId }) => (
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
        <div className= "profile__avatar">
            <Image
                src={Chen}
                reveal
                delay={200}
            >
            </Image>
        </div>
        <div className= "profile__avatar__text">指导老师 程雪松</div>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="m"
        >
            博士，教授，博导，现任上海大学上海美术学院设计系主任，上海美术学院学术委员会委员，设计学科组召集人。上海大学环境设计国家级一流专业建设点负责人，中国建筑学会会员，上海市美术家协会会员，上海市商业经济学会理事，2020阿联酋迪拜世博会中国馆专家委员会委员。
            <br></br> <br></br>
            主要从事城镇环境更新设计和上海设计史研究。在专业学术期刊发表学术论文四十多篇，独立或合作出版专著、教材、论文集八部，主持上海市艺术科学规划、文教结合、教育部新文科改革等科研、教研课题及相关工程实践多项。作品入选文化旅游部和中国美协展览，获上海市高等教育教学成果奖二等奖(第一完成人)，宝钢优秀教师奖，上海市育才奖。担任2019米兰三年展中国国家馆上海大学展区执行策展与艺术设计。主讲课程《商业空间设计》获上海市重点课程立项和一流课程认定。
        </Text>
        <div className= "profile__avatar">
            <Image
                src={Lu}
                reveal
                delay={200}
            >
            </Image>
        </div>
        <div className= "profile__avatar__text">负责人 卢俊辉</div>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="m"
        >
        上海大学上海美术学院艺术设计专业研究生，研究方向为环境设计，国际青年美术设计协会会员，第二届ICAD国际当代青年美术设计大赛 铜奖，第十八届“中南星”艺术设计大赛学生组第二名，河南省优秀学士学位论文，校优秀毕业生、优秀毕业设计、优秀班干等。
        <br></br><br></br>
        有多次创新创业经验；实战经验较为丰富，具备前期项目策划的能力，在本项目中主要负责支持日常各项经营管理工作，协调监督项目进展情况、进行合作洽谈，场景建模，环境设计等工作。
        </Text>
    </Fragment>
)

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
