import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { SelectedProjectProvider, ProjectsProvider } from "./context";

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
          <Header />
          <Content />
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
