"use client";

import { Info, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay } from "@/components/ui/dialog";
import Button from "@/components/ui/retro-btn";

interface PackInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  packType: 'limpieza' | 'menaje';
}

const packContent = {
  limpieza: {
    title: "Pack de Limpieza",
    items: [
      "Bolsas de basura 2 rollos de 5 bolsas",
      "Bayetas 1 pack de 9 unidades",
      "Estropajos multiuso 1 pack de 3 unidades",
      "Guantes de látex/nitrilo 1 caja de 100 unidades",
      "Papel secamanos/rollos de cocina 1 pack de 4 unidades",
      "Jabón líquido 2 botellas",
      "Papel higiénico 6 rollos",
      "Lavavajillas 2 botellas",
      "Lejía 1 botella de 2L",
      "Desinfectante de superficies 2 botellas"
    ]
  },
  menaje: {
    title: "Pack de Menaje",
    items: [
      "200 platos 22cm de diámetro",
      "100 cuchillos",
      "100 tenedores",
      "100 cucharas",
      "100 cucharillas postre/café",
      "100 vasos café",
      "200 servilletas",
      "1 mantel 25m"
    ]
  }
};

export default function PackInfoModal({ isOpen, onClose, packType }: PackInfoModalProps) {
  const pack = packContent[packType];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="backdrop-blur-sm bg-black/30" />
      <DialogContent 
        className="max-w-md mx-auto bg-white border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] rounded-none p-0 gap-0"
        showCloseButton={false}
      >
        <DialogHeader className="border-b border-gray-300 bg-[var(--complementary-color-yellow)]/10 p-4 flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="font-clash-display font-bold text-xl text-[var(--primary-color)] flex items-center gap-2">
            <Info size={20} />
            {pack.title}
          </DialogTitle>
          <Button
            onClick={onClose}
            variant="outline"
            size="md"
            className="!w-10 !h-10 flex items-center justify-center flex-shrink-0"
          >
            <X size={18} className="flex-shrink-0" />
          </Button>
        </DialogHeader>

        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-clash-display font-medium text-[var(--secondary-color)] text-sm">
              Contenido incluido:
            </span>
          </div>

          <div className="space-y-2">
            {pack.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 border-2 border-gray-200 bg-gray-50"
              >
                <span className="text-[var(--complementary-color-green)] font-bold text-sm mt-0.5">
                  ✓
                </span>
                <span className="font-khand text-sm text-[var(--secondary-color)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 