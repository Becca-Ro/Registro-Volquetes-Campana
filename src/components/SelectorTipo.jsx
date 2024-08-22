"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  { id: 1, value: "Aridos" },
  { id: 2, value: "Ramas" },
];

function SelectorTipo({ value, onChange }) {
  const [open, setOpen] = React.useState(false);


  const selectedFramework = frameworks.find((framework) => framework.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-lg text-white texto shadow-md"
        >
          {selectedFramework ? selectedFramework.value : "Seleccionar tipo"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar tipo" className="h-9" />
          <CommandEmpty>Tipo no encontrado</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.id}
                  onSelect={() => {
                    onChange(framework.id); 
                    setOpen(false);
                  }}
                >
                  {framework.value}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default SelectorTipo;
