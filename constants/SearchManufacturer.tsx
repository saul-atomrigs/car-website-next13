'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';

type SearchManufacturerProps = {
  manufacturer: string,
  setManufacturer: (manufacturer: string) => void,
};

export default function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter(manufacturer =>
          manufacturer
            .toLowerCase()
            .replace(/\s/g, '')
            .includes(query.toLowerCase().replace(/\s/g, '')),
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          {/* 드롭다운 메뉴 보여주기 위한 버튼: */}
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          {/* 검색창 */}
          <Combobox.Input
            className="w-full h-12 pl-12 pr-4 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            displayValue={(item: string) => item}
            onChange={event => setQuery(event.target.value)}
            placeholder="제조사를 검색하세요"
          />

          {/*  */}
          <Transition
            as={Fragment} // <></> 대신 사용
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')} // 검색창 비우기
          >
            <Combobox.Options
              className="absolute w-full py-2 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create {query}
                </Combobox.Option>
              ) : (
                filteredManufacturers.map(item => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? 'text-white'
                                : 'text-pribg-primary-purple'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
