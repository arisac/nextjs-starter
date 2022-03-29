import React from 'react'
import { Fragment, useEffect, useState } from 'react'
import { MoonIcon, SunIcon, DesktopComputerIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { Listbox } from '@headlessui/react'

let settings = [
  {
    value: 'light',
    label: 'Light',
    icon: SunIcon,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: MoonIcon,
  },
  {
    value: 'system',
    label: 'System',
    icon: DesktopComputerIcon,
  },
]

export function ThemeToggle(props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const menuPosition = props.menuPosition || 'left-0'

  return (
    <span className="relative">
      <Listbox value={theme} onChange={setTheme}>
        <Listbox.Label className="sr-only">Theme</Listbox.Label>
        <Listbox.Button type="button">
          <div className="group mx-1 rounded-full p-1 hover:bg-slate-200 dark:hover:bg-slate-800">
            <SunIcon
              className={
                'inline-block h-6 w-6 dark:hidden ' +
                (theme !== 'system' && theme === 'light' ? 'text-red-400' : 'text-slate-500')
              }
            />
            <MoonIcon
              className={
                'hidden h-6 w-6 dark:inline-block ' +
                (theme !== 'system' && theme === 'dark' ? 'text-yellow-500' : 'text-slate-500')
              }
            />
          </div>
        </Listbox.Button>
        <Listbox.Options
          className={
            'absolute z-10 overflow-auto rounded-lg border border-slate-200/50 bg-slate-50/50 p-1 backdrop-blur dark:border-slate-800/50 dark:bg-slate-900/50 ' +
            menuPosition
          }
        >
          {settings.map(({ value, label, icon: Icon }) => (
            <Listbox.Option key={value} value={value} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={
                    'flex cursor-pointer items-center rounded-md py-1 px-2' +
                    (active ? ' bg-slate-200 dark:bg-slate-800' : '') +
                    (selected && value === 'light' ? ' text-red-500' : '') +
                    (selected && value === 'dark' ? ' text-yellow-500' : '')
                  }
                >
                  <Icon className="mr-2 h-6 w-6" />
                  {label}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </span>
  )
}

export default ThemeToggle
