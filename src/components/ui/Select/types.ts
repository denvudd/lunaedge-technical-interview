export interface Option {
  label: string;
  value: string | number | React.ReactNode;
}

export interface SelectProps {
  /** Class name for the root element. */
  rootClassname?: string;
  /** Class name for the trigger button including search */
  triggerClassname?: string;
  /** Class name for the each option. */
  optionClassname?: string;
  /** Class name for the dropdown including search input. */
  dropdownClassname?: string;
  /** Options to be displayed in the dropdown. You can pass value as string, number or React node if you want to customize your options.
   * @type { label: string, value: string | number | React.ReactNode }
   */
  options: Option[];
  /** If true, the dropdown will be multi-select. Default is false. Each option can only be selected once.
   * @default false
   * @type boolean
   */
  isMulti?: boolean;
  /** If true, the dropdown will be searchable. Default is false.
   * @default false
   * @type boolean
   */
  isSearchable?: boolean;
  /** If true, the dropdown will be in loading state, disabled and displayed spinner.
   * @default false
   * @type boolean
   */
  isLoading?: boolean;
  /** If true, the dropdown will be disabled and cannot be selected.
   * @default false
   * @type boolean
   */
  disabled?: boolean;
  /** Function to be called when an option is selected. Argument is an array of selected options.
   * @type (option: Option[] | undefined) => void
   */
  onSelect: (option: Option[] | undefined) => void;
  /** Alignment of the select dropdown. Default is 'full-width'
   * @type 'left' | 'right' | 'full-width'
   * @default 'full-width'
   */
  align?: 'left' | 'right' | 'full-width';
  placeholder: string;
}
