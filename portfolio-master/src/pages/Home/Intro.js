import { Suspense, lazy, useEffect, useState, Fragment } from 'react'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import DecoderText from 'components/DecoderText'
import { useInterval, usePrevious, useWindowSize } from 'hooks'
import { reflow } from 'utils/transition'
import prerender from 'utils/prerender'
import { media } from 'utils/style'
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg'
import { tokens } from 'components/ThemeProvider/theme'
import Heading from 'components/Heading'
import Section from 'components/Section'
import { useTheme } from 'components/ThemeProvider'
import VisuallyHidden from 'components/VisuallyHidden'
import './Intro.css'

const DisplacementSphere = lazy(() => import('pages/Home/DisplacementSphere'))

function Intro({ id, sectionRef, disciplines, scrollIndicatorHidden, ...rest }) {
    const theme = useTheme()
    const [disciplineIndex, setDisciplineIndex] = useState(0)
    const windowSize = useWindowSize()
    const prevTheme = usePrevious(theme)
    const introLabel = [
        disciplines.slice(0, -1).join(', '),
        disciplines.slice(-1)[0],
    ].join(', and ')
    const currentDisciplines = disciplines.filter(
        (item, index) => index === disciplineIndex
    )
    const titleId = `${id}-title`

    useInterval(
        () => {
            const index = (disciplineIndex + 1) % disciplines.length
            setDisciplineIndex(index)
        },
        5000,
        theme.themeId
    )

    useEffect(() => {
        if (prevTheme && prevTheme.themeId !== theme.themeId) {
            setDisciplineIndex(0)
        }
    }, [theme.themeId, prevTheme])

    return (
        <Section
            className="intro"
            as="section"
            ref={sectionRef}
            id={id}
            aria-labelledby={titleId}
            tabIndex={-1}
            {...rest}
        >
            <Transition
                key={theme.themeId}
                appear={!prerender}
                in={!prerender}
                timeout={3000}
                onEnter={reflow}
            >
                {status => (
                    <Fragment>
                        {!prerender && (
                            <Suspense fallback={null}>
                                <DisplacementSphere />
                            </Suspense>
                        )}
                        <header className="intro__text">
                            <h1
                                className={classNames(
                                    'intro__name',
                                    `intro__name--${status}`
                                )}
                                id={titleId}
                            >
                                <DecoderText
                                    text=" 上海大学 · 上海美术学院"
                                    start={!prerender}
                                    delay={300}
                                />
                            </h1>

                            <Heading level={0} as="h2" className={classNames('intro__title','intro__player_wrapper')}>
                                <div>
                                <VisuallyHidden className="intro__title-label">{`Designer + ${introLabel}`}</VisuallyHidden>
                                <span
                                    aria-hidden
                                    className={classNames('intro__title-row', {
                                        'intro__title-row--hidden': prerender,
                                    })}
                                >
                                    <span
                                        className={classNames(
                                            'intro__title-word',
                                            `intro__title-word--${status}`
                                        )}
                                        style={{ '--delay': tokens.base.durationXS}}
                                    >
                                        METAPARK<br></br>数幻游园
                                    </span>
                                    <span
                                        classnameperppplllsss={classNames(
                                            'intro__title-line',
                                            `intro__title-line--${status}`
                                        )}
                                    />
                                </span>
                                <TransitionGroup
                                    className={classNames('intro__title-row', {
                                        'intro__title-row--hidden': prerender,
                                    })}
                                    component="span"
                                >
                                    {currentDisciplines.map(item => (
                                        <Transition
                                            appear
                                            timeout={{ enter: 3000, exit: 2000 }}
                                            key={item}
                                            onEnter={reflow}
                                        >
                                            {wordStatus => (
                                                <span
                                                    aria-hidden
                                                    className={classNames(
                                                        'intro__title-word',
                                                        'intro__title-word--plus',
                                                        `intro__title-word--${wordStatus}`
                                                    )}
                                                    style={{
                                                        '--delay': tokens.base.durationL,
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            )}
                                        </Transition>
                                    ))}
                                </TransitionGroup>
                                </div>
                                <div className='intro_player'>
                                    <iframe
    src="//player.bilibili.com/player.html?aid=469015433&bvid=BV1b541197Yv&cid=721223195&page=1&as_wide=1&high_quality=1"
    scrolling="no" border="0" frameBorder="no" framespacing="0" width="100%" height="100%"
    allowFullScreen="true"/>
                                </div>
                            </Heading>
                        </header>
                        {windowSize.width > media.tablet && (
                            <div
                                className={classNames(
                                    'intro__scroll-indicator',
                                    `intro__scroll-indicator--${status}`,
                                    {
                                        'intro__scroll-indicator--hidden': scrollIndicatorHidden,
                                    }
                                )}
                                status={status}
                            />
                        )}
                        {windowSize.width <= media.tablet && (
                            <div
                                className={classNames(
                                    'intro__mobile-scroll-indicator',
                                    `intro__mobile-scroll-indicator--${status}`,
                                    {
                                        'intro__mobile-scroll-indicator--hidden': scrollIndicatorHidden,
                                    }
                                )}
                            >
                                <ArrowDown aria-hidden />
                            </div>
                        )}
                    </Fragment>
                )}
            </Transition>
        </Section>
    )
}

export default Intro
