export interface Option {
  label: string;
  value: string | number;
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
  /** Options to be displayed in the dropdown. You can pass value as string or number.
   * @type { label: string, value: string | number }
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
  /** If true, the dropdown will be in error state. You can customize the error visual error state using triggerClassname prop.
   * @default false
   * @type boolean
   */
  isError?: boolean;
  /** Size of whole select. Default is 'md' (medium).
   * @type 'sm' | 'md' | 'lg'
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /** Current value of the select. Default is null.
   * @type Option[] | null
   * @default null
   */
  value?: Option[] | null;
  disabled?: boolean;
  /** Function to be called when an option is selected. Argument is an array of selected options.
   * @type (option: Option[] | undefined) => void
   */
  onSelect?: (option: Option[] | null) => void;
  /** Alignment of the select dropdown. Default is 'full-width'
   * @type 'left' | 'right' | 'full-width'
   * @default 'full-width'
   */
  align?: 'left' | 'right' | 'full-width';
  placeholder?: string;
}
