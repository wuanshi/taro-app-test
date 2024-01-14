import { TEST_APP } from "./constants/app-type";

const pages = ["pages/index/index", "pages/bbb/index"];

const packageA_pages = ["pages/aaa/index", "pages/demo/index"]

if(process.env.APP === TEST_APP) {
  pages.unshift("pages/test/index")
  packageA_pages.push("pages/testa/index")
}

export default defineAppConfig({
  pages: pages,
  subPackages: [
    {
      root: "packageA",
      pages: packageA_pages,
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
