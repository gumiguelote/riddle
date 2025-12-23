"use client";

import { useActionState } from "react";
import { validatePassword } from "./actions";

export default function Home() {
  const [state, formAction, isPending] = useActionState(
    async (
      prevState: { success: boolean; error?: string },
      formData: FormData,
    ) => {
      const input = formData.get("password") as string;

      const isValid = await validatePassword(input);

      if (isValid) {
        return {
          success: true,
        };
      } else {
        return {
          success: false,
          error: "Acesso negado. O espírito permanece adormecido.",
        };
      }
    },
    { success: false },
  );

  const isSuccess = state.success === true;

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {!isSuccess ? (
          <form
            action={formAction}
            className="flex flex-col items-center gap-8 text-center"
          >
            {/* Título */}
            <h1 className="text-5xl md:text-6xl font-cinzel text-gold tracking-widest leading-tight">
              O SÉTIMO SELO
            </h1>

            {/* Input */}
            <input
              type="text"
              name="password"
              placeholder="insira a palavra secreta"
              className="w-full max-w-sm px-6 py-3 bg-transparent border border-gold text-gold font-cinzel text-lg placeholder-gold placeholder-opacity-50 focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
              disabled={isPending}
            />

            {/* Mensagem de erro */}
            {state.error && (
              <p className="text-darkred font-cinzel text-base tracking-wide">
                {state.error}
              </p>
            )}

            {/* Botão */}
            <button
              type="submit"
              disabled={isPending}
              className="px-12 py-3 border border-gold text-gold font-cinzel text-lg tracking-widest uppercase hover:bg-gold hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "DESBLOQUANDO..." : "DESBLOQUEAR"}
            </button>

            {/* Link de dica */}
            <div className="mt-8 text-sm font-cinzel text-gold">
              <a
                href="https://www.youtube.com/watch?v=rQ-UItNBoMw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-opacity-80 transition-opacity border-b border-gold pb-1"
              >
                Aos buscadores da verdade, ouçam o som
              </a>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-cinzel text-gold tracking-widest">
              SELO ROMPIDO
            </h2>
            <p className="text-lg font-cinzel text-gold leading-relaxed max-w-lg mx-auto tracking-wide">
              Acesso concedido. <br />O selo digital foi rompido. O próximo
              segredo sustenta o cálice e o pão, mas vive na sombra. <br />{" "}
              Busque sob o{" "}
              <span className="inline border-b border-gold">
                Altar de Quatro Pilares
              </span>{" "}
              no centro da sala de convivência. <br />
              Olhe para cima, a partir de baixo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
