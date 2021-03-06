// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: WzZa1_nedVe
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
import BottomCtaSection from "../../BottomCtaSection"; // plasmic-import: MEBiyy_4nD/component
import Footer from "../../Footer"; // plasmic-import: 9R5YynM9KVp/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicPagePrototyping.module.css"; // plasmic-import: WzZa1_nedVe/css

import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: dU5ansm0Xg/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 7p8MViVJAB/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: 4WWM9dCuzI/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: D95fuAr7gP/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: Mj5CsVYcA9/icon
import image6Zk4QpLvJs from "./images/image6.svg"; // plasmic-import: ZK4QPLv_Js/picture
import image7RU1GD3ENw from "./images/image7.svg"; // plasmic-import: rU1g-d3eNw/picture
import image2XOaQbmepj8 from "./images/image2.svg"; // plasmic-import: xOaQbmepj8/picture

export type PlasmicPagePrototyping__VariantMembers = {};

export type PlasmicPagePrototyping__VariantsArgs = {};
type VariantPropType = keyof PlasmicPagePrototyping__VariantsArgs;
export const PlasmicPagePrototyping__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPagePrototyping__ArgsType = {};
type ArgPropType = keyof PlasmicPagePrototyping__ArgsType;
export const PlasmicPagePrototyping__ArgProps = new Array<ArgPropType>();

export type PlasmicPagePrototyping__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageHero?: p.Flex<typeof PageHero>;
  bottomCtaSection?: p.Flex<typeof BottomCtaSection>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPagePrototypingProps {
  className?: string;
}

function PlasmicPagePrototyping__RenderFunc(props: {
  variants: PlasmicPagePrototyping__VariantsArgs;
  args: PlasmicPagePrototyping__ArgsType;
  overrides: PlasmicPagePrototyping__OverridesType;
  dataFetches?: PlasmicPagePrototyping__Fetches;
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
        slot={"Prototyping that's 1 step away from production."}
        slot2={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__hmk6V)}
            colors={"purple" as const}
          >
            <Icon14Icon
              className={classNames(defaultcss.all, sty.svg___6CUez)}
              role={"img"}
            />
          </GraphicIcon>
        }
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__wsyRk
          )}
        >
          {"Prototyping"}
        </div>
      </PageHero>

      <ValuePropSection
        backgroundColor={"coral" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__eVbcR)}
            height={95 as const}
            role={"img"}
            src={image6Zk4QpLvJs}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__uOtIi)}
        description={
          "Rapidly design your user interface in the final medium. Stop guessing your flex-basis, or manually dancing around a cross-browser flex-gap. "
        }
        header={"full control"}
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__gLBpN)}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg__sms4L)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__qUb5H
            )}
          >
            {"Test your ideas quickly"}
          </div>
        }
      />

      <ValuePropSection
        backgroundColor={"green" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__eGlEl)}
            height={145 as const}
            role={"img"}
            src={image7RU1GD3ENw}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__zjRoC)}
        description={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__oqfWr
            )}
          >
            {
              "Don't limit yourself to a throwaway prototype. Plasmic generates maintainable production-ready presentational components so you can ship faster."
            }
          </div>
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__whPqE
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__qRmrN)}
            colors={"green" as const}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg__tVtsR)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Automatically get ready-to-use React components"}
      />

      <ValuePropSection
        backgroundColor={"yellow" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__hufA)}
            height={92 as const}
            role={"img"}
            src={image2XOaQbmepj8}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__yY768)}
        description={
          "Plasmic's component API gives you complete freedom to attach arbitrary logic and state to build powerful interactive components. Flexibly consume components as a library of presentational components, or directly edit the component???s JSX tree???Plasmic supports multiple codegen schemes with an emphasis on clean code and best practices. "
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__bz2YU
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__rTsoa)}
            colors={"yellow" as const}
          >
            <Icon10Icon
              className={classNames(defaultcss.all, sty.svg__twc8)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"No-compromise developer control"}
      />

      <ValuePropSection
        backgroundColor={"orange" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__cjTqj)}
            height={145 as const}
            role={"img"}
            src={image7RU1GD3ENw}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection___0MeFd)}
        description={
          "Continuously sync the latest changes with the code. Plasmic separates presentation from logic so that new changes are easily adopted without conflicts."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__nTxJh
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__aRo5L)}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg__brYrc)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Continuously iterate on your UI/UX"}
      />

      <ValuePropSection
        backgroundColor={"orange" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__a6J9)}
            height={145 as const}
            role={"img"}
            src={image7RU1GD3ENw}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__hwLl2)}
        description={
          "Invite and empower your design colleagues to collaborate on the design of the final product. Say goodbye to handoffs altogether, and to divergent sources of truth between design files and code."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__rauNi
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__wt4D8)}
          >
            <Icon11Icon
              className={classNames(defaultcss.all, sty.svg__qMzYg)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Fix design-engineering collaboration."}
      />

      <ValuePropSection
        backgroundColor={"green" as const}
        backgroundImage={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__b9Bgm)}
            height={145 as const}
            role={"img"}
            src={image7RU1GD3ENw}
            width={300 as const}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__rzzX)}
        description={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__sKqCh
            )}
          >
            {
              "Check the React components into your git repository. You own everything you make in Plasmic. Want to eject? Walk away any time with plain React code."
            }
          </div>
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__tfvx5
            )}
          >
            {"Eject anytime"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__rLvEx)}
            colors={"green" as const}
          >
            <Icon5Icon
              className={classNames(defaultcss.all, sty.svg__hVenQ)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Zero lock-in"}
      />

      <BottomCtaSection
        data-plasmic-name={"bottomCtaSection"}
        data-plasmic-override={overrides.bottomCtaSection}
        className={classNames("__wab_instance", sty.bottomCtaSection)}
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
  root: ["root", "header", "pageHero", "bottomCtaSection", "footer"],
  header: ["header"],
  pageHero: ["pageHero"],
  bottomCtaSection: ["bottomCtaSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageHero: typeof PageHero;
  bottomCtaSection: typeof BottomCtaSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPagePrototyping__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPagePrototyping__VariantsArgs;
    args?: PlasmicPagePrototyping__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPagePrototyping__Fetches;
  } & Omit<PlasmicPagePrototyping__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPagePrototyping__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPagePrototyping__ArgProps,
      internalVariantPropNames: PlasmicPagePrototyping__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPagePrototyping__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPagePrototyping";
  } else {
    func.displayName = `PlasmicPagePrototyping.${nodeName}`;
  }
  return func;
}

export const PlasmicPagePrototyping = Object.assign(
  // Top-level PlasmicPagePrototyping renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageHero: makeNodeComponent("pageHero"),
    bottomCtaSection: makeNodeComponent("bottomCtaSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPagePrototyping
    internalVariantProps: PlasmicPagePrototyping__VariantProps,
    internalArgProps: PlasmicPagePrototyping__ArgProps
  }
);

export default PlasmicPagePrototyping;
/* prettier-ignore-end */
