import { elementSymbols } from "../constants/element-symbols";

export interface Element {
  symbol: ElementSymbol;
  number: number;
  category: ElementCategory;
}

// array to union
export type ElementSymbol = (typeof elementSymbols)[number];

export type ElementCategory =
  | "Nonmetal"
  | "Noble Gas"
  | "Alkali Metal"
  | "Alkaline Earth Metal"
  | "Metalloid"
  | "Halogen"
  | "Post-transition Metal"
  | "Transition Metal"
  | "Lanthanide"
  | "Actinide"
  | "Unknown";

export type ElementPhase = "solid" | "liquid" | "gas";

export type ElementState = "standard" | "isotope";

export type ElementSource = "natural" | "synthetic";

export type ElementAppearance = "silvery" | "dull" | "metallic" | "colorless";

export type ElementAtomicStructure =
  | "body-centered cubic"
  | "face-centered cubic"
  | "hexagonal close-packed";

export type ElementIonizationEnergy = "first" | "second" | "third";

export type ElementElectronAffinity = "first";

export type ElementElectronegativity = "pauling";

export type ElementType = "element" | "isotope";

export type ElementStandardState = "solid" | "liquid" | "gas";

export type ElementBondingType =
  | "metallic"
  | "covalent network"
  | "atomic"
  | "metallic network"
  | "ionic";

export type ElementMagneticType =
  | "paramagnetic"
  | "diamagnetic"
  | "ferromagnetic"
  | "antiferromagnetic"
  | "superconductor";

export type ElementRadioactiveType =
  | "primordial"
  | "decay product"
  | "from decay";

export type ElementOccurrence = "primordial" | "from decay";

export type ElementGroupBlock = "s-block" | "p-block" | "d-block" | "f-block";

export type ElementCrystalStructure =
  | "simple cubic"
  | "body-centered cubic"
  | "face-centered cubic"
  | "hexagonal";

export type ElementHistory = "ancient" | "unknown" | "predicted" | "discovered";

export type ElementDiscovery =
  | "ancient"
  | "unknown"
  | "predicted"
  | "discovered";

export type ElementYear = number;

export type ElementDensity = number;

export type ElementMelt = number;

export type ElementBoil = number;

export type ElementMolarHeat = number;
