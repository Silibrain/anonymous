import Footer from "./Footer";
import GraphContainer from "./GraphContainer";
import ItemCard from "./ItemCard ";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";
import PatientsCard from "./PatientsCard";
import PracticionersCard from "./PracticionersCard";
import ReportContainer from "./ReportContainer";
import Wrapper from "./Wrapper";
import CalendarPanel from "./CalendarPanel";


const panels = {
  AccountPanel: AccountPanel,
  CalendarPanel: CalendarPanel,
  Footer: Footer,
  GraphContainer: GraphContainer,
  ItemCard: ItemCard, 
  Jumbotron: Jumbotron,
  NavBar: NavBar,
  PatientsCard: PatientsCard,
  PracticionersCard: PracticionersCard,
  ReportContainer: ReportContainer,
  Wrapper: Wrapper
};

export default panels;
export { AccountPanel, CalendarPanel, Footer, GraphContainer, ItemCard, Jumbotron, NavBar, PatientsCard, PracticionersCard, ReportContainer, Wrapper };



