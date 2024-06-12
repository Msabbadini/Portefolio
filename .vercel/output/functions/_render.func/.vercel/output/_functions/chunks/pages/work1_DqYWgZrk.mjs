/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Mise en place de quatres sites internets.</li>\n<li>Mise en place de deux applications mobiles.</li>\n<li>Mise en place du backend.</li>\n</ul>";

				const frontmatter = {"title":"Développeur Web & Mobile","date":"2022 - 2024","url":"https://www.jobbiz.fr/","location":"À distance","org":"Jobbiz Interim","tags":["React JS","Flutter","MongoDB","Node JS","Tailwind CSS","OneSignal","Intercom"]};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n- Mise en place de quatres sites internets.\n- Mise en place de deux applications mobiles.\n- Mise en place du backend.\n\n";
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
