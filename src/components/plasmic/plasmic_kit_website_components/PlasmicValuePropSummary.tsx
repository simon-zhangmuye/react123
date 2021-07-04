// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: 2LcO8okO6S
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
import ValuePropCard from "../../ValuePropCard"; // plasmic-import: qSazSuRq3D/component
import FirstStepLink from "../../FirstStepLink"; // plasmic-import: ncmAa8DpLu/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k7xdGnvUtPZ_s/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicValuePropSummary.module.css"; // plasmic-import: 2LcO8okO6S/css

import image13CcufmIpOc from "./images/image13.png"; // plasmic-import: ccufmIpOC/picture
import image385XxeDTi2 from "./images/image38.png"; // plasmic-import: 5xxeDTi_2/picture
import image36DHsf7IqGn from "./images/image36.png"; // plasmic-import: dHsf7IqGN/picture

export type PlasmicValuePropSummary__VariantMembers = {};

export type PlasmicValuePropSummary__VariantsArgs = {};
type VariantPropType = keyof PlasmicValuePropSummary__VariantsArgs;
export const PlasmicValuePropSummary__VariantProps =
  new Array<VariantPropType>();

export type PlasmicValuePropSummary__ArgsType = {};
type ArgPropType = keyof PlasmicValuePropSummary__ArgsType;
export const PlasmicValuePropSummary__ArgProps = new Array<ArgPropType>();

export type PlasmicValuePropSummary__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
};

export interface DefaultValuePropSummaryProps {
  className?: string;
}

function PlasmicValuePropSummary__RenderFunc(props: {
  variants: PlasmicValuePropSummary__VariantsArgs;
  args: PlasmicValuePropSummary__ArgsType;
  overrides: PlasmicValuePropSummary__OverridesType;
  dataFetches?: PlasmicValuePropSummary__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <ValuePropCard
        className={classNames("__wab_instance", sty.valuePropCard___66YFw)}
        descrip={"Visually build pages and components."}
        img={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__eolxh)}
            height={625 as const}
            role={"img"}
            src={image13CcufmIpOc}
            width={781 as const}
          />
        }
      />

      <ValuePropCard
        className={classNames("__wab_instance", sty.valuePropCard__xE1Y3)}
        img={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__mxzx8)}
            height={364 as const}
            role={"img"}
            src={image385XxeDTi2}
            width={984 as const}
          />
        }
        num={"2"}
      />

      <ValuePropCard
        className={classNames("__wab_instance", sty.valuePropCard__nKUw4)}
        descrip={"See it in production."}
        img={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__qyWyu)}
            height={1237 as const}
            role={"img"}
            src={image36DHsf7IqGn}
            width={1239 as const}
          />
        }
        num={"3"}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(defaultcss.all, sty.columns)}
      >
        <div className={classNames(defaultcss.all, sty.column__mU2T)}>
          <FirstStepLink
            className={classNames("__wab_instance", sty.firstStepLink__dxCen)}
            destination={"/learn/intro" as const}
          >
            {"Intro to Plasmic ➔"}
          </FirstStepLink>
        </div>

        <div className={classNames(defaultcss.all, sty.column__ywcKg)}>
          <FirstStepLink
            className={classNames("__wab_instance", sty.firstStepLink__dqNhe)}
            destination={"/learn/quickstart" as const}
            slot={
              "Integrate Plasmic into a React codebase in a couple minutes."
            }
          >
            {"Developer Quickstart ➔"}
          </FirstStepLink>
        </div>

        <div className={classNames(defaultcss.all, sty.column__vyV8M)}>
          <FirstStepLink
            className={classNames("__wab_instance", sty.firstStepLink__xXlC)}
            destination={"https://studio.plasmic.app/starters/game" as const}
            slot={"Play Plasmic Levels to learn the basics."}
          >
            {"Learn Plasmic Studio ➔"}
          </FirstStepLink>
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValuePropSummary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValuePropSummary__VariantsArgs;
    args?: PlasmicValuePropSummary__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicValuePropSummary__Fetches;
  } & Omit<PlasmicValuePropSummary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValuePropSummary__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValuePropSummary__ArgProps,
      internalVariantPropNames: PlasmicValuePropSummary__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicValuePropSummary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValuePropSummary";
  } else {
    func.displayName = `PlasmicValuePropSummary.${nodeName}`;
  }
  return func;
}

export const PlasmicValuePropSummary = Object.assign(
  // Top-level PlasmicValuePropSummary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicValuePropSummary
    internalVariantProps: PlasmicValuePropSummary__VariantProps,
    internalArgProps: PlasmicValuePropSummary__ArgProps
  }
);

export default PlasmicValuePropSummary;
/* prettier-ignore-end */
