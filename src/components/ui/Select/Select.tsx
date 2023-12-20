/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Check, ChevronDown, Search, X } from 'lucide-react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Variants, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useOnClickOutside } from '@/hooks/use-click-outside';
import { Badge } from '../Badge/Badge';
import { Option, SelectProps } from './types';

const Select: React.FC<SelectProps> = ({
  options,
  isMulti = false,
  isSearchable = false,
  onSelect,
  align = 'full-width',
  placeholder,
  triggerClassname,
  rootClassname,
  optionClassname,
  dropdownClassname,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  const [selectedValue, setSelectedValue] = React.useState<Option[] | null>();
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
    (option: Option) => selectedValue?.filter((o) => o.value !== option.value),
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

      if (searchValue) {
        const searchedOptions = options.filter(
          (option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
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
        'bg-background relative w-max cursor-pointer rounded-md text-left transition-all',
        rootClassname,
      )}
      ref={clickOutsideRef}
    >
      <button
        ref={inputRef}
        onClick={onTriggerClick}
        className={cn(
          `border-input bg-background ring-offset-background placeholder:text-muted-foreground f
          ocus:ring-ring flex h-10 min-w-[180px] items-center justify-between gap-2 overflow-hidden rounded-md border px-3 py-2 text-sm 
          focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
          triggerClassname,
        )}
      >
        <div
          className={cn(
            'scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin overflow-x-auto',
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

        <div
          className={cn('transition-transform', {
            'rotate-180': isDropdownOpen,
          })}
        >
          <ChevronDown className="h-4 w-4 opacity-50" />
        </div>
      </button>

      <motion.div
        className={cn(
          `bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out 
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
            data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 
            data-[side=top]:slide-in-from-bottom-2 scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin absolute z-50 
            max-h-96 min-w-[8rem] overflow-auto rounded-md border shadow-md`,
          dropdownClassname,
          {
            'left-0': align === 'left',
            'right-0': align === 'right',
            'left-0 w-full': align === 'full-width',
          },
        )}
        animate={isDropdownOpen ? 'open' : 'closed'}
        variants={animation}
        transition={{
          type: 'spring',
          stiffness: 360,
          damping: 30,
        }}
      >
        {isSearchable && (
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              className="placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
              },
              optionClassname,
            )}
          >
            {isOpenSelected(option) && (
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <Check className="h-4 w-4" />
              </span>
            )}
            <span>{option.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Select;
