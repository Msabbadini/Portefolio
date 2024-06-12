/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Développeur d'application - JavaScript React","location":"À distance","url":"https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react","institute":"OpenClassroom","date":"2022-2024","tags":["React JS","Axios","Javascript","Redux","Recharts","Jest","Figma","Css","Scss","Tailwind css","Typescript"]};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/studies/studie1.md";
				const url = "/studies/studie1";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
