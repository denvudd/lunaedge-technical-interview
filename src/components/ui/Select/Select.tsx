/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// libs
import { Check, ChevronDown, Loader2, Search, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Variants, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useOnClickOutside } from '@/hooks/use-click-outside';
// components
import { Badge } from '@/components/ui/Badge/Badge';
// types
import { type Option, type SelectProps } from './types';

const Select: React.FC<SelectProps> = ({
  options,
  isMulti = false,
  isSearchable = false,
  isLoading = false,
  onSelect = () => {},
  align = 'full-width',
  placeholder,
  disabled,
  triggerClassname,
  rootClassname,
  optionClassname,
  isError,
  value = null,
  size = 'md',
  dropdownClassname,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  const [selectedValue, setSelectedValue] = React.useState<Option[] | null>(value ?? null);
  const [searchValue, setSearchValue] = React.useState('');
  const [sortedOptions, setSortedOptions] = React.useState<Option[]>(options);

  const searchRef = React.useRef<HTMLInputElement | null>(null);
  const inputRef = React.useRef<HTMLButtonElement | null>(null);
  const clickOutsideRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (isDropdownOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isDropdownOpen]);

  const removeOption = React.useCallback(
    (option: Option) => selectedValue?.filter((o) => o.value !== option.value) ?? null,
    [selectedValue],
  );

  const removeTag = React.useCallback(
    (e: React.MouseEvent<HTMLSpanElement>, option: Option) => {
      e.stopPropagation();

      const newValue = removeOption(option);

      setSelectedValue(newValue);
      onSelect(newValue);
    },
    [selectedValue],
  );

  const openDropdown = () => {
    setIsDropdownOpen(true);
    setSortedOptions(options);
    setSearchValue('');
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const onTriggerClick = () => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const onOptionClick = React.useCallback(
    (option: Option) => {
      let newValue;

      if (isMulti) {
        if (selectedValue && selectedValue.findIndex((o) => o.value === option.value) >= 0) {
          newValue = removeOption(option);
        } else if (selectedValue) {
          newValue = [...selectedValue, option];
        } else {
          newValue = [option];
        }
      } else {
        newValue = [option];
      }

      setSelectedValue(newValue);
      onSelect(newValue);
    },
    [selectedValue, isMulti],
  );

  const onSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearchValue(value);

      if (!!value) {
        const searchedOptions = options.filter(
          (option) => option.label.toLowerCase().indexOf(value.toLowerCase()) >= 0,
        );

        setSortedOptions(searchedOptions);
      } else {
        setSortedOptions(options);
      }
    },
    [options, searchValue],
  );

  const isOpenSelected = (option: Option) => {
    if (isMulti) {
      return selectedValue
        ? selectedValue.filter((o) => o.value === option.value).length > 0
        : false;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue[0].value === option.value;
  };

  const animation: Variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, zIndex: '-999', scale: 0 },
  };

  const isSelectEmpty = !selectedValue || selectedValue.length === 0;
  const isSelectMulti = isMulti && !isSelectEmpty;

  useOnClickOutside(clickOutsideRef, closeDropdown);

  return (
    <div
      className={cn(
        'relative z-[9999] w-full cursor-pointer rounded-md bg-white text-left transition-all',
        rootClassname,
      )}
      ref={clickOutsideRef}
    >
      <button
        ref={inputRef}
        onClick={onTriggerClick}
        type="button"
        disabled={disabled ?? isLoading}
        className={cn(
          `border-input ring-offset-background placeholder:text-muted-foreground f ocus:ring-ring
          flex h-10 w-full min-w-[180px] items-center justify-between gap-2 overflow-hidden rounded-md border bg-white px-3 py-2 
          text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
          triggerClassname,
          {
            'border-red-400': isError,
            'py-1, px-2, h-8': size === 'sm',
            'py-4, px-3, h-11': size === 'lg',
          },
        )}
      >
        <div
          className={cn(
            'scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin z-[9999] overflow-x-auto',
            {
              'text-gray-300': !selectedValue || selectedValue.length === 0,
            },
          )}
        >
          {isSelectEmpty && placeholder}
          {!isSelectEmpty && isSelectMulti && (
            <div className="flex items-center gap-2">
              {selectedValue.map((option) => (
                <Badge
                  variant="info"
                  onClick={(e) => removeTag(e, option)}
                  className="flex items-center gap-1"
                >
                  {option.label}
                  <X className="h-4 w-4 opacity-50 " />
                </Badge>
              ))}
            </div>
          )}
          {!isSelectEmpty && !isSelectMulti && selectedValue[0].label}
        </div>

        {isLoading ? (
          <div>
            <Loader2 className="h-4 w-4 animate-spin opacity-50" />
          </div>
        ) : (
          <div
            className={cn('transition-transform', {
              'rotate-180': isDropdownOpen,
            })}
          >
            <ChevronDown className="h-4 w-4 opacity-50" />
          </div>
        )}
      </button>

      <motion.div
        className={cn(
          `text-secondary-foreground scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin
           absolute z-[9999] max-h-96 min-w-[8rem] overflow-auto rounded-md border bg-white shadow-md`,
          dropdownClassname,
          {
            'left-0': align === 'left',
            'right-0': align === 'right',
            'left-0 w-full': align === 'full-width',
            'border-red-400': isError,
          },
        )}
        initial={false}
        animate={isDropdownOpen ? 'open' : 'closed'}
        variants={animation}
        transition={{
          type: 'spring',
          stiffness: 360,
          damping: 30,
        }}
      >
        {isSearchable && (
          <div
            className={cn('flex items-center border-b px-3', {
              'border-b-red-400': isError,
            })}
          >
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              className={cn(
                'placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-white py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
                {
                  'py-2, h-9': size === 'sm',
                },
              )}
              onChange={onSearch}
              value={searchValue}
              ref={searchRef}
            />
          </div>
        )}
        {sortedOptions.map((option) => (
          <div
            onClick={() => onOptionClick(option)}
            key={uuidv4()}
            className={cn(
              `focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground relative flex w-full cursor-pointer
                select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
              {
                'opacity-50 font-semibold': isOpenSelected(option),
                'cursor-default': !isDropdownOpen,
                'py-1': size === 'sm',
                'py-2': size === 'lg',
              },
              optionClassname,
            )}
          >
            {isOpenSelected(option) && (
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <Check className="h-4 w-4" />
              </span>
            )}
            <span
              className={cn({
                'text-red-400': isError,
                'text-base': size === 'md',
                'text-sm': size === 'sm',
                'text-lg': size === 'lg',
              })}
            >
              {option.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Select;
