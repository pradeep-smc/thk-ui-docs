/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = "" } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
        const langPart = `${language ? `${language}/` : ""}`;
        const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = (props) => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = (props) => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo" />
            </div>
        );

        const ProjectTitle = (props) => (
            <h2 className="projectTitle">
                {props.title}
                <small>{props.tagline}</small>
            </h2>
        );

        const PromoSection = (props) => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = (props) => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <Logo img_src={`${baseUrl}img/undraw_Statistics_re_kox4.svg`} />
                <div className="inner">
                    <ProjectTitle
                        tagline={siteConfig.tagline}
                        title={siteConfig.title}
                    />
                    <PromoSection>
                        {/* <Button href="#try">Try It Out</Button> */}
                        {/* <Button href="#device-bird">Devices Bird View</Button>
                        <Button href="#device-view">Device statistics</Button> */}
                        <Button href={docUrl("devices-heartbeat.html")}>
                            Devices Bird view
                        </Button>
                        <Button href={docUrl("device-stats.html")}>
                            Device statistics
                        </Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const { config: siteConfig, language = "" } = this.props;
        const { baseUrl, docsUrl } = siteConfig;

        const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
        const langPart = `${language ? `${language}/` : ""}`;
        const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;
        const Block = (props) => (
            <Container
                padding={["bottom", "top"]}
                id={props.id}
                background={props.background}
            >
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const DeviceView = () => (
            <Block id="device-view">
                {[
                    {
                        content:
                            "Statistics of every device like memory, CPU, GPU, RAM and Temperatures etc. " +
                            `..[**Read more**](${docUrl("doc1.html")})`,
                        image: `${baseUrl}img/undraw_Personal_goals_re_iow7.svg`,
                        imageAlign: "left",
                        title: "Device statistics",
                    },
                ]}
            </Block>
        );

        const DevicesBird = () => (
            <Block id="device-bird" background="light">
                {[
                    {
                        content:
                            "Monitor health status, alerts, locations, and abstract view of each device." +
                            `..[**Read more**](${docUrl("doc1.html")})`,
                        image: `${baseUrl}img/undraw_statistic_chart_38b6.svg`,
                        imageAlign: "right",
                        title: "Devices bird view",
                    },
                ]}
            </Block>
        );

        const Features = () => (
            <Block layout="fourColumn">
                {[
                    {
                        content: "View the health status of every device",
                        image: `${baseUrl}img/undraw_Appreciation_re_p6rl.svg`,
                        imageAlign: "top",
                        title: "Heartbeat",
                    },
                    {
                        content:
                            "Find or add the physical location of the device",
                        image: `${baseUrl}img/undraw_tourist_map_re_293e.svg`,
                        imageAlign: "top",
                        title: "Map View",
                    },
                    {
                        content: "View device related warnings and logs etc.",
                        image: `${baseUrl}img/undraw_Modern_life_re_8pdp.svg`,
                        imageAlign: "top",
                        title: "Alerts",
                    },
                ]}
            </Block>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language} />
                <div className="mainContainer">
                    <Features />
                    <DevicesBird />
                    <DeviceView />
                </div>
            </div>
        );
    }
}

module.exports = Index;
