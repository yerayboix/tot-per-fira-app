"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type Presupuesto } from "@/types/presupuesto";

interface PersonalInfoStepProps {
  form: any;
  presupuesto: Presupuesto;
  onUpdate: (data: Partial<Presupuesto>) => void;
}

export default function PersonalInfoStep({ form, presupuesto, onUpdate }: PersonalInfoStepProps) {
  return (
    <div className="border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] bg-white p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div>
          <form.Field name="nombreCompleto">
            {(field: any) => (
              <div className="space-y-3">
                <Label 
                  htmlFor={field.name}
                  className="text-[var(--secondary-color)] font-clash-display font-bold text-base md:text-lg"
                >
                  Nombre Completo *
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                    onUpdate({ nombreCompleto: e.target.value });
                  }}
                  placeholder="Introduce tu nombre completo"
                  className="border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] font-clash-display p-3 focus:outline-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all rounded-none"
                />
                {field.state.meta.errors.map((error: any) => (
                  <p key={error?.message} className="text-red-600 text-sm font-clash-display border-2 border-red-600 bg-red-50 p-2 rounded-none">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="correoElectronico">
            {(field: any) => (
              <div className="space-y-3">
                <Label 
                  htmlFor={field.name}
                  className="text-[var(--secondary-color)] font-clash-display font-bold text-base md:text-lg"
                >
                  Correo Electrónico *
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                    onUpdate({ correoElectronico: e.target.value });
                  }}
                  placeholder="ejemplo@correo.com"
                  className="border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] font-clash-display p-3 focus:outline-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all rounded-none"
                />
                {field.state.meta.errors.map((error: any) => (
                  <p key={error?.message} className="text-red-600 text-sm font-clash-display border-2 border-red-600 bg-red-50 p-2 rounded-none">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="numeroTelefono">
            {(field: any) => (
              <div className="space-y-3">
                <Label 
                  htmlFor={field.name}
                  className="text-[var(--secondary-color)] font-clash-display font-bold text-base md:text-lg"
                >
                  Número de Teléfono *
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="tel"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                    onUpdate({ numeroTelefono: e.target.value });
                  }}
                  placeholder="123456789"
                  className="border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] font-clash-display p-3 focus:outline-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all rounded-none"
                />
                {field.state.meta.errors.map((error: any) => (
                  <p key={error?.message} className="text-red-600 text-sm font-clash-display border-2 border-red-600 bg-red-50 p-2 rounded-none">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>
      </div>
    </div>
  );
}