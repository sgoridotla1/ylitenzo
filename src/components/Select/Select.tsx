import {
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxPopover,
} from '@reach/listbox'

import { CgChevronDown } from 'react-icons/cg'
import React from 'react'
import style from './style.module.css'

interface SelectProps {
  label: string
  defaultValue?: string
  items: {
    value: string
    name: string
  }[]
  onSelect: (selectedValue: string) => void
}

export const Select: React.FC<SelectProps> = ({
  defaultValue,
  label,
  items,
  onSelect,
}) => {
  const [value, setValue] = React.useState(defaultValue || '')

  React.useEffect(() => {
    onSelect(value)
  }, [value])

  return (
    <div className={style.selectWrapper}>
      <span className={style.label} id={label}>
        {label}
      </span>
      <ListboxInput
        aria-labelledby={label}
        value={value}
        onChange={(value) => setValue(value)}
        className={style.input}
      >
        <ListboxButton className={style.button} arrow={<CgChevronDown />} />
        <ListboxPopover className={style.popover} portal={false}>
          <ListboxList className={style.list}>
            {items.map((item) => (
              <ListboxOption value={item.value} className={style.option}>
                {item.name}
              </ListboxOption>
            ))}
          </ListboxList>
        </ListboxPopover>
      </ListboxInput>
    </div>
  )
}

export default Select
