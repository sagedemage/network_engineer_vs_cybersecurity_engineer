import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.addPassthroughCopy("theme.css");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("assets/*.png");
	eleventyConfig.addPlugin(EleventyVitePlugin);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};