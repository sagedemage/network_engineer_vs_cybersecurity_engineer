import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.addPassthroughCopy("theme.css");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("assets/*.png");
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(HtmlBasePlugin);
};

export const config = {
	pathPrefix: "/network_engineer_vs_cybersecurity_engineer/",
}