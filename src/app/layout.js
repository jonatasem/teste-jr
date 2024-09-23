import '../sass/global.scss';
import { TodoProvider } from '../context/TodoContext'; // Importe o TodoProvider

// Descrições
export const metadata = {
  title: "Gerenciador de Tarefas",
  description: "lorem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="containerBody">
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}