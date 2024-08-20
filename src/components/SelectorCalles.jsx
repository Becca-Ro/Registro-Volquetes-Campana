"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import calles from "../assets/data/calles";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";


const frameworks = calles.map((calle, index) => {
  return { value: index.toString(), label: calle };
});

function SelectorCalles({ name, setValue, value }) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (selectedValue) => {
    const value = frameworks.find(
      (framework) => framework.label === selectedValue
    )?.value;
    setValue(name, value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-lg text-white "
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Seleccionar Calle"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Calle" />
          <CommandEmpty>Calle no encontrada</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.label}
                  onSelect={(currentValue) => handleSelect(currentValue)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default SelectorCalles;

