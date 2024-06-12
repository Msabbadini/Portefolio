/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Développeur Web & Web Mobile","location":"Saint Raphaël, Var","url":"https://monavenirpro-hdf.fr/formation/titre-professionnel-developpeur-web-et-web-mobile/","institute":"Greta du Var","date":"2020-2021","tags":["Javascript","Html","Css","Php","Axios","Responsive","MYSQL"]};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/studies/studie2.md";
				const url = "/studies/studie2";
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
