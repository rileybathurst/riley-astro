// this is the Name.stories.jsx file
import React from "react";
import { PageTemplate } from "./page";

export default {
    title: "Templates/Page",
    component: PageTemplate,
};

const Template = () => <PageTemplate />;

export const Primary = Template.bind({});