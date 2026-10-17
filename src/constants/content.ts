export const JOKE_DELAY_MS = 5000;
export const PAY_DURATION_MS = 2300;

export type PlanId = "single" | "unlimited" | "promax";

export interface Plan {
  id: PlanId;
  title: string;
  description: string;
  price: string;
}

export const PLANS: Plan[] = [
  {
    id: "single",
    title: "Apagado único",
    description: "Apaga la linterna 1 vez",
    price: "$5.99",
  },
  {
    id: "unlimited",
    title: "Apagado ilimitado",
    description: "Apágala cuantas veces quieras",
    price: "$9.99/mes",
  },
  {
    id: "promax",
    title: "Oscuridad Pro Max",
    description: "Apagado con IA generativa",
    price: "$49.99/mes",
  },
];

export const CANCEL_TEXTS = [
  "Cancelar",
  "Cancelar no está incluido en tu plan",
  "En serio, no se puede",
  "Sigue intentando…",
] as const;
