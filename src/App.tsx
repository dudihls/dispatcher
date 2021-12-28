import "./App.css";
import { FlexLayout } from "./components/FlexLayout/FlexLayout";
import { Card } from "./components/Card/Card";
import { Input } from "./components/Input/Input";
import { ThemeProvider } from "styled-components";
import { theme } from "./global-styles/theme";
import { GlobalStyles } from "./global-styles/Global";
import { Navbar } from "./components/Navbar/Navbar";
const args = {
  img: "https://i.natgeofe.com/k/8fd6eca1-0808-4e4a-ac49-bb87f8821a0b/first-olympics-textimage_2_4x3.jpg",
  content:
    "Make it five for Caeleb Dressel.\r\nThe American star won his fifth gold medal of the Tokyo Games, finishing off one of the great performances in Olympic history. He joins an elite club of just four ot… [+1179 chars]",
  date: "Friday Jun 25, 2021",
  tags: ["sport", "news", "+2"],
  header:
    "Caeleb Dressel joins elite club with 5th Olympic gold medal - Fox News",
  source: "Associated Press, Fox News",
  onClick: () => console.log("hello world"),
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FlexLayout direction="col">
        <Navbar />
        <FlexLayout direction="col" rp={30} lp={30}>
          <Card {...args}></Card>
          <Input onChange={() => console.log("Jeez")} placeholder="Search" />
        </FlexLayout>
      </FlexLayout>
    </ThemeProvider>
  );
}

export default App;
