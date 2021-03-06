// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: PwVbfz5ruck
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
import Header from "../../Header"; // plasmic-import: vtgKf8zu4R/component
import PageHero from "../../PageHero"; // plasmic-import: MaAtk98o9f/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import ValuePropSection from "../../ValuePropSection"; // plasmic-import: 6Zq5_xjO9F/component
import ButtonLink from "../../ButtonLink"; // plasmic-import: jzdXOPDUzV/component
import Footer from "../../Footer"; // plasmic-import: 9R5YynM9KVp/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicPageSiteBuilder.module.css"; // plasmic-import: PwVbfz5ruck/css

import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: mrC2Ljeqti/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 7p8MViVJAB/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: 4WWM9dCuzI/icon
import image6Zk4QpLvJs from "./images/image6.svg"; // plasmic-import: ZK4QPLv_Js/picture
import image7RU1GD3ENw from "./images/image7.svg"; // plasmic-import: rU1g-d3eNw/picture
import image2XOaQbmepj8 from "./images/image2.svg"; // plasmic-import: xOaQbmepj8/picture

export type PlasmicPageSiteBuilder__VariantMembers = {};

export type PlasmicPageSiteBuilder__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageSiteBuilder__VariantsArgs;
export const PlasmicPageSiteBuilder__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPageSiteBuilder__ArgsType = {};
type ArgPropType = keyof PlasmicPageSiteBuilder__ArgsType;
export const PlasmicPageSiteBuilder__ArgProps = new Array<ArgPropType>();

export type PlasmicPageSiteBuilder__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageHero?: p.Flex<typeof PageHero>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPageSiteBuilderProps {
  className?: string;
}

function PlasmicPageSiteBuilder__RenderFunc(props: {
  variants: PlasmicPageSiteBuilder__VariantsArgs;
  args: PlasmicPageSiteBuilder__ArgsType;
  overrides: PlasmicPageSiteBuilder__OverridesType;
  dataFetches?: PlasmicPageSiteBuilder__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <Header
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames("__wab_instance", sty.header)}
      />

      <PageHero
        data-plasmic-name={"pageHero"}
        data-plasmic-override={overrides.pageHero}
        className={classNames("__wab_instance", sty.pageHero)}
      />

      <ValuePropSection
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__weTN)}
            height={95 as const}
            role={"img"}
            src={image6Zk4QpLvJs}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__pyrrZ)}
        description={
          "Keep full control how your content looks and feels in production directly from Plasmic. What you see is what you get."
        }
        header={"full control"}
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon___1IAaP)}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg___6ZDfZ)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__inc0J
            )}
          >
            {"Powerful editing experience"}
          </div>
        }
      />

      <ValuePropSection
        backgroundColor={"green" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__elq)}
            height={145 as const}
            role={"img"}
            src={image7RU1GD3ENw}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection___35O1F)}
        description={
          "Need to make a quick change? Publish directly from Plasmic, no need to bring up a development environment."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___89EY
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon___0TcVn)}
            colors={"green" as const}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg__k77HT)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Zero lock-in"}
      />

      <ValuePropSection
        backgroundColor={"yellow" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__htyQb)}
            height={92 as const}
            role={"img"}
            src={image2XOaQbmepj8}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__lhwty)}
        description={
          "Iterate quickly on new designs and content and get to market faster. Ship faster, learn faster."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__lXfWk
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__acRek)}
            colors={"yellow" as const}
          >
            <Icon10Icon
              className={classNames(defaultcss.all, sty.svg__tzOYk)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"?????? Jamstack"}
      />

      <ValuePropSection
        backgroundColor={"orange" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__pHlv)}
            height={145 as const}
            role={"img"}
            src={image7RU1GD3ENw}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__bom2F)}
        description={
          "No need to change or replace your existing stack. Start with a blurb on a page."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__bQ4FV
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__uWvfM)}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg__tB408)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"No-compromise developer control"}
      />

      <Footer
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames("__wab_instance", sty.footer)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "pageHero", "footer"],
  header: ["header"],
  pageHero: ["pageHero"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageHero: typeof PageHero;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageSiteBuilder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageSiteBuilder__VariantsArgs;
    args?: PlasmicPageSiteBuilder__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPageSiteBuilder__Fetches;
  } & Omit<PlasmicPageSiteBuilder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPageSiteBuilder__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPageSiteBuilder__ArgProps,
      internalVariantPropNames: PlasmicPageSiteBuilder__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPageSiteBuilder__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageSiteBuilder";
  } else {
    func.displayName = `PlasmicPageSiteBuilder.${nodeName}`;
  }
  return func;
}

export const PlasmicPageSiteBuilder = Object.assign(
  // Top-level PlasmicPageSiteBuilder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageHero: makeNodeComponent("pageHero"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPageSiteBuilder
    internalVariantProps: PlasmicPageSiteBuilder__VariantProps,
    internalArgProps: PlasmicPageSiteBuilder__ArgProps
  }
);

export default PlasmicPageSiteBuilder;
/* prettier-ignore-end */
