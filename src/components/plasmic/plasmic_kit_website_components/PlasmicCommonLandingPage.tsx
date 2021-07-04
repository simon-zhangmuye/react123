// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: HzhMCW_ztWQ
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Banner from "../../Banner"; // plasmic-import: QBF7nr-k8Wj/component
import Header from "../../Header"; // plasmic-import: vtgKf8zu4R/component
import HomeHero from "../../HomeHero"; // plasmic-import: CTFlDz32c2/component
import QuotesScroller from "../../QuotesScroller"; // plasmic-import: pDZtEWqRzT/component
import TestimonialsTop from "../../TestimonialsTop"; // plasmic-import: fJogwOTVlCE/component
import ValuePropsListSection from "../../ValuePropsListSection"; // plasmic-import: 2xJBbfTP-H7/component
import ValuePropListItem from "../../ValuePropListItem"; // plasmic-import: lJppbKgSOw/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import Divider from "../../Divider"; // plasmic-import: SQHouqji3_/component
import BelowFoldCtaRow from "../../BelowFoldCtaRow"; // plasmic-import: JF4MWU3g67-/component
import ValuePropSection from "../../ValuePropSection"; // plasmic-import: 6Zq5_xjO9F/component
import ButtonLink from "../../ButtonLink"; // plasmic-import: jzdXOPDUzV/component
import IntegrateAnywhereSection from "../../IntegrateAnywhereSection"; // plasmic-import: dxALvsaixcT/component
import DeveloperFlexibilitySection from "../../DeveloperFlexibilitySection"; // plasmic-import: aD1BzX0TEUk/component
import LimitlessExpressivitySectionForSites from "../../LimitlessExpressivitySectionForSites"; // plasmic-import: 8suVFciYp4t/component
import HitGroundRunningSection from "../../HitGroundRunningSection"; // plasmic-import: QePfxm7iE7o/component
import TestimonialsBottom from "../../TestimonialsBottom"; // plasmic-import: HUUfSMinVuU/component
import BottomCtaSection from "../../BottomCtaSection"; // plasmic-import: MEBiyy_4nD/component
import Footer from "../../Footer"; // plasmic-import: 9R5YynM9KVp/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicCommonLandingPage.module.css"; // plasmic-import: HzhMCW_ztWQ/css

import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: d8TOpAp1CP/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: YhhYiXTtXT/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: 5amV9exkN9/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: rP3WBmFG-e/icon
import websiteHeroImageTinypngMdyXn0Auz from "./images/websiteHeroImageTinypng.png"; // plasmic-import: MdyXN0Auz/picture
import placeholderOtjSzetyh from "./images/placeholder.webp"; // plasmic-import: otjSZETYH/picture
import image6Zk4QpLvJs from "./images/image6.svg"; // plasmic-import: ZK4QPLv_Js/picture
import image15CGjdWD3Lc from "./images/image15.svg"; // plasmic-import: CGjd_wD3lc/picture
import imageJEb6FwUqh2 from "./images/image.svg"; // plasmic-import: jEB6FWUqh2/picture
import image3Ye53PEpLv from "./images/image3.svg"; // plasmic-import: YE53p_epLv/picture
import image4SuzPkCmZfz from "./images/image4.svg"; // plasmic-import: SuzPKCmZFZ/picture
import image8Pjopgnvz6 from "./images/image8.svg"; // plasmic-import: PJOPGNVZ-6/picture
import image53LFnfKPfDu from "./images/image53.png"; // plasmic-import: LFnfKPfDu/picture
import image904Yo870MHj from "./images/image9.svg"; // plasmic-import: 04YO870mHJ/picture
import image11C1Emdq7MU7 from "./images/image11.svg"; // plasmic-import: C1Emdq7mU7/picture
import image12WiXt2Gdxg from "./images/image12.png"; // plasmic-import: WiXT2gdxg/picture

export type PlasmicCommonLandingPage__VariantMembers = {
  nextjs: "nextjs";
  gatsby: "gatsby";
  hideLevels: "hideLevels";
  plasmicLoader: "plasmicLoader";
};

export type PlasmicCommonLandingPage__VariantsArgs = {
  nextjs?: SingleBooleanChoiceArg<"nextjs">;
  gatsby?: SingleBooleanChoiceArg<"gatsby">;
  hideLevels?: SingleBooleanChoiceArg<"hideLevels">;
  plasmicLoader?: SingleBooleanChoiceArg<"plasmicLoader">;
};

