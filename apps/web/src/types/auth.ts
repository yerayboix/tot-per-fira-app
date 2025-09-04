import type { auth } from "@/lib/auth";

// Extender los tipos de Better Auth para incluir el campo role
export type Session = typeof auth.$Infer.Session & {
  user: typeof auth.$Infer.Session.user & {
    role: "user" | "admin";
  };
};

export type User = typeof auth.$Infer.Session.user & {
  role: "user" | "admin";
}; 