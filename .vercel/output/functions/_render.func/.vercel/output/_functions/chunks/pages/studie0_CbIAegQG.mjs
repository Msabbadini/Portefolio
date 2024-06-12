/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Développement Personnel","location":"Draguignan, Var","url":"https://www.freecodecamp.org/","institute":"Internet","date":"2020-Aujourd'hui","tags":["Youtube","FreeCodeCamp","Udemy","Apprentissage autodidacte"]};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/studies/studie0.md";
				const url = "/studies/studie0";
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
