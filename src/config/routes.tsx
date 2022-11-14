import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";
import { First } from "../components/welcome/First";
import { FirstActions } from "../components/welcome/FirstActions";
import { Second } from "../components/welcome/Second";
import { SecondActions } from "../components/welcome/SecondActions";
import { Third } from "../components/welcome/Third";
import { ThirdActions } from "../components/welcome/ThirdActions";
import { Fourth } from "../components/welcome/Fourth";
import { FourthActions } from "../components/welcome/FourthActions";
import { StartPage } from "../views/StartPage";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { ItemPage } from "../views/ItemPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { TagPage } from "../views/TagPage";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      { path: "1", name: "Welcome1", components: { main: First, footer: FirstActions } },
      { path: "2", name: "Welcome2",components: { main: Second, footer: SecondActions } },
      { path: "3", name: "Welcome3",components: { main: Third, footer: ThirdActions } },
      { path: "4", name: "Welcome4",components: { main: Fourth, footer: FourthActions } },
    ],
  },
  {path:'/start', component: StartPage},
  {
    path:'/items',component:ItemPage,
    children:[
      {path:'',component:ItemList},
      {path:'create',component:ItemCreate}
    ]
  },
  {
    path: '/tags', component: TagPage,
    children: [
      {path: 'create', component: TagCreate},
      {path: ':id', component: TagEdit}
    ]
  }
];
