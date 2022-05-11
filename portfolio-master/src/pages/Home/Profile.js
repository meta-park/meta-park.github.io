import { Fragment } from 'react'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'
import { Button } from 'components/Button'
import DecoderText from 'components/DecoderText'
import Divider from 'components/Divider'
import Image from 'components/Image'
import Section from 'components/Section'
import ProfileImg from 'assets/idea.jpg'
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
            <DecoderText text="我们的理念" start={status !== 'exited'} delay={500} />
        </Heading>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="m"
        >
            随着后疫情时代的到来，数字原住民增加以及“宅文化”兴起，大量人群，
            特别是青年群体中的学生党与上班族，迫工作与学习上的压力和对网络数字世界的沉迷，
            几乎没有空闲时间去到线下公园内进行休闲放松。同时，疫情的反复爆发导致线下生活受到严重影响，
            迫切需要能够以更加便捷安全的方式享受到城市公园中的自然绿意。
            “Meta-park数幻游园”线上交互体验平台正是基于这样的时代背景，
            通过技术与艺术相结合的手段，把城市中的老公园“搬进”数字空间里，
            从而使人们随时随地都能够通过移动设备进入到“城市公园元宇宙”内进行放松、游玩与交友等活动。
        </Text>
        {/* <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            In my spare time I like to play video games, watch anime. I’m always down for
            hearing about new projects, so feel free to drop me a line.
        </Text> */}
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
                    <div className="profile__content">
                        <div className="profile__column">
                            <ProfileText status={status} titleId={titleId} />
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
                        <div className="profile__column">
                            <div className="profile__tag" aria-hidden>
                                <Divider
                                    notchWidth="64px"
                                    notchHeight="8px"
                                    collapsed={status !== 'entered'}
                                    collapseDelay={1000}
                                />
                                <div
                                    className={classNames(
                                        'profile__tag-text',
                                        `profile__tag-text--${status}`
                                    )}
                                >
                                    关于我们
                                </div>
                            </div>
                            <div>
                                <Text
                                    className={classNames(
                                        'profile__description',
                                        `profile__description--${status}`
                                    )}
                                    size="m"
                                >
                                    我们是来自上海大学的一支具有多元学科背景的创新研究型团队，
                                    团队负责人为上海大学上海美术学院环境设计专业研究生，
                                    核心成员分别来自上海美术学院、社会学院、管理学院、计算机工程与技术学院、通信与信息工程学院等，
                                    我们的团队愿景是：让每一个人都能够在数字世界里畅想绿艺！
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            reveal
                            delay={100}
                            srcSet={`${ProfileImg} 480w, ${ProfileImg} 960w`}
                            sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                            alt="To shy to upload my own picture hehehehehe"
                        />
                    </div>
                    </div>
                )}
            </Transition>
        </Section>
    )
}

export default Profile
