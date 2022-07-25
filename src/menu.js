import { RouterLink } from "vue-router";
import { h} from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
  CalculatorOutline as CalculatorIcon,
  SyncCircleOutline as SyncIcon
} from "@vicons/ionicons5";

export function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}


export const MenuOptions = [
  {
    label: () => h(RouterLink, {
      to: {
        name: "Home",
      }
    }, { default: () => "Going Home" }),
    key: "go-back-home",
    icon: renderIcon(HomeIcon)
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px"
      }
    }
  },
  {
    label: () => h(RouterLink, {
      to: {
        name: "About",
      }
    }, { default: () => "About us" }),
    key: "About-us-More",
    icon: renderIcon(BookIcon)
  },
];