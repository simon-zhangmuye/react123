// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: CVIy61AA1u
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
import CommonLandingPage from "../../CommonLandingPage"; // plasmic-import: HzhMCW_ztWQ/component
import IntegrateAnywhereSection from "../../IntegrateAnywhereSection"; // plasmic-import: dxALvsaixcT/component
import ValuePropListItem from "../../ValuePropListItem"; // plasmic-import: lJppbKgSOw/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import Divider from "../../Divider"; // plasmic-import: SQHouqji3_/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicGatsbyBuilder.module.css"; // plasmic-import: CVIy61AA1u/css

import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: d8TOpAp1CP/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: YhhYiXTtXT/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: 5amV9exkN9/icon

export type PlasmicGatsbyBuilder__VariantMembers = {};

export type PlasmicGatsbyBuilder__VariantsArgs = {};
type VariantPropType = keyof PlasmicGatsbyBuilder__VariantsArgs;
export const PlasmicGatsbyBuilder__VariantProps = new Array<VariantPropType>();

export type PlasmicGatsbyBuilder__ArgsType = {};
type ArgPropType = keyof PlasmicGatsbyBuilder__ArgsType;
export const PlasmicGatsbyBuilder__ArgProps = new Array<ArgPropType>();

export type PlasmicGatsbyBuilder__OverridesType = {
  root?: p.Flex<"div">;
  commonLandingPage?: p.Flex<typeof CommonLandingPage>;
};

export interface DefaultGatsbyBuilderProps {
  className?: string;
}

function PlasmicGatsbyBuilder__RenderFunc(props: {
  variants: PlasmicGatsbyBuilder__VariantsArgs;
  args: PlasmicGatsbyBuilder__ArgsType;
  overrides: PlasmicGatsbyBuilder__OverridesType;
  dataFetches?: PlasmicGatsbyBuilder__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root,
            {
              [sty.root__global_theme_altHeadlineFont]: hasVariant(
                globalVariants,
                "theme",
                "altHeadlineFont"
              ),
              [sty.root__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            }
          )}
        >
          <CommonLandingPage
            data-plasmic-name={"commonLandingPage"}
            data-plasmic-override={overrides.commonLandingPage}
            className={classNames("__wab_instance", sty.commonLandingPage)}
            gatsby={"gatsby" as const}
            slot={"The most powerful page builder for Gatsby."}
            slot2={
              <span>
                <span style={{ fontWeight: 700 }}>{"Unblock your team"}</span>
                <React.Fragment>
                  {
                    ". Empower anyone to design and ship content lightning-fast for your Gatsby codebase."
                  }
                </React.Fragment>
              </span>
            }
            slot3={
              "Starting on something new? Generate a complete Gatsby codebase from scratch. Start a GitHub repo straight from within Plasmic, or run the create-plasmic-app CLI."
            }
            slot4={
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__fhXja)}
              >
                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon___25X8Q
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon21Icon
                        className={classNames(defaultcss.all, sty.svg__h5S9)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"No-code autonomy."}
                />

                <Divider
                  className={classNames("__wab_instance", sty.divider__lAaFh)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__wwb4G
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon20Icon
                        className={classNames(defaultcss.all, sty.svg___5NtkB)}
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
                      sty.box__gKlLh
                    )}
                  >
                    {
                      "Let developers focus on code, not pixel-pushing. Or use Plasmic to accelerate frontend development."
                    }
                  </div>
                </ValuePropListItem>

                <Divider
                  className={classNames("__wab_instance", sty.divider__qLbqc)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon___6A6Yx
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon22Icon
                        className={classNames(defaultcss.all, sty.svg__hVsC)}
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
                      sty.box__omfPl
                    )}
                  >
                    {
                      "Keep everyone on the same page, with a single source of truth for design and production."
                    }
                  </div>
                </ValuePropListItem>
              </p.Stack>
            }
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__q7Z1
              )}
            >
              {"Make your Gatsby site editable to the whole team."}
            </div>
          </CommonLandingPage>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "commonLandingPage"],
  commonLandingPage: ["commonLandingPage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  commonLandingPage: typeof CommonLandingPage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGatsbyBuilder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGatsbyBuilder__VariantsArgs;
    args?: PlasmicGatsbyBuilder__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicGatsbyBuilder__Fetches;
  } & Omit<PlasmicGatsbyBuilder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGatsbyBuilder__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicGatsbyBuilder__ArgProps,
      internalVariantPropNames: PlasmicGatsbyBuilder__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicGatsbyBuilder__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGatsbyBuilder";
  } else {
    func.displayName = `PlasmicGatsbyBuilder.${nodeName}`;
  }
  return func;
}

export const PlasmicGatsbyBuilder = Object.assign(
  // Top-level PlasmicGatsbyBuilder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    commonLandingPage: makeNodeComponent("commonLandingPage"),

    // Metadata about props expected for PlasmicGatsbyBuilder
    internalVariantProps: PlasmicGatsbyBuilder__VariantProps,
    internalArgProps: PlasmicGatsbyBuilder__ArgProps
  }
);

export default PlasmicGatsbyBuilder;
/* prettier-ignore-end */