type VariantPropType = keyof PlasmicCommonLandingPage__VariantsArgs;
export const PlasmicCommonLandingPage__VariantProps =
  new Array<VariantPropType>("nextjs", "gatsby", "hideLevels", "plasmicLoader");

export type PlasmicCommonLandingPage__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  integrationSection?: React.ReactNode;
  slot4?: React.ReactNode;
  slot3?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCommonLandingPage__ArgsType;
export const PlasmicCommonLandingPage__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "integrationSection",
  "slot4",
  "slot3"
);

export type PlasmicCommonLandingPage__OverridesType = {
  root?: p.Flex<"div">;
  banner?: p.Flex<typeof Banner>;
  header?: p.Flex<typeof Header>;
  body?: p.Flex<"div">;
  homeHero?: p.Flex<typeof HomeHero>;
  testimonialsTop?: p.Flex<typeof TestimonialsTop>;
  makeEditable?: p.Flex<typeof ValuePropsListSection>;
  makeEditableImage?: p.Flex<"img">;
  belowFoldCtaRow?: p.Flex<typeof BelowFoldCtaRow>;
  first?: p.Flex<typeof ValuePropSection>;
  link?: p.Flex<"a">;
  buttonLink?: p.Flex<typeof ButtonLink>;
  container?: p.Flex<"div">;
  developerFlexibilitySection?: p.Flex<typeof DeveloperFlexibilitySection>;
  limitlessExpressivitySectionForSites?: p.Flex<
    typeof LimitlessExpressivitySectionForSites
  >;
  hitGroundRunningSection?: p.Flex<typeof HitGroundRunningSection>;
  productHuntBadge?: p.Flex<"a">;
  testimonialsBottom?: p.Flex<typeof TestimonialsBottom>;
  bottomCtaSection?: p.Flex<typeof BottomCtaSection>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultCommonLandingPageProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  integrationSection?: React.ReactNode;
  slot4?: React.ReactNode;
  slot3?: React.ReactNode;
  nextjs?: SingleBooleanChoiceArg<"nextjs">;
  gatsby?: SingleBooleanChoiceArg<"gatsby">;
  hideLevels?: SingleBooleanChoiceArg<"hideLevels">;
  plasmicLoader?: SingleBooleanChoiceArg<"plasmicLoader">;
  className?: string;
}

