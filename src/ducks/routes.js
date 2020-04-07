import { HomePageSection } from "../pages/homePage";
import { BlockDetailDashboard } from '../pages/blockDetails'
export const appRoutes = [
  {
    path: "/",
    Component: HomePageSection
  },
  {
    path: "/blockDetails/:id",
    Component: BlockDetailDashboard
  }
];
