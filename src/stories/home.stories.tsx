// this is the Name.stories.jsx file
import React from "react";
import { Home } from "./home";

export default {
    title: "Page/Home",
    component: Home,
};

const Template = () => <Home />;

export const Primary = Template.bind({});