function PlasmicCommonLandingPage__RenderFunc(props: {
  variants: PlasmicCommonLandingPage__VariantsArgs;
  args: PlasmicCommonLandingPage__ArgsType;
  overrides: PlasmicCommonLandingPage__OverridesType;
  dataFetches?: PlasmicCommonLandingPage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__global_theme_dark]: hasVariant(
          globalVariants,
          "theme",
          "dark"
        )
      })}
    >
      {false ? (
        <Banner
          data-plasmic-name={"banner"}
          data-plasmic-override={overrides.banner}
          className={classNames("__wab_instance", sty.banner)}
        />
      ) : null}

      <Header
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames("__wab_instance", sty.header)}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        hasGap={true}
        className={classNames(defaultcss.all, sty.body)}
      >
        <HomeHero
          data-plasmic-name={"homeHero"}
          data-plasmic-override={overrides.homeHero}
          className={classNames("__wab_instance", sty.homeHero)}
          slot={p.renderPlasmicSlot({
            defaultContents: (
              <span>
                <React.Fragment>
                  {
                    "The visual builder and web design tool that works seamlessly with your codebase. "
                  }
                </React.Fragment>
                <span style={{ fontWeight: 700 }}>{"Unblock your team"}</span>
                <React.Fragment>
                  {", and empower anyone to ship."}
                </React.Fragment>
              </span>
            ),
            value: args.slot2
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <span>
                <React.Fragment>
                  {"Build beautiful experiences ⚡️ "}
                </React.Fragment>
                <span style={{ fontStyle: "italic" }}>{"fast"}</span>
                <React.Fragment>{"."}</React.Fragment>
              </span>
            ),
            value: args.slot
          })}
        </HomeHero>

        <QuotesScroller
          className={classNames("__wab_instance", sty.quotesScroller__cvBgx)}
        >
          <div className={classNames(defaultcss.all, sty.box__il5V4)}>
            <TestimonialsTop
              data-plasmic-name={"testimonialsTop"}
              data-plasmic-override={overrides.testimonialsTop}
            />
          </div>
        </QuotesScroller>

        <ValuePropsListSection
          data-plasmic-name={"makeEditable"}
          data-plasmic-override={overrides.makeEditable}
          className={classNames("__wab_instance", sty.makeEditable)}
          evenSplit={"evenSplit" as const}
          showcaseImage={
            <img
              data-plasmic-name={"makeEditableImage"}
              data-plasmic-override={overrides.makeEditableImage}
              alt={""}
              className={classNames(defaultcss.img, sty.makeEditableImage)}
              height={512 as const}
              role={"img"}
              src={placeholderOtjSzetyh}
              width={720 as const}
            />
          }
          slot={p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___0DrSq
                )}
              >
                {"Make your product editable to the whole team."}
              </div>
            ),

            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__global_theme_altHeadlineFont]: hasVariant(
                globalVariants,
                "theme",
                "altHeadlineFont"
              )
            })
          })}
          slot2={null}
          slot3={null}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__tzvvn)}
              >
                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__gSsIj
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon21Icon
                        className={classNames(defaultcss.all, sty.svg__sTyKf)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"No-code autonomy."}
                >
                  {
                    "Enable designers and marketers to create pages and free-form content. For when CMS schemas and templates can't keep up."
                  }
                </ValuePropListItem>

                <Divider
                  className={classNames("__wab_instance", sty.divider__jdZnG)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__hA2Ho
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon20Icon
                        className={classNames(defaultcss.all, sty.svg__dAqb3)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"Free up developers."}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__sryYo
                    )}
                  >
                    {
                      "Let developers focus on code, not pixel-pushing. Or use Plasmic to accelerate frontend development."
                    }
                  </div>
                </ValuePropListItem>

                <Divider
                  className={classNames("__wab_instance", sty.divider__gHvZ)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__oDpmt
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon22Icon
                        className={classNames(defaultcss.all, sty.svg__hr5Mb)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"Eliminate handoffs."}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__hixIg
                    )}
                  >
                    {
                      "Keep everyone on the same page, with a single source of truth for design and production."
                    }
                  </div>
                </ValuePropListItem>
              </p.Stack>
            ),

            value: args.slot4
          })}
        </ValuePropsListSection>

        <BelowFoldCtaRow
          data-plasmic-name={"belowFoldCtaRow"}
          data-plasmic-override={overrides.belowFoldCtaRow}
          className={classNames("__wab_instance", sty.belowFoldCtaRow, {
            [sty.belowFoldCtaRow__hideLevels]: hasVariant(
              variants,
              "hideLevels",
              "hideLevels"
            )
          })}
          hideLevels={
            hasVariant(variants, "hideLevels", "hideLevels")
              ? ("hideLevels" as const)
              : undefined
          }
        />

        {false ? (
          <ValuePropSection
            data-plasmic-name={"first"}
            data-plasmic-override={overrides.first}
            actionButton={
              <a
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(defaultcss.all, sty.link)}
                href={"/learn/" as const}
              >
                <ButtonLink
                  data-plasmic-name={"buttonLink"}
                  data-plasmic-override={overrides.buttonLink}
                  href={"/learn/" as const}
                  icon={
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__vb2Se)}
                      role={"img"}
                    />
                  }
                  label={"Learn more"}
                />
              </a>
            }
            backgroundColor={"blue" as const}
            backgroundImage={
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__efMTf)}
                height={95 as const}
                role={"img"}
                src={image6Zk4QpLvJs}
                width={300 as const}
              />
            }
            className={classNames("__wab_instance", sty.first)}
            description={
              "Plasmic Studio works in the Chrome and Firefox web browsers and accessible on macOS, Linux, and Windows."
            }
            extraSlot={
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__thHta)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__blk3T)}
                >
                  <ValuePropListItem
                    slot={
                      <GraphicIcon
                        className={classNames(
                          "__wab_instance",
                          sty.graphicIcon__vdWg
                        )}
                        colors={"lightBlueSolid" as const}
                      >
                        <Icon21Icon
                          className={classNames(defaultcss.all, sty.svg__j8A6E)}
                          role={"img"}
                        />
                      </GraphicIcon>
                    }
                  >
                    {
                      "Whether you’re a developer, designer, or content creative, Plasmic Studio scales to your desired level of control."
                    }
                  </ValuePropListItem>

                  <Divider
                    className={classNames("__wab_instance", sty.divider__tpaQr)}
                  />

                  <ValuePropListItem
                    slot={
                      <GraphicIcon
                        className={classNames(
                          "__wab_instance",
                          sty.graphicIcon__nAxdN
                        )}
                        colors={"lightBlueSolid" as const}
                      >
                        <Icon20Icon
                          className={classNames(defaultcss.all, sty.svg__o1Msj)}
                          role={"img"}
                        />
                      </GraphicIcon>
                    }
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__ex1EP
                      )}
                    >
                      {
                        "Free up developers and iterate faster. Or accelerate your own development cycles."
                      }
                    </div>
                  </ValuePropListItem>

                  <Divider
                    className={classNames("__wab_instance", sty.divider__r5TQp)}
                  />

                  <ValuePropListItem
                    slot={
                      <GraphicIcon
                        className={classNames(
                          "__wab_instance",
                          sty.graphicIcon__o7Yi
                        )}
                        colors={"lightBlueSolid" as const}
                      >
                        <Icon22Icon
                          className={classNames(defaultcss.all, sty.svg__zmmIw)}
                          role={"img"}
                        />
                      </GraphicIcon>
                    }
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__eHqL3
                      )}
                    >
                      {
                        "Keep everyone on the same page, with a single source of truth for design and production."
                      }
                    </div>
                  </ValuePropListItem>

                  <Divider
                    className={classNames("__wab_instance", sty.divider__nd4Ur)}
                  />

                  <ValuePropListItem
                    slot={
                      <GraphicIcon
                        className={classNames(
                          "__wab_instance",
                          sty.graphicIcon__poFjv
                        )}
                        colors={"lightBlueSolid" as const}
                      >
                        <Icon23Icon
                          className={classNames(defaultcss.all, sty.svg__aEZiF)}
                          role={"img"}
                        />
                      </GraphicIcon>
                    }
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box___8309H
                      )}
                    >
                      {
                        "Use an intuitive layout system built for humans to create complex responsive pages."
                      }
                    </div>
                  </ValuePropListItem>
                </p.Stack>
              </p.Stack>
            }
            extras={["withExtraSlot1", "centerAligned"]}
            header={null}
            icon={null}
            title={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__pIcle,
                  {
                    [sty.box__global_theme_altHeadlineFont__pIcleFQkvX]:
                      hasVariant(globalVariants, "theme", "altHeadlineFont")
                  }
                )}
              >
                <span>
                  <React.Fragment>
                    {"Make your product editable to "}
                  </React.Fragment>
                  <span style={{ textDecoration: "underline" }}>
                    {"anyone"}
                  </span>
                  <React.Fragment>{"."}</React.Fragment>
                </span>
              </div>
            }
          />
        ) : null}
        {false ? (
          <section className={classNames(defaultcss.all, sty.section__o1UJw)}>
            <div className={classNames(defaultcss.all, sty.box__pGcAo)}>
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__qxie)}
                height={150 as const}
                role={"img"}
                src={image15CGjdWD3Lc}
                width={205 as const}
              />
            </div>
          </section>
        ) : null}
        {p.renderPlasmicSlot({
          defaultContents: (
            <IntegrateAnywhereSection
              className={classNames(
                "__wab_instance",
                sty.integrateAnywhereSection___1RP03
              )}
            />
          ),

          value: args.integrationSection
        })}

        <section className={classNames(defaultcss.all, sty.section___5Pdi)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"container"}
            data-plasmic-override={overrides.container}
            hasGap={true}
            className={classNames(defaultcss.all, sty.container, {
              [sty.container__gatsby]: hasVariant(variants, "gatsby", "gatsby"),
              [sty.container__nextjs]: hasVariant(variants, "nextjs", "nextjs")
            })}
          >
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__n3QxF)}
              height={126 as const}
              role={"img"}
              src={imageJEb6FwUqh2}
              width={300 as const}
            />

            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__kfQrJ)}
              height={76 as const}
              role={"img"}
              src={image3Ye53PEpLv}
              width={300 as const}
            />

            {(hasVariant(variants, "nextjs", "nextjs") ? false : true) ? (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__yiewc, {
                  [sty.img__nextjs__yiewc0N7YG]: hasVariant(
                    variants,
                    "nextjs",
                    "nextjs"
                  )
                })}
                height={79 as const}
                role={"img"}
                src={image4SuzPkCmZfz}
                width={300 as const}
              />
            ) : null}
            {(hasVariant(variants, "gatsby", "gatsby") ? false : true) ? (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img___2B399, {
                  [sty.img__gatsby___2B399Pxjv]: hasVariant(
                    variants,
                    "gatsby",
                    "gatsby"
                  ),
                  [sty.img__nextjs___2B3990N7YG]: hasVariant(
                    variants,
                    "nextjs",
                    "nextjs"
                  )
                })}
                height={150 as const}
                role={"img"}
                src={image8Pjopgnvz6}
                width={250 as const}
              />
            ) : null}

            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__fSxKk, {
                [sty.img__gatsby__fSxKkpxjv]: hasVariant(
                  variants,
                  "gatsby",
                  "gatsby"
                ),
                [sty.img__nextjs__fSxKk0N7YG]: hasVariant(
                  variants,
                  "nextjs",
                  "nextjs"
                )
              })}
              height={195 as const}
              role={"img"}
              src={image53LFnfKPfDu}
              width={670 as const}
            />

            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img___73TBy)}
              height={82 as const}
              role={"img"}
              src={image904Yo870MHj}
              width={300 as const}
            />

            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__osQ4W)}
              height={68 as const}
              role={"img"}
              src={image11C1Emdq7MU7}
              width={300 as const}
            />

            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__vX0Y6)}
              height={623 as const}
              role={"img"}
              src={image12WiXt2Gdxg}
              width={2600 as const}
            />
          </p.Stack>
        </section>

        <DeveloperFlexibilitySection
          data-plasmic-name={"developerFlexibilitySection"}
          data-plasmic-override={overrides.developerFlexibilitySection}
          className={classNames(
            "__wab_instance",
            sty.developerFlexibilitySection,
            {
              [sty.developerFlexibilitySection__plasmicLoader]: hasVariant(
                variants,
                "plasmicLoader",
                "plasmicLoader"
              )
            }
          )}
          plasmicLoader={
            hasVariant(variants, "plasmicLoader", "plasmicLoader")
              ? ("plasmicLoader" as const)
              : undefined
          }
        />

        <LimitlessExpressivitySectionForSites
          data-plasmic-name={"limitlessExpressivitySectionForSites"}
          data-plasmic-override={overrides.limitlessExpressivitySectionForSites}
          className={classNames(
            "__wab_instance",
            sty.limitlessExpressivitySectionForSites,
            {
              [sty.limitlessExpressivitySectionForSites__plasmicLoader]:
                hasVariant(variants, "plasmicLoader", "plasmicLoader")
            }
          )}
        />

        <HitGroundRunningSection
          data-plasmic-name={"hitGroundRunningSection"}
          data-plasmic-override={overrides.hitGroundRunningSection}
          className={classNames("__wab_instance", sty.hitGroundRunningSection)}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "Starting on something new? Generate a complete codebase from scratch, with your choice of modern framework. Start a GitHub repo straight from within Plasmic, or run the create-plasmic-app CLI.",
            value: args.slot3
          })}
        </HitGroundRunningSection>

        <a
          data-plasmic-name={"productHuntBadge"}
          data-plasmic-override={overrides.productHuntBadge}
          className={classNames(defaultcss.all, sty.productHuntBadge)}
          href={
            "https://www.producthunt.com/posts/plasmic?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-plasmic" as const
          }
        >
          <img
            alt={
              "Plasmic - Visual builder & design tool for React, Next and Gatsby | Product Hunt" as const
            }
            className={classNames(defaultcss.img, sty.img__jkiWw)}
            loading={"lazy" as const}
            role={"img"}
            src={
              "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290978&theme=light" as const
            }
          />
        </a>

        <QuotesScroller
          className={classNames("__wab_instance", sty.quotesScroller__mTr2P)}
        >
          <TestimonialsBottom
            data-plasmic-name={"testimonialsBottom"}
            data-plasmic-override={overrides.testimonialsBottom}
            className={classNames("__wab_instance", sty.testimonialsBottom)}
          />
        </QuotesScroller>

        <BottomCtaSection
          data-plasmic-name={"bottomCtaSection"}
          data-plasmic-override={overrides.bottomCtaSection}
          className={classNames("__wab_instance", sty.bottomCtaSection)}
        />
      </p.Stack>

      <Footer
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames("__wab_instance", sty.footer)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "banner",
    "header",
    "body",
    "homeHero",
    "testimonialsTop",
    "makeEditable",
    "makeEditableImage",
    "belowFoldCtaRow",
    "first",
    "link",
    "buttonLink",
    "container",
    "developerFlexibilitySection",
    "limitlessExpressivitySectionForSites",
    "hitGroundRunningSection",
    "productHuntBadge",
    "testimonialsBottom",
    "bottomCtaSection",
    "footer"
  ],
  banner: ["banner"],
  header: ["header"],
  body: [
    "body",
    "homeHero",
    "testimonialsTop",
    "makeEditable",
    "makeEditableImage",
    "belowFoldCtaRow",
    "first",
    "link",
    "buttonLink",
    "container",
    "developerFlexibilitySection",
    "limitlessExpressivitySectionForSites",
    "hitGroundRunningSection",
    "productHuntBadge",
    "testimonialsBottom",
    "bottomCtaSection"
  ],
  homeHero: ["homeHero"],
  testimonialsTop: ["testimonialsTop"],
  makeEditable: ["makeEditable", "makeEditableImage"],
  makeEditableImage: ["makeEditableImage"],
  belowFoldCtaRow: ["belowFoldCtaRow"],
  first: ["first", "link", "buttonLink"],
  link: ["link", "buttonLink"],
  buttonLink: ["buttonLink"],
  container: ["container"],
  developerFlexibilitySection: ["developerFlexibilitySection"],
  limitlessExpressivitySectionForSites: [
    "limitlessExpressivitySectionForSites"
  ],
  hitGroundRunningSection: ["hitGroundRunningSection"],
  productHuntBadge: ["productHuntBadge"],
  testimonialsBottom: ["testimonialsBottom"],
  bottomCtaSection: ["bottomCtaSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  banner: typeof Banner;
  header: typeof Header;
  body: "div";
  homeHero: typeof HomeHero;
  testimonialsTop: typeof TestimonialsTop;
  makeEditable: typeof ValuePropsListSection;
  makeEditableImage: "img";
  belowFoldCtaRow: typeof BelowFoldCtaRow;
  first: typeof ValuePropSection;
  link: "a";
  buttonLink: typeof ButtonLink;
  container: "div";
  developerFlexibilitySection: typeof DeveloperFlexibilitySection;
  limitlessExpressivitySectionForSites: typeof LimitlessExpressivitySectionForSites;
  hitGroundRunningSection: typeof HitGroundRunningSection;
  productHuntBadge: "a";
  testimonialsBottom: typeof TestimonialsBottom;
  bottomCtaSection: typeof BottomCtaSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCommonLandingPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCommonLandingPage__VariantsArgs;
    args?: PlasmicCommonLandingPage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCommonLandingPage__Fetches;
  } & Omit<PlasmicCommonLandingPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCommonLandingPage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCommonLandingPage__ArgProps,
      internalVariantPropNames: PlasmicCommonLandingPage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCommonLandingPage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCommonLandingPage";
  } else {
    func.displayName = `PlasmicCommonLandingPage.${nodeName}`;
  }
  return func;
}

