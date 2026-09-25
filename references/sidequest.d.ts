import type * as React from 'react';

export type Tone = 'sunset' | 'purple' | 'teal' | 'sky' | 'pink' | 'sage' | 'coral' | 'neutral';
export type Category = 'Work' | 'Travel' | 'Play' | 'Gaming' | 'Health' | 'Finance' | 'Ideas' | 'Home' | 'Personal' | string;
export type IconName = 'home' | 'work' | 'travel' | 'play' | 'growth' | 'search' | 'chevron-down' | 'heart' | 'heart-fill'
  | 'check-circle' | 'info' | 'warning' | 'close' | 'check' | 'plus' | 'sparkle' | 'sunset';

/** Secondary by default; one primary (sunset) per view. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  icon?: IconName;
  /** Round icon button; the string children become its aria-label. */
  iconOnly?: boolean;
  href?: string;
}
export declare function Button(props: ButtonProps): React.ReactElement;

/** A category or value pill. */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** Picks the hue and, with no children, the label. */
  category?: Category;
  tone?: Tone;
  /** Solid value pill (Curiosity, Adventure, Creativity, Balance). */
  variant?: 'soft' | 'solid';
  href?: string;
}
export declare function Tag(props: TagProps): React.ReactElement;

/** A place, project or idea with media, a category eyebrow and a favorite heart. */
export interface CardProps {
  title: React.ReactNode;
  category?: Category;
  tone?: Tone;
  media?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  favorite?: boolean;
  defaultFavorite?: boolean;
  onFavoriteChange?: (favorite: boolean) => void;
  favoritable?: boolean;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  className?: string;
}
export declare function Card(props: CardProps): React.ReactElement;

/** A dismissible message: success, info or danger. */
export interface AlertProps {
  kind?: 'success' | 'info' | 'danger';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
  className?: string;
}
export declare function Alert(props: AlertProps): React.ReactElement | null;

/** A labeled text field with an optional leading icon, hint or error. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  icon?: IconName;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}
export declare function Input(props: InputProps): React.ReactElement;

/** A labeled native dropdown. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'defaultValue'> {
  label?: React.ReactNode;
  options: Array<string | { value: string; label: string }>;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}
export declare function Select(props: SelectProps): React.ReactElement;

/** A toggle that takes effect immediately. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}
export declare function Switch(props: SwitchProps): React.ReactElement;

/** A native checkbox with a sunset check. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
}
export declare function Checkbox(props: CheckboxProps): React.ReactElement;

export interface NavItem { id: string; label: string; icon: IconName; href?: string }
/** The five-tab bar: Home, Work, Travel, Play, Growth. */
export interface NavBarProps {
  items?: NavItem[];
  active?: string;
  defaultActive?: string;
  onSelect?: (id: string) => void;
  'aria-label'?: string;
  className?: string;
}
export declare function NavBar(props: NavBarProps): React.ReactElement;

/** A Phosphor glyph in currentColor. */
export interface IconProps { name: IconName; size?: number; title?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;

declare global {
  interface Window {
    Sidequest: {
      Button: typeof Button; Tag: typeof Tag; Card: typeof Card; Alert: typeof Alert;
      Input: typeof Input; Select: typeof Select; Switch: typeof Switch; Checkbox: typeof Checkbox;
      NavBar: typeof NavBar; Icon: typeof Icon;
      iconNames: IconName[];
      categoryTone: (category: Category) => Tone;
    };
  }
}
