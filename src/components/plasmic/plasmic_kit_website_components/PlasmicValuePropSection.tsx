// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: 6Zq5_xjO9F
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
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import ButtonLink from "../../ButtonLink"; // plasmic-import: jzdXOPDUzV/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k7xdGnvUtPZ_s/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicValuePropSection.module.css"; // plasmic-import: 6Zq5_xjO9F/css

import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 7p8MViVJAB/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon
import image6Zk4QpLvJs from "./images/image6.svg"; // plasmic-import: ZK4QPLv_Js/picture

export type PlasmicValuePropSection__VariantMembers = {
  backgroundColor:
    | "green"
    | "yellow"
    | "orange"
    | "coral"
    | "teal"
    | "blue"
    | "blue2"
    | "none";
  extras: "withExtraSlot1" | "centerAligned" | "withExtraSlot2";
};

export type PlasmicValuePropSection__VariantsArgs = {
  backgroundColor?: SingleChoiceArg<
    "green" | "yellow" | "orange" | "coral" | "teal" | "blue" | "blue2" | "none"
  >;
  extras?: MultiChoiceArg<
    "withExtraSlot1" | "centerAligned" | "withExtraSlot2"
  >;
};

type VariantPropType = keyof PlasmicValuePropSection__VariantsArgs;
export const PlasmicValuePropSection__VariantProps = new Array<VariantPropType>(
  "backgroundColor",
  "extras"
);

export type PlasmicValuePropSection__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  backgroundImage?: React.ReactNode;
  actionButton?: React.ReactNode;
  extraSlot?: React.ReactNode;
  slot62?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValuePropSection__ArgsType;
export const PlasmicValuePropSection__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "header",
  "icon",
  "backgroundImage",
  "actionButton",
  "extraSlot",
  "slot62"
);

export type PlasmicValuePropSection__OverridesType = {
  root?: p.Flex<"section">;
  container33?: p.Flex<"div">;
  extraSlot1?: p.Flex<"div">;
  extraSlot2?: p.Flex<"div">;
};

export interface DefaultValuePropSectionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  backgroundImage?: React.ReactNode;
  actionButton?: React.ReactNode;
  extraSlot?: React.ReactNode;
  slot62?: React.ReactNode;
  backgroundColor?: SingleChoiceArg<
    "green" | "yellow" | "orange" | "coral" | "teal" | "blue" | "blue2" | "none"
  >;
  extras?: MultiChoiceArg<
    "withExtraSlot1" | "centerAligned" | "withExtraSlot2"
  >;
  className?: string;
}