export const PlasmicCommonLandingPage = Object.assign(
  // Top-level PlasmicCommonLandingPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    banner: makeNodeComponent("banner"),
    header: makeNodeComponent("header"),
    body: makeNodeComponent("body"),
    homeHero: makeNodeComponent("homeHero"),
    testimonialsTop: makeNodeComponent("testimonialsTop"),
    makeEditable: makeNodeComponent("makeEditable"),
    makeEditableImage: makeNodeComponent("makeEditableImage"),
    belowFoldCtaRow: makeNodeComponent("belowFoldCtaRow"),
    first: makeNodeComponent("first"),
    link: makeNodeComponent("link"),
    buttonLink: makeNodeComponent("buttonLink"),
    container: makeNodeComponent("container"),
    developerFlexibilitySection: makeNodeComponent(
      "developerFlexibilitySection"
    ),
    limitlessExpressivitySectionForSites: makeNodeComponent(
      "limitlessExpressivitySectionForSites"
    ),
    hitGroundRunningSection: makeNodeComponent("hitGroundRunningSection"),
    productHuntBadge: makeNodeComponent("productHuntBadge"),
    testimonialsBottom: makeNodeComponent("testimonialsBottom"),
    bottomCtaSection: makeNodeComponent("bottomCtaSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicCommonLandingPage
    internalVariantProps: PlasmicCommonLandingPage__VariantProps,
    internalArgProps: PlasmicCommonLandingPage__ArgProps
  }
);

export default PlasmicCommonLandingPage;
/* prettier-ignore-end */
