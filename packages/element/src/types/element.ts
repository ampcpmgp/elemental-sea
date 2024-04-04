// prettier-ignore
export type ElementSymbol = "H" | "He" | "Li" | "Be" | "B" | "C" | "N" | "O" | "F" | "Ne" | "Na" | "Mg" | "Al" | "Si" | "P" | "S" | "Cl" | "Ar" | "K" | "Ca" | "Sc" | "Ti" | "V" | "Cr" | "Mn" | "Fe" | "Co" | "Ni" | "Cu" | "Zn" | "Ga" | "Ge" | "As" | "Se" | "Br" | "Kr" | "Rb" | "Sr" | "Y" | "Zr" | "Nb" | "Mo" | "Tc" | "Ru" | "Rh" | "Pd" | "Ag" | "Cd" | "In" | "Sn" | "Sb" | "Te" | "I" | "Xe" | "Cs" | "Ba" | "La" | "Ce" | "Pr" | "Nd" | "Pm" | "Sm" | "Eu" | "Gd" | "Tb" | "Dy" | "Ho" | "Er" | "Tm" | "Yb" | "Lu" | "Hf" | "Ta" | "W" | "Re" | "Os" | "Ir" | "Pt" | "Au" | "Hg" | "Tl" | "Pb" | "Bi" | "Po" | "At" | "Rn" | "Fr" | "Ra" | "Ac" | "Th" | "Pa" | "U" | "Np" | "Pu" | "Am" | "Cm" | "Bk" | "Cf" | "Es" | "Fm" | "Md" | "No" | "Lr" | "Rf" | "Db" | "Sg" | "Bh" | "Hs" | "Mt" | "Ds" | "Rg" | "Cn" | "Nh" | "Fl" | "Mc" | "Lv" | "Ts" | "Og";

export type ElementCategory =
  | "actinoid"
  | "alkali metal"
  | "alkaline earth metal"
  | "halogen"
  | "lanthanoid"
  | "metalloid"
  | "noble gas"
  | "nonmetal"
  | "post-transition metal"
  | "transition metal";

export type ElementPhase = "solid" | "liquid" | "gas";

export type ElementState = "standard" | "isotope";

export type ElementSource = "natural" | "synthetic";

export type ElementAppearance = "silvery" | "dull" | "metallic";

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
