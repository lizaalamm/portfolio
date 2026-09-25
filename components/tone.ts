/**
 * Colour tones used to give sections, cards and projects their own identity.
 * Every class string is written out literally so Tailwind can find it at build
 * time, and every text colour is verified at AA contrast or better.
 */
export type Tone = "teal" | "indigo" | "amber";

export type ToneStyle = {
  /** Raw hex, for gradients and inline accents. */
  hex: string;
  /** Soft tinted surface. */
  wash: string;
  /** Strong text colour, AA on paper and on the wash. */
  text: string;
  /** Base accent, used for small marks and rules. */
  mark: string;
  /** Tinted border. */
  border: string;
  /** Solid dot or bar. */
  solid: string;
  /** Oversized ghost numerals. */
  ghost: string;
};

export const tones: Record<Tone, ToneStyle> = {
  teal: {
    hex: "#0f766e",
    wash: "bg-accent-wash",
    text: "text-accent-2",
    mark: "text-accent",
    border: "border-accent/30",
    solid: "bg-accent",
    ghost: "text-accent/20",
  },
  indigo: {
    hex: "#4338ca",
    wash: "bg-indigo-wash",
    text: "text-indigo-deep",
    mark: "text-indigo",
    border: "border-indigo/30",
    solid: "bg-indigo",
    ghost: "text-indigo/20",
  },
  amber: {
    hex: "#9a3412",
    wash: "bg-amber-wash",
    text: "text-amber-deep",
    mark: "text-amber",
    border: "border-amber/30",
    solid: "bg-amber",
    ghost: "text-amber/20",
  },
};

export const tone = (name: string): ToneStyle => tones[(name as Tone) ?? "teal"] ?? tones.teal;