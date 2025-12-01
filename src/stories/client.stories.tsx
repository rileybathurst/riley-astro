// this is the Name.stories.jsx file
import React from "react";
import { Client } from "./client";

export default {
    title: "Templates/client",
    component: Client,
};

const Template = () => <Client />;

export const Primary = Template.bind({});