function PlasmicValuePropSection__RenderFunc(props: {
  variants: PlasmicValuePropSection__VariantsArgs;
  args: PlasmicValuePropSection__ArgsType;
  overrides: PlasmicValuePropSection__OverridesType;
  dataFetches?: PlasmicValuePropSection__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariants()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__backgroundColor_blue2]: hasVariant(
          variants,
          "backgroundColor",
          "blue2"
        ),
        [sty.root__backgroundColor_blue]: hasVariant(
          variants,
          "backgroundColor",
          "blue"
        ),
        [sty.root__backgroundColor_coral]: hasVariant(
          variants,
          "backgroundColor",
          "coral"
        ),
        [sty.root__backgroundColor_green]: hasVariant(
          variants,
          "backgroundColor",
          "green"
        ),
        [sty.root__backgroundColor_none]: hasVariant(
          variants,
          "backgroundColor",
          "none"
        ),
        [sty.root__backgroundColor_orange]: hasVariant(
          variants,
          "backgroundColor",
          "orange"
        ),
        [sty.root__backgroundColor_teal]: hasVariant(
          variants,
          "backgroundColor",
          "teal"
        ),
        [sty.root__backgroundColor_yellow]: hasVariant(
          variants,
          "backgroundColor",
          "yellow"
        ),
        [sty.root__extras_centerAligned]: hasVariant(
          variants,
          "extras",
          "centerAligned"
        ),
        [sty.root__extras_withExtraSlot1]: hasVariant(
          variants,
          "extras",
          "withExtraSlot1"
        ),
        [sty.root__global_theme_altHeadlineFont]: hasVariant(
          globalVariants,
          "theme",
          "altHeadlineFont"
        )
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.box__qQnIe, {
          [sty.box__backgroundColor_blue2__qQnIe2MZuk]: hasVariant(
            variants,
            "backgroundColor",
            "blue2"
          ),
          [sty.box__backgroundColor_blue__qQnIeulOvg]: hasVariant(
            variants,
            "backgroundColor",
            "blue"
          ),
          [sty.box__backgroundColor_green__qQnIEhLRbw]: hasVariant(
            variants,
            "backgroundColor",
            "green"
          ),
          [sty.box__backgroundColor_teal__qQnIEkGhQo]: hasVariant(
            variants,
            "backgroundColor",
            "teal"
          ),
          [sty.box__backgroundColor_yellow__qQnIEuIRhS]: hasVariant(
            variants,
            "backgroundColor",
            "yellow"
          ),
          [sty.box__extras_centerAligned__qQnIetwsav]: hasVariant(
            variants,
            "extras",
            "centerAligned"
          ),
          [sty.box__extras_withExtraSlot1__qQnIeVufcP]: hasVariant(
            variants,
            "extras",
            "withExtraSlot1"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__gp7Wn)}
              height={95 as const}
              role={"img"}
              src={image6Zk4QpLvJs}
              width={300 as const}
            />
          ),

          value: args.backgroundImage
        })}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"container33"}
        data-plasmic-override={overrides.container33}
        hasGap={true}
        className={classNames(defaultcss.all, sty.container33, {
          [sty.container33__backgroundColor_blue2]: hasVariant(
            variants,
            "backgroundColor",
            "blue2"
          ),
          [sty.container33__backgroundColor_blue]: hasVariant(
            variants,
            "backgroundColor",
            "blue"
          ),
          [sty.container33__backgroundColor_teal]: hasVariant(
            variants,
            "backgroundColor",
            "teal"
          ),
          [sty.container33__extras_centerAligned]: hasVariant(
            variants,
            "extras",
            "centerAligned"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <GraphicIcon
              className={classNames("__wab_instance", sty.graphicIcon__uqO9T)}
            >
              <Icon6Icon
                className={classNames(defaultcss.all, sty.svg__clLih)}
                role={"img"}
              />
            </GraphicIcon>
          ),

          value: args.icon
        })}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___9IxVq, {
            [sty.box__extras_centerAligned___9IxVqtwsav]: hasVariant(
              variants,
              "extras",
              "centerAligned"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__f8H6D, {
              [sty.box__extras_centerAligned__f8H6DTwsav]: hasVariant(
                variants,
                "extras",
                "centerAligned"
              ),
              [sty.box__global_theme_altHeadlineFont__f8H6DFQkvX]: hasVariant(
                globalVariants,
                "theme",
                "altHeadlineFont"
              )
            })}
          >
            <div className={classNames(defaultcss.all, sty.box__tgw42)}>
              {p.renderPlasmicSlot({
                defaultContents: "Adopt incrementally",
                value: args.header,
                className: classNames(sty.slotHeader)
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.box__quuat)}>
              {p.renderPlasmicSlot({
                defaultContents:
                  "Integrate into any existing React codebase in minutes.",
                value: args.title,
                className: classNames(sty.slotTitle, {
                  [sty.slotTitle__global_theme_altHeadlineFont]: hasVariant(
                    globalVariants,
                    "theme",
                    "altHeadlineFont"
                  )
                })
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.box__earlC)}>
              {p.renderPlasmicSlot({
                defaultContents:
                  "Whether you use Typescript or ES6, Gatsby or Next, Webpack or Parcel. Start with a single component and work up to an entire screen.",
                value: args.description,
                className: classNames(sty.slotDescription, {
                  [sty.slotDescription__extras_centerAligned]: hasVariant(
                    variants,
                    "extras",
                    "centerAligned"
                  )
                })
              })}
            </div>

            {(
              hasVariant(variants, "extras", "withExtraSlot1")
                ? true
                : hasVariant(variants, "extras", "withExtraSlot2")
                ? true
                : false
            ) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"extraSlot1"}
                data-plasmic-override={overrides.extraSlot1}
                hasGap={true}
                className={classNames(defaultcss.all, sty.extraSlot1, {
                  [sty.extraSlot1__extras_withExtraSlot1]: hasVariant(
                    variants,
                    "extras",
                    "withExtraSlot1"
                  ),
                  [sty.extraSlot1__extras_withExtraSlot2]: hasVariant(
                    variants,
                    "extras",
                    "withExtraSlot2"
                  )
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents:
                    "Whether you use Typescript or ES6, Gatsby or Next, Webpack or Parcel. Start with a single component and work up to an entire screen.",
                  value: args.extraSlot,
                  className: classNames(sty.slotExtraSlot, {
                    [sty.slotExtraSlot__extras_withExtraSlot1]: hasVariant(
                      variants,
                      "extras",
                      "withExtraSlot1"
                    )
                  })
                })}
              </p.Stack>
            ) : null}
            {(
              hasVariant(variants, "extras", "withExtraSlot2") ? true : false
            ) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"extraSlot2"}
                data-plasmic-override={overrides.extraSlot2}
                hasGap={true}
                className={classNames(defaultcss.all, sty.extraSlot2, {
                  [sty.extraSlot2__extras_withExtraSlot1]: hasVariant(
                    variants,
                    "extras",
                    "withExtraSlot1"
                  ),
                  [sty.extraSlot2__extras_withExtraSlot2]: hasVariant(
                    variants,
                    "extras",
                    "withExtraSlot2"
                  )
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents:
                    "Whether you use Typescript or ES6, Gatsby or Next, Webpack or Parcel. Start with a single component and work up to an entire screen.",
                  value: args.slot62,
                  className: classNames(sty.slotSlot62, {
                    [sty.slotSlot62__extras_withExtraSlot1]: hasVariant(
                      variants,
                      "extras",
                      "withExtraSlot1"
                    ),
                    [sty.slotSlot62__extras_withExtraSlot2]: hasVariant(
                      variants,
                      "extras",
                      "withExtraSlot2"
                    )
                  })
                })}
              </p.Stack>
            ) : null}
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__sSdcT)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <ButtonLink
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLink__tv6ZU
                  )}
                  icon={
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg___6Qi6S)}
                      role={"img"}
                    />
                  }
                  label={"Learn more"}
                />
              ),

              value: args.actionButton
            })}
          </p.Stack>
        </p.Stack>
      </p.Stack>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "container33", "extraSlot1", "extraSlot2"],
  container33: ["container33", "extraSlot1", "extraSlot2"],
  extraSlot1: ["extraSlot1"],
  extraSlot2: ["extraSlot2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  container33: "div";
  extraSlot1: "div";
  extraSlot2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValuePropSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValuePropSection__VariantsArgs;
    args?: PlasmicValuePropSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicValuePropSection__Fetches;
  } & Omit<PlasmicValuePropSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValuePropSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValuePropSection__ArgProps,
      internalVariantPropNames: PlasmicValuePropSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicValuePropSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValuePropSection";
  } else {
    func.displayName = `PlasmicValuePropSection.${nodeName}`;
  }
  return func;
}

export const PlasmicValuePropSection = Object.assign(
  // Top-level PlasmicValuePropSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container33: makeNodeComponent("container33"),
    extraSlot1: makeNodeComponent("extraSlot1"),
    extraSlot2: makeNodeComponent("extraSlot2"),

    // Metadata about props expected for PlasmicValuePropSection
    internalVariantProps: PlasmicValuePropSection__VariantProps,
    internalArgProps: PlasmicValuePropSection__ArgProps
  }
);

export default PlasmicValuePropSection;
/* prettier-ignore-end */
