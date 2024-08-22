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
import fCalles from "@/assets/data/callesApi";

function SelectorCalle({ value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const [frameworks, setFrameworks] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fCalles();
      setFrameworks(data);
    };
    fetchData();
  }, []);

  const selectedFramework = frameworks.find(
    (framework) => framework.id === value
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[265px] justify-between text-lg text-white texto overflow-hidden shadow-md"
        >
          {selectedFramework
            ? selectedFramework.descripcion
            : "Seleccionar Calle"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar Calle" className="h-9" />
          <CommandEmpty>Calle no encontrada</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.id}
                  onSelect={() => {
                    console.log("onChange:", onChange);
                    if (typeof onChange === "function") {
                      onChange(framework.id);
                    } else {
                      console.error("onChange is not a function");
                    }
                    setOpen(false);
                  }}
                >
                  {framework.descripcion}
                  <Check
                    className={cn(
                      "h-4 w-4",
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

export default SelectorCalle